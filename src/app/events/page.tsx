// import { wpFetchEvents } from '@/lib/apollo/fetch/events/events';
import { wpFetchEventsByDateRange } from '@/lib/apollo/fetch/events/eventsByDate';

export default async function EventsPage() {
  const response = await wpFetchEventsByDateRange({ startDate: '2025-08-01 23:59:59', endDate: '2025-08-31 23:59:59' });

  if (response.error) return <main>{response.error}</main>;

  const events = response.events;

  events.forEach((event) => {
    console.log(event.title);
  });

  return <main>test</main>;
}
