import { EventOrginizerCard } from '@/components/ui/cards/eventOrginizer';
import { SectionCard } from '@/components/ui/cards/sectionCard';
import { wpFetchEvent } from '@/lib/apollo/fetch/events/event';
import { wpFetchEvents } from '@/lib/apollo/fetch/events/events';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import testData from '@/data/testEvents.json';
import { WpEvent } from '@/types/apollo/events.types';

/* export async function generateStaticParams() {
  const result = await wpFetchEvents();

  // Quietly quit on error
  if (result.error) return [];

  return result.events.map((item) => ({
    slug: item.slug,
  }));
} */

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return { title: `Bergen Works - ${slug}` };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  // const result = await wpFetchEvent(slug);
  const result = { event: testData.at(1) as WpEvent, error: null };

  // Redirect to 404 page if event doesn't exist
  if (result.error || !result.event) return notFound();

  // Bind event result for easier access
  const event = result.event;

  return (
    <main className='w-full grid grid-cols-1: sm:grid-cols-3 gap-8 pb-8 h-s'>
      <SectionCard className='relative aspect-video !p-0 sm:col-span-2 sm:row-span-2 overflow-clip'>
        <Image
          src={event.featuredImage?.node?.sourceUrl || '/KoV-ov.png'}
          alt={event.featuredImage?.node?.altText || 'Alt text missing'}
          sizes='100vw'
          fill
          className='object-cover rounded-md'
        />
        <span className='absolute left-0 bottom-0 m-10 p-4 rounded-md bg-white shadow-xl overflow-hidden'>
          {/* todo: fix header overflow i mobile */}
          <h1 className='text-3xl text-nowrap lg:text-wrap truncate'>{event.title}</h1>
        </span>
      </SectionCard>
      <SectionCard className='col-start-1 sm:col-span-2 sm:row-span-2 gap-4'>
        {event.content && (
          <div dangerouslySetInnerHTML={{ __html: event.content }} className='flex flex-col gap-2'></div>
        )}
      </SectionCard>
      <SectionCard className='sm:col-start-3 sm:row-start-1'>
        <h2>Dato</h2>
      </SectionCard>
      <SectionCard className='sm:col-start-3 sm:row-start-2'>
        <h2>Lokasjon</h2>
      </SectionCard>
      <SectionCard className='sm:col-start-3 sm:row-start-3'>
        <h2>Meta</h2>
        <p>lag component for å lagre event i google calender etc</p>
        <p>lag component for å dele event på sosiale medier</p>
      </SectionCard>
      <SectionCard className='sm:col-start-1 sm:col-span-2'>
        <h2>Hosts</h2>
        <div className='w-full flex flex-wrap gap-4'>
          {event.organizers.nodes.map((organizer, index) => (
            <EventOrginizerCard key={`${organizer.title}-${index}`} {...organizer} />
          ))}
        </div>
      </SectionCard>
    </main>
  );
}
