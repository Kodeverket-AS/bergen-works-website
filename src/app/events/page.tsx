import { CalendarContainer } from '@/components/ui/calendar/calendar';
import testData from '@/data/testEvents.json';
import { WpEvent } from '@/types/apollo/events.types';

export default async function EventsPage() {
  // Fetch all events from wordpress
  // const response = await wpFetchEvents();
  const response = { events: testData as WpEvent[], error: null };

  // Print error message if we encounter it
  if (response.error) return <main>{response.error}</main>;

  return (
    <main className='flex flex-col gap-4 mb-8'>
      <CalendarContainer events={response.events} />
    </main>
  );
}
