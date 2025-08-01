'use client';

// Global
import { type WpEvent } from '@/types/apollo/events.types';

// Icons
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useEffect, useState } from 'react';

export function CalendarContainer({ events }: { events: WpEvent[] }) {
  // States
  const [activeDate, setActiveDate] = useState<Date>(new Date());
  const [monthStartDate, setMonthStartDate] = useState<Date>();

  // Initial info
  const currentDate = new Date();

  // Constants
  const DAY_NAME = ['mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag', 'søndag'];
  // prettier-ignore
  const MONTH_NAME = [ 'januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'septemper', 'oktober', 'november', 'desember', ];

  useEffect(() => {}, [activeDate]);
  return (
    <div className='sm:col-span-2'>
      <div className='flex justify-center gap-4'>
          <button className=''>
            <NavigateBeforeIcon />
          </button>
          <select name='' id='' className='p-2 capitalize font-bold text-2xl text-center'>
            {MONTH_NAME.map((month) => (
              <option key={month} className='capitalize text-start'>{month}</option>
            ))}
          </select>
          <button className=''>
            <NavigateNextIcon />
          </button>
      </div>
      <div className='flex flex-col'>
        <div className='grid grid-cols-7 border-b'>
          {DAY_NAME.map((day) => (
            <div key={day} className='flex justify-center p-2'>
              {day}
            </div>
          ))}
        </div>
        {[1, 2, 3, 4, 5].map((week, wIndex) => (
          <div key={week} className='grid grid-cols-7 border-l'>
            {DAY_NAME.map((day, dIndex) => (
              <div key={MONTH_NAME[wIndex] + day} className='aspect-square p-2 border-r border-b'>
                {wIndex * 7 + dIndex + 1}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
