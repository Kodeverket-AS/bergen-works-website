import { type WpEvent } from '@/types/apollo/events.types';
import { EventCardPreview } from '@/components/ui/cards/eventPreview';
import Link from 'next/link';

export function UpcomingEvents({ events }: { events: WpEvent[] }) {
  const slizedArray = events.slice(0, 3);

  // Hide component if there are no upcoming events
  if (slizedArray.length === 0) return null;

  return (
    <div className='flex flex-col items-center gap-4 my-8'>
      <Link href='/events' className='text-3xl'>
        Neste hendelser
      </Link>
      <div className='w-full grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {slizedArray.map((event) => (
          <EventCardPreview key={event.slug} {...event} />
        ))}
      </div>
    </div>
  );
}
