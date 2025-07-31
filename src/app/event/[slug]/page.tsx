// Test data during development
import testData from '@/data/testEvents.json';

// Global
import { type WpEvent } from '@/types/apollo/events.types';
import Image from 'next/image';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { GoogleMapsEmbed } from '@next/third-parties/google';
import { dateStringFormat, dateStringToRelative } from '@/utils/dates';
// import { wpFetchEvent } from '@/lib/apollo/fetch/events/event';

// Components
import { SectionWrapper } from '@/components/layout/sections/wrapper';
import { IconText } from '@/components/ui/text/iconText';
import { EventOrginizerCard } from '@/components/ui/cards/eventOrginizer';
import { AddToCalendarButton } from '@/components/ui/buttons/events/addToCalendar';
import { ShareToSocialButton } from '@/components/ui/buttons/events/shareToSocial';

// Icons
import EventIcon from '@mui/icons-material/Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import MapIcon from '@mui/icons-material/Map';

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

  const fileredEvent = testData.filter((event) => event.slug === slug);

  const result = {
    event: fileredEvent.length > 0 ? fileredEvent.at(0) : null,
    error: fileredEvent.length === 0 ? 'No such post' : null,
  };

  // Redirect to 404 page if event doesn't exist
  if (result.error || !result.event) return notFound();

  // Bind event result for easier access
  const event = result.event as unknown as WpEvent;

  return (
    <main className='w-full grid grid-cols-1: sm:grid-cols-3 gap-8 pb-8 h-s'>
      <SectionWrapper className='relative aspect-video !p-0 sm:col-span-2 sm:row-span-2 overflow-clip'>
        <Image
          src={event.featuredImage?.node?.sourceUrl || '/KoV-ov.png'}
          alt={event.featuredImage?.node?.altText || 'Alt text missing'}
          sizes='100vw'
          fill
          className='object-cover rounded-md'
        />
        <span className='absolute left-0 bottom-0 m-4 p-4 rounded-md bg-white shadow-xl overflow-hidden'>
          {/* todo: fix header overflow i mobile */}
          <h1 className='text-3xl text-nowrap lg:text-wrap truncate'>{event.title}</h1>
        </span>
      </SectionWrapper>
      <SectionWrapper className='col-start-1 sm:col-span-2 sm:row-span-2 gap-4'>
        {event.content && (
          <div
            dangerouslySetInnerHTML={{ __html: event.content }}
            className='flex flex-col gap-2 [&_ul]:list-disc [&_ul]:list-inside'
          ></div>
        )}
      </SectionWrapper>
      <SectionWrapper className='sm:col-start-3 sm:row-start-1'>
        <h2 className='text-2xl'>Event detaljer</h2>
        <IconText
          icon={<EventIcon />}
          text={dateStringFormat(event.startDate, { dateStyle: 'full' })}
          className='capitalize'
        />
        {event.allDay ? (
          <IconText icon={<AccessTimeIcon />} text='Hele dagen' />
        ) : (
          <>
            <IconText icon={<AccessTimeIcon />} text={dateStringFormat(event.startDate, { timeStyle: 'short' })} />
            <IconText icon={<AvTimerIcon />} text={`${event.duration / 60 / 60} Timer`} />
          </>
        )}
      </SectionWrapper>
      <SectionWrapper className='sm:col-start-3 sm:row-start-2'>
        <AddToCalendarButton
          title={event.title}
          content={event.excerpt || ''}
          address={event.venue?.address || ''}
          end={event.endDate}
          start={event.startDate}
          allDay={event.allDay}
        />
        <ShareToSocialButton title={event.title} />
      </SectionWrapper>
      <SectionWrapper className='sm:col-start-3 sm:row-start-3'>
        <h2 className='text-2xl'>Lokasjon</h2>
        {event.venue?.address && (
          <>
            <div className='bg-gray-100 rounded-md overflow-hidden'>
              <GoogleMapsEmbed
                apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
                height={300}
                width='100%'
                mode='place'
                q={`${event.venue.address}%2C+${event.venue.city}%2C+${event.venue.country}`}
              />
            </div>
            <span className='flex flex-col p-2 border rounded-md'>
              <p>
                {event.venue?.address}, {event.venue?.city}
              </p>
              <p>
                {event.venue?.zip}, {event.venue?.country}
              </p>
            </span>
          </>
        )}
      </SectionWrapper>
      <SectionWrapper className='sm:col-start-1 sm:col-span-3'>
        <h2 className='text-2xl'>{event.organizers.nodes.length > 1 ? 'Hosts' : 'Host'}</h2>
        <div className='grid gap-2 grid-cols-1 lg:grid-cols-2'>
          {event.organizers.nodes.map((organizer, index) => (
            <EventOrginizerCard key={`${organizer.title}-${index}`} {...organizer} />
          ))}
        </div>
      </SectionWrapper>
      <SectionWrapper className='sm:col-start-3 sm:row-start-4'>
        <h2 className='text-2xl'>Metadata</h2>
        {event.eventsCategories.nodes.length > 0 && (
          <div className='flex flex-col gap-2'>
            <h3>Kategori</h3>
            <span className='flex gap-2 flex-wrap'>
              {event.eventsCategories.nodes.map((category) => (
                <p key={category.slug} className='text-sm bg-blue-100 px-2 shadow-sm rounded-full'>
                  {category.name}
                </p>
              ))}
            </span>
          </div>
        )}
        {event.tags.nodes.length > 0 && (
          <div className='flex flex-col gap-2'>
            <h3>Tags</h3>
            <span className='flex gap-2 flex-wrap'>
              {event.tags.nodes.map((tag) => (
                <p key={tag.slug} className='text-sm bg-green-100 px-2 shadow-sm rounded-full'>
                  {tag.name}
                </p>
              ))}
            </span>
          </div>
        )}
        <div className='flex flex-col gap-2'>
          <h2>Eventen ble laget</h2>
          <IconText icon={<EventIcon />} text={dateStringFormat(event.date, { dateStyle: 'full' })} />
        </div>
        {event.modified !== event.date && (
          <div className='flex flex-col gap-2'>
            <h2>Sist oppdatert</h2>
            <IconText icon={<EditCalendarIcon />} text={dateStringToRelative(event.modified)} />
          </div>
        )}
      </SectionWrapper>
    </main>
  );
}
