import testData from '@/data/testEvents.json';
import { CalendarContainer } from '@/components/ui/calendar/calendar';
import { CalendarUpcomingContainer } from '@/components/ui/calendar/upcoming';
import { WpEvent } from '@/types/apollo/events.types';

export default async function EventsPage() {
  // Fetch all events from wordpress
  // const response = await wpFetchEvents();
  const response = { events: testData as WpEvent[], error: null };

  // Print error message if we encounter it
  if (response.error) return <main>{response.error}</main>;

  return (
    <main className='w-full grid grid-cols-1: sm:grid-cols-3 gap-8 pb-8'>
      <CalendarContainer events={response.events} />
      <CalendarUpcomingContainer events={response.events} />
    </main>
  );
}
