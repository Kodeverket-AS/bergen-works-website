'use client';

// Global
import { type WpEvent } from '@/types/apollo/events.types';
import { useState } from 'react';
import { EventCalendarUpcoming } from './eventCalendarUpcoming';
import { type DayItem, EventCalendarGridBox } from './eventCalendarGridBox';

// Icons
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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

      // Set times to start of day for comparison
      eventStart.setHours(0, 0, 0, 0);
      eventEnd.setHours(23, 59, 59, 999);

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

  return (
    <div className='flex flex-col gap-8'>
      <div className='flex flex-col lg:flex-row gap-4'>
        <div className='w-full lg:sticky lg:top-4 self-start lg:flex-2/3 grid grid-cols-7 gap-1 p-4 border border-gray-200 shadow-md rounded-md'>
          <div className='col-span-7 relative flex justify-center gap-4 pb-2'>
            <button onClick={() => navigateMonth('prev')} className=''>
              <ArrowBackIcon />
            </button>
            <select
              aria-label='Velg måned'
              value={currentMonth}
              onChange={(e) => handleMonthSelect(Number(e.target.value))}
              className='p-2 capitalize font-bold sm:text-xl text-center'
            >
              {MONTH_NAME.map((month, index) => (
                <option key={month} value={index}>
                  {month}
                </option>
              ))}
            </select>
            <button onClick={() => navigateMonth('next')} className=''>
              <ArrowForwardIcon />
            </button>
            <p className='absolute left-1/2 -translate-x-1/2 -bottom-1 text-sm text-gray-500'>{currentYear}</p>
          </div>
          {DAY_NAME.map((day) => (
            <div key={day} className='flex justify-center p-2'>
              <p className='truncate text-clip'>{day}</p>
            </div>
          ))}
          {calendarDays.map((calendarDay, dayIndex) => (
            <EventCalendarGridBox
              key={`calendar-grid-box-${dayIndex}`}
              dayItem={calendarDay}
              index={dayIndex}
              activeDate={activeDate}
            />
          ))}
        </div>
        <div className='lg:flex-1/3 flex flex-col gap-4 p-4 border border-gray-200 shadow-md rounded-md'>
          <h2 className='text-center !text-2xl'>
            Hva skjer i <span className='capitalize'>{MONTH_NAME[currentMonth]}</span>
          </h2>
          {activeEvents.length === 0 && (
            <p className='italic text-sm my-auto'>
              Ingen arrangementer ennå - følg med, det kommer kanskje noe spennende!
            </p>
          )}
          <EventCalendarUpcoming events={activeEvents} activeDate={activeDate} />
        </div>
      </div>
    </div>
  );
}
