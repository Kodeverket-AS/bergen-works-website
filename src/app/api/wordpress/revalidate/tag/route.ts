import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
import { z } from 'zod';

const BodySchema = z
  .object({
    type: z.enum(['post', 'event']),
    cause: z.enum(['create', 'update', 'deleted']),
    slug: z.string().min(1).optional(),
    secret: z.string().min(1),
  })
  .superRefine((val, ctx) => {
    if (val.cause === 'update' && !val.slug) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['slug'], message: 'slug is required when cause is "update"' });
    }
    if (val.cause !== 'update' && val.slug) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['slug'],
        message: 'slug must not be provided unless cause is "update"',
      });
    }
  });

export async function POST(request: NextRequest) {
  // Allow secret via header or body; body takes precedence
  const headerSecret = request.headers.get('x-webhook-secret') ?? '';

  // Parse body
  let parsed;
  try {
    const body = await request.json();
    parsed = BodySchema.safeParse(body);
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: 'Invalid payload', message: parsed.error.flatten() }, { status: 400 });
  }

  // Destructure body from webhook request
  const { type, cause, slug, secret } = parsed.data;

  // Load webhook secret
  const serverSecret = process.env.WORDPRESS_WEBHOOK_KEY;
  if (!serverSecret) {
    // Misconfiguration—don’t leak details
    return NextResponse.json({ ok: false, error: 'NextJS not configured' }, { status: 500 });
  }

  // Prefer body secret; fallback to header
  const providedSecret = secret || headerSecret;
  if (providedSecret !== serverSecret) {
    return NextResponse.json({ ok: false, error: "ah-ah-AH!, you didn't say the magic word." }, { status: 401 });
  }

  // Revalidate tags based on type and action
  try {
    if (type === 'post') {
      if (cause === 'create') {
        revalidateTag('posts');
      } else if (cause === 'update') {
        revalidateTag(`post:${slug!}`);
      } else if (cause === 'deleted') {
        revalidateTag('posts');
      }
    } else if (type === 'event') {
      if (cause === 'create') {
        revalidateTag('events');
      } else if (cause === 'update') {
        revalidateTag(`event:${slug!}`);
      } else if (cause === 'deleted') {
        revalidateTag('events');
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    // Catch any runtime errors during revalidation
    console.error('[Wordpress revalidate tag api route]', { error });
    return NextResponse.json({ ok: false, error: 'Revalidation failed' }, { status: 500 });
  }
}
