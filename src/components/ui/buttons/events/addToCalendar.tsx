'use client';

import { IconLink } from '@/components/ui/links/iconLink';
import { useRef, useState } from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import AddchartIcon from '@mui/icons-material/Addchart';
import { useClickOutside } from '@/hooks/useClickOutside';

interface AddToCalendarButtonProps {
  /** Title of the event */
  title: string;
  /** Body content of the event, usually the description or excerpt */
  content: string;
  /** Adress of the location */
  address: string;
  /** Start date of the end in valid iso string format */
  start: string;
  /** End date of the end in valid iso string format */
  end: string;
  /**  */
  allDay: boolean;
}

/**
 * Component for automatically linking users to relevant calendar website with event details prefilled
 */
export function AddToCalendarButton({ title, content, address, start, end, allDay }: AddToCalendarButtonProps) {
  // UX variables
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  useClickOutside(containerRef, () => setIsOpen(false));

  // Construct date objects for manipulation later
  // todo: add validation checks and fallbacks
  const startDate = new Date(start);
  const endDate = new Date(end);

  // Available calendar links with formated href params
  // todo: check date formats, use https://www.labnol.org/calendar as helper
  const calendarSites = [
    {
      title: 'Google Calendar',
      href: `https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${startDate.getDate()}%2F${endDate.getDate()}&details=${content}&location=${address}&text=${title}`,
    },
    {
      title: 'Microsoft Outlook',
      href: `https://outlook.live.com/calendar/0/action/compose?allday=${allDay}&body=${content}&enddt=${endDate.getDate()}&location=${address}&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=${startDate.getDate()}&subject=${title}`,
    },
    {
      title: 'Office 365',
      href: `https://outlook.office.com/calendar/0/action/compose?allday=${allDay}&body=${content}&enddt=${endDate.getDate()}&location=${address}&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=${startDate.getDate()}&subject=${title}`,
    },
    {
      title: 'YahooCalendar',
      href: `https://calendar.yahoo.com/?desc=${content}&dur=${allDay ? 'allday' : false}&et=${endDate.getDate()}&in_loc=${address}&st=${startDate.getDate()}&title=${title}&v=60`,
    },
  ];

  return (
    <span ref={containerRef} className='relative w-full border rounded-md'>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className='w-full flex gap-2 p-2 rounded-md bg-moss-100 hover:bg-moss-200'
      >
        <AddchartIcon />
        <p>Legg til i kalender</p>
      </button>
      <div
        className={`z-10 absolute left-0 top-full w-full mt-1 px-2 border rounded-md bg-white ${isOpen ? 'h-fit py-2' : 'h-0 opacity-0 pointer-events-none'} overflow-hidden duration-200`}
      >
        {calendarSites.map((site) => (
          <IconLink key={site.title} link={site.href} label={site.title} isExternal />
        ))}
        <button className='group flex gap-2 items-center text-gray-300'>
          <DownloadIcon />
          <p className='line-through'>Last ned .isc fil</p>
        </button>
      </div>
    </span>
  );
}
