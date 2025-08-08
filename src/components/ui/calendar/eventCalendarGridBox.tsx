'use client';

import { type WpEvent } from '@/types/apollo/events.types';
import { EventCalendarGridBoxEvent } from './eventCalendarGridBoxEvent';

export interface DayItem {
  dayNumber: number;
  date: Date;
  isToday: boolean;
  isInCurrentMonth: boolean;
  hasEvents: boolean;
  events: WpEvent[];
}

export function EventCalendarGridBox({
  dayItem,
  index,
  activeDate,
  setDate,
}: {
  dayItem: DayItem;
  index: number;
  activeDate: Date;
  setDate: () => void;
}) {
  return (
    <div
      onClick={setDate}
      className={`
        relative
        aspect-square w-full border rounded-md cursor-pointer pb-1 pt-4 sm:pt-6
        ${dayItem.isInCurrentMonth ? 'border-gray-300' : 'border-gray-200'}
        ${dayItem.date.toDateString() === activeDate.toDateString() ? 'shadow-md' : ''}
        duration-200
      `}
    >
      {dayItem.hasEvents && (
        <div className={`flex flex-col gap-1 w-full h-full overflow-y-scroll no-scrollbar`}>
          {dayItem.events.map((event, eventIndex) => (
            <EventCalendarGridBoxEvent
              key={`calendar-day-${index}-${eventIndex}`}
              event={event}
              thisDate={dayItem.date}
            />
          ))}
        </div>
      )}
      <p
        className={`
          absolute top-0 left-1
          text-xs sm:text-sm md:text-lg
          ${dayItem.isToday ? 'text-2xl' : ''}
          ${dayItem.isInCurrentMonth ? '' : 'text-gray-300'}
        `}
      >
        {dayItem.dayNumber}
      </p>
    </div>
  );
}
