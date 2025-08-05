import { wpFetchEvents } from '@/lib/apollo/fetch/events/events';
import { EventCalendar } from '@/components/ui/calendar/eventCalendar';

export default async function EventsPage() {
  // Fetch all events from wordpress
  const response = await wpFetchEvents();

  // Print error message if we encounter it
  if (response.error) return <main>{response.error}</main>;

  return (
    <main className='flex flex-col pb-8'>
      <EventCalendar events={response.events} />
    </main>
  );
}
