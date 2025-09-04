import { EventCalendar } from '@/components/ui/calendar/eventCalendar';
import { wpFetchEventsServer } from '@/lib/apollo/server/events/events';

export default async function EventsPage() {
  // Fetch all events from wordpress
  const response = await wpFetchEventsServer();

  // Print error message if we encounter it
  if (response.error) return <main>{response.error}</main>;

  return (
    <main className='flex flex-col gap-6 pb-8'>
      <h1 className='text-center'>Eventer</h1>
      <EventCalendar events={response.events} />
    </main>
  );
}
