'use client';

// Global
import { type WpEvent } from '@/types/apollo/events.types';
import { useEffect, useState } from 'react';
import { getColorFromString } from '@/utils/strings';

// Icons
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';
import { dateStringFormat } from '@/utils/dates';

interface DayItem {
  dayNumber: number;
  date: Date;
  isToday: boolean;
  isInCurrentMonth: boolean;
  hasEvents: boolean;
  events: WpEvent[];
}

export function EventCalendar({ events }: { events: WpEvent[] }) {
  // States
  const [activeDate, setActiveDate] = useState<Date>(new Date());
  const calendarDays: DayItem[] = [];
  const today = new Date();

  // Constants
  const DAY_NAME = ['mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag', 'søndag'];
  // prettier-ignore
  const MONTH_NAME = [ 'januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'septemper', 'oktober', 'november', 'desember', ];

  // Gather dates
  const currentMonth = activeDate.getMonth();
  const currentYear = activeDate.getFullYear();

  // Get month specific dates
  const firstDayInMonth = new Date(currentYear, currentMonth, 1);
  const lastDayInMonth = new Date(currentYear, currentMonth + 1, 0);
  const firstDayWeekday = firstDayInMonth.getDay();
  const daysInMonth = lastDayInMonth.getDate();

  // Get previous month's last days to fill the grid
  const prevMonth = new Date(currentYear, currentMonth - 1, 0);
  const daysInPrevMonth = prevMonth.getDate();

  // Get previous month for backfilling
  for (let i = firstDayWeekday - 1; i >= 0; i--) {
    const dayNumber = daysInPrevMonth - i;
    const date = new Date(currentYear, currentMonth - 1, dayNumber);

    const eventsFiltered = events.filter((event) => {
      const eventStart = new Date(event.startDate);
      const eventEnd = new Date(event.endDate);
      if (date >= eventStart && date <= eventEnd) return event;
    });
    const hasEvents = eventsFiltered.length > 0;

    calendarDays.push({ dayNumber, date, isInCurrentMonth: false, isToday: false, hasEvents, events: eventsFiltered });
  }

  // Current months days
  for (let dayNumber = 1; dayNumber <= daysInMonth; dayNumber++) {
    const date = new Date(currentYear, currentMonth, dayNumber);
    const isToday = date.toDateString() === today.toDateString();

    const eventsFiltered = events.filter((event) => {
      const eventStart = new Date(event.startDate);
      const eventEnd = new Date(event.endDate);
      if (date >= eventStart && date <= eventEnd) return event;
    });
    const hasEvents = eventsFiltered.length > 0;

    calendarDays.push({ dayNumber, date, isInCurrentMonth: true, isToday, hasEvents, events: eventsFiltered });
  }

  // Next month's days to complete the grid
  const remainingDays = 42 - calendarDays.length; // 6 rows × 7 days
  for (let dayNumber = 1; dayNumber <= remainingDays; dayNumber++) {
    const date = new Date(currentYear, currentMonth + 1, dayNumber);

    const eventsFiltered = events.filter((event) => {
      const eventStart = new Date(event.startDate);
      const eventEnd = new Date(event.endDate);
      if (date >= eventStart && date <= eventEnd) return event;
    });
    const hasEvents = eventsFiltered.length > 0;

    calendarDays.push({ dayNumber, date, isInCurrentMonth: false, isToday: false, hasEvents, events: eventsFiltered });
  }

  // Push active events into container
  const activeEvents = events.filter((event) => {
    const eventStart = new Date(event.startDate);
    const eventEnd = new Date(event.endDate);
    const sameYear = eventStart.getFullYear() === firstDayInMonth.getFullYear();

    // Set times to start of day for comparison
    eventStart.setHours(0, 0, 0, 0);
    eventEnd.setHours(23, 59, 59, 999);

    // Check if the target date falls within the event's date range
    return sameYear && eventEnd >= firstDayInMonth && eventStart <= lastDayInMonth;
  });

  function navigateMonth(direction: 'prev' | 'next') {
    setActiveDate((prev) => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  }

  function handleMonthSelect(monthIndex: number) {
    setActiveDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(monthIndex);
      return newDate;
    });
  }

  /**
   * Helper function for quickly finding events within a date range
   */
  function getEventsByDate(date: Date): WpEvent[] {
    const targetDate = new Date(date);
    targetDate.setHours(0, 0, 0, 0);

    return events.filter((event) => {
      const eventStart = new Date(event.startDate);
      const eventEnd = new Date(event.endDate);

      // Set times to start of day for comparison
      eventStart.setHours(0, 0, 0, 0);
      eventEnd.setHours(23, 59, 59, 999);

      // Check if the target date falls within the event's date range
      return targetDate >= eventStart && targetDate <= eventEnd;
    });
  }

  return (
    <div className='flex flex-col'>
      <div className='relative flex justify-center gap-4 p-4'>
        <button onClick={() => navigateMonth('prev')} className=''>
          <ArrowBackIcon />
        </button>
        <select
          aria-label='Velg måned'
          value={currentMonth}
          onChange={(e) => handleMonthSelect(Number(e.target.value))}
          className='p-2 capitalize font-bold text-3xl text-center'
        >
          {MONTH_NAME.map((month, index) => (
            <option key={month} value={index} className='text-xl'>
              {month}
            </option>
          ))}
        </select>
        <button onClick={() => navigateMonth('next')} className=''>
          <ArrowForwardIcon />
        </button>
        <p className='absolute left-1/2 -translate-x-1/2 bottom-1 text-sm text-gray-500'>{currentYear}</p>
      </div>
      <div className='flex flex-col lg:flex-row gap-8 lg:gap-0'>
        <div className='flex-2 grid grid-cols-7'>
          {DAY_NAME.map((day) => (
            <div key={day} className='flex justify-center p-2'>
              {day}
            </div>
          ))}
          {calendarDays.map((calendarDay, dayIndex) => {
            const dayEvents = getEventsByDate(calendarDay.date);
            return (
              <div
                key={dayIndex}
                className={`group relative flex justify-center items-center aspect-square p-2 cursor-pointer ${calendarDay.isToday ? 'border border-moss-200' : ''} hover:shadow rounded-full duration-200`}
                onClick={() => setActiveDate(calendarDay.date)}
              >
                <p
                  className={` ${calendarDay.isToday ? 'font-bold' : calendarDay.isInCurrentMonth ? '' : 'text-gray-400'} will-change-transform group-hover:scale-125 duration-200`}
                >
                  {calendarDay.dayNumber}
                </p>
                {dayEvents.length > 0 &&
                  dayEvents.map((event, eventIndex) => {
                    const eventStart = new Date(event.startDate);
                    const eventEnd = new Date(event.endDate);

                    const isMultiday = eventStart.toDateString() !== eventEnd.toDateString();
                    const isStart = calendarDay.date.toDateString() === eventStart.toDateString();
                    const isEnd = calendarDay.date.toDateString() === eventEnd.toDateString();

                    return (
                      <div
                        key={eventIndex}
                        className={`absolute -z-10 inset-0 origin-center ${isMultiday ? (isStart ? 'rounded-l-full' : isEnd ? 'rounded-r-full' : '') : 'rounded-full'}`}
                        style={{
                          margin: eventIndex * 5,
                          backgroundColor: getColorFromString(event.slug, 100, calendarDay.isInCurrentMonth ? 90 : 95),
                        }}
                      ></div>
                    );
                  })}
              </div>
            );
          })}
        </div>
        <div className='flex-1 flex flex-col gap-2 p-2'>
          <h3 className='text-center'>Hendelser denne måned</h3>
          {activeEvents.length === 0 && (
            <p className='my-auto text-center italic text-gray-500'>Ingen events for denne måned</p>
          )}
          {activeEvents.map((event) => (
            <div
              key={event.id}
              className='flex flex-col gap-2 p-2 border rounded-md'
              style={{ backgroundColor: getColorFromString(event.slug) }}
            >
              <Link href={`/event/` + event.slug}>{event.title}</Link>
              <div
                dangerouslySetInnerHTML={{
                  __html: event.excerpt || '<p style="font-style: italic;">Mangler beskrivelse</p>',
                }}
                className='text-sm text-gray-600'
              ></div>
              <Link href={`/event/` + event.slug} className='ml-auto text-sm hover:underline'>
                Les mer
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
