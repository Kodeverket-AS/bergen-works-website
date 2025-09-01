import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
import { BodySchema } from '@/schema/webhooks/wordpress';

export async function POST(request: NextRequest) {
  // Log webhook attemp
  console.warn('[Wordpress revalidate tag api route]', { message: 'New revalidate request', origin: request.url }); // change to info;

  try {
    // Parse body
    let parsed;

    try {
      const body = await request.json();
      console.warn('[Wordpress revalidate tag api route]', { message: 'Awaiting body', body }); // remove
      parsed = BodySchema.safeParse(body);
    } catch {
      console.warn('[Wordpress revalidate tag api route]', { message: 'Invalid JSON' }); // remove
      return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
    }

    // Request did not pass validation and failed
    if (!parsed.success) {
      console.warn('[Wordpress revalidate tag api route]', { message: 'Invalid payload', parsed }); // remove
      return NextResponse.json(
        { ok: false, error: 'Invalid payload', message: parsed.error.flatten() },
        { status: 400 }
      );
    }

    console.warn('[Wordpress revalidate tag api route]', { message: 'Payload verified', data: parsed.data }); // remove;

    // Destructure body from webhook request
    const { type, cause, slug, secret } = parsed.data;

    // Load webhook secret
    const serverSecret = process.env.WORDPRESS_WEBHOOK_KEY;
    if (!serverSecret) {
      // Misconfiguration
      console.error('[Wordpress revalidate tag api route]', { error: 'Webook initialized without secret key' });
      return NextResponse.json({ ok: false, error: 'NextJS not configured' }, { status: 500 });
    }

    // Allow secret via header or body; body takes precedence
    const headerSecret = request.headers.get('x-webhook-secret') ?? '';
    const bodySecret = secret || headerSecret;
    if (bodySecret !== serverSecret) {
      console.error('[Wordpress revalidate tag api route]', { error: 'Route called without propper secret' });
      return NextResponse.json({ ok: false, error: "ah-ah-AH!, you didn't say the magic word." }, { status: 401 });
    }

    // Revalidate tags based on type and action, if update; target specific slug
    if (cause === 'update' && slug) {
      revalidateTag(`${type}:${slug}`);
    } else {
      if (cause === 'deleted' && slug) {
        revalidateTag(`${type}:${slug}`);
      }
      revalidateTag(`${type}s`);
    }

    console.warn('[Wordpress revalidate tag api route]', { ok: true, type, cause, slug }); // change to info
    return NextResponse.json({ ok: true });
  } catch (error) {
    // Catch any runtime errors during revalidation
    console.error('[Wordpress revalidate tag api route]', { error });
    return NextResponse.json({ ok: false, error: 'Revalidation failed' }, { status: 500 });
  }
}
