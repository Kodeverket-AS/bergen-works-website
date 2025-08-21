import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
import { parseBody } from 'next-sanity/webhook';

export async function POST(req: NextRequest) {
  // Log webhook attemp
  console.info('[Sanity revalidate tag api route]', { message: 'New revalidate request', origin: req.url });

  try {
    // Load webhook secret
    if (!process.env.SANITY_WEBHOOK_KEY) {
      console.error('[Sanity revalidate tag api route]', { error: 'Webook initialized without secret key' });
      return new Response('Missing environment variable SANITY_REVALIDATE_SECRET', { status: 500 });
    }

    // Destructure body from webhook request
    const { isValidSignature, body } = await parseBody<{ tags: string[] }>(req, process.env.SANITY_WEBHOOK_KEY, true);

    if (!isValidSignature) {
      const message = 'Invalid signature';
      console.error('[Sanity revalidate tag api route]', { error: 'Route called without propper secret' });
      return new Response(JSON.stringify({ message, isValidSignature, body }), {
        status: 401,
      });
    } else if (!Array.isArray(body?.tags) || !body.tags.length) {
      const message = 'Bad Request';
      return new Response(JSON.stringify({ message, body }), { status: 400 });
    }

    // Revalidate tags
    body.tags.forEach((tag) => {
      revalidateTag(tag);
    });

    console.info('[Sanity revalidate tag api route]', { ok: true, tags: body.tags });
    return NextResponse.json({ body });
  } catch (error) {
    // Catch any runtime errors during revalidation
    console.error('[Sanity revalidate tag api route]', { error });
    return new Response((error as Error).message, { status: 500 });
  }
}
