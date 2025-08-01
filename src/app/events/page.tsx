import { wpFetchEvents } from '@/lib/apollo/fetch/events/events';
import { EventCalendarContainer } from '@/components/layout/events/calendarContainer';

export default async function EventsPage() {
  // Fetch all events from wordpress
  const response = await wpFetchEvents();

  // Print error message if we encounter it
  if (response.error) return <main>{response.error}</main>;

  return (
    <main className='flex flex-col pb-8'>
      <EventCalendarContainer events={response.events} />
    </main>
  );
}
