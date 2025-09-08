'use client';

import { type WpEvent } from '@/types/apollo/events.types';
import { EventCalendarGridBoxEvent } from './eventCalendarGridBoxEvent';
import { useState } from 'react';
import { EventCalendarTooltip } from '../modal/eventCalendarTooltip';
import { useClickPosition } from '@/hooks/useClickPosition';

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
}: {
  dayItem: DayItem;
  index: number;
  activeDate: Date;
}) {
  const [modalData, setModalData] = useState<WpEvent | null>(null);
  const [position, setPosition] = useClickPosition();

  return (
    <div
      className={`
        relative
        aspect-square w-full border rounded-md cursor-pointer pb-1 pt-4 sm:pt-6
        ${dayItem.isInCurrentMonth ? 'border-gray-300' : 'border-gray-200'}
        ${dayItem.isToday ? 'border-moss-400 border-2' : ''}
        hover:shadow-md duration-200
      `}
    >
      {dayItem.hasEvents && (
        <div className={`flex flex-col gap-1 w-full h-full overflow-y-scroll no-scrollbar`}>
          {dayItem.events.map((event, eventIndex) => (
            <EventCalendarGridBoxEvent
              key={`calendar-day-${index}-${eventIndex}`}
              event={event}
              thisDate={dayItem.date}
              setModal={(data) => setModalData(data)}
              setPosition={setPosition}
            />
          ))}
        </div>
      )}
      <p
        className={`
          absolute top-0 left-1
          ${dayItem.isToday ? 'text-sm sm:text-lg md:text-xl' : 'text-xs sm:text-sm md:text-lg'}
          ${dayItem.isInCurrentMonth ? '' : 'text-gray-300'}
        `}
      >
        {dayItem.dayNumber}
      </p>
      {modalData && <EventCalendarTooltip event={modalData} onClose={() => setModalData(null)} position={position} />}
    </div>
  );
}
