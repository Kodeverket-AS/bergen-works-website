import { wpFetchEvent } from '@/lib/apollo/fetch/events/event';
import { wpFetchEvents } from '@/lib/apollo/fetch/events/events';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const result = await wpFetchEvents();

  // Quietly quit on error
  if (result.error) return [];

  return result.events.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return { title: `Bergen Works - ${slug}` };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const result = await wpFetchEvent(slug);

  if (result.error || !result.event) return notFound();

  const { title, featuredImage } = result.event;

  return (
    <main className='flex flex-col items-center gap-8 pb-8'>
      <Image
        src={featuredImage?.node?.sourceUrl || '/KoV-ov.png'}
        alt={featuredImage?.node?.altText || 'Alt text missing'}
        sizes='100vw'
        style={{
          width: '100%',
          height: 'auto',
          aspectRatio: '16/9',
          objectFit: 'contain',
        }}
        width={500}
        height={300}
      />
      <h1>{title}</h1>
      <pre>{JSON.stringify(result.event, null, 2)}</pre>
    </main>
  );
}
