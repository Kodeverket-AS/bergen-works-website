import { type WpEvent } from '@/types/apollo/events.types';
import { EventCalendar } from '@/components/ui/calendar/eventCalendar';

export function EventCalendarContainer({ events }: { events: WpEvent[] }) {
  return (
    <div className='flex flex-col gap-4 p-4 border border-gray-200 shadow-md rounded-md'>
      <EventCalendar events={events} />
    </div>
  );
}
