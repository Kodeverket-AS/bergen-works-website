import { wpFetchEvents } from '@/lib/apollo/fetch/events/events';
import Link from 'next/link';

export default async function EventsPage() {
  // Fetch all events from wordpress
  const response = await wpFetchEvents();

  // Print error message if we encounter it
  if (response.error) return <main>{response.error}</main>;

  return (
    <main className='flex flex-col gap-4 mb-8'>
      <h1 className='text-center'>Alle events</h1>
      <div className='flex flex-col gap-2'>
        {response.events.map((event) => (
          <Link key={event.slug} href={'/event/' + event.slug}>
            {event.title}
          </Link>
        ))}
      </div>
    </main>
  );
}
