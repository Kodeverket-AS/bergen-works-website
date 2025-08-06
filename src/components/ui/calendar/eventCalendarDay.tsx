import { type WpEvent } from '@/types/apollo/events.types';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { IconText } from '../text/iconText';
import { useClickOutside } from '@/hooks/useClickOutside';

// Icons
import LocationPinIcon from '@mui/icons-material/LocationPin';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export function EventCalendarDay({ event, thisDate, index }: { event: WpEvent; thisDate: Date; index: number }) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  useClickOutside(containerRef, () => setIsActive(false));

  const eventStart = new Date(event.startDate);
  const eventEnd = new Date(event.endDate);

  const isMultiday = eventStart.toDateString() !== eventEnd.toDateString();
  const isStart = thisDate.toDateString() === eventStart.toDateString();
  const isEnd = thisDate.toDateString() === eventEnd.toDateString();

  // todo: create useMousePos hook for å plasere tooltip
  return (
    <span
      ref={containerRef}
      className={`relative px-1 text-xs border border-gray-300 ${isMultiday ? (isStart ? '-mr-2 rounded-l-md border-r-0' : isEnd ? '-ml-2 rounded-r-md border-l-0' : 'border-x-0 -mx-2') : 'rounded-md'}`}
      onClick={(e) => {
        e.stopPropagation();
        setIsActive(!isActive);
      }}
    >
      <p
        aria-label={event.title}
        title={event.title}
        className={`truncate ${isMultiday ? (isStart ? '' : isEnd ? 'opacity-0' : 'opacity-0') : ''}`}
      >
        {event.eventsCategories.nodes.map(category => category.name)}
      </p>
      {isActive && (
        <div className='z-10 w-screen max-w-96 absolute m-2 flex flex-col gap-1 p-2 border rounded-md shadow-md bg-white'>
          <h4 className='text-xl'>{event.title}</h4>
          <div
            className='line-clamp-3'
            dangerouslySetInnerHTML={{ __html: event.content || 'Beskrivelse mangler' }}
          ></div>
          {/* <IconText icon={<LocationPinIcon />} text={event.venue?.address || 'Digital plattform'} /> */}
          {/* <IconText icon={<AssignmentIndIcon />} text={event.organizers.nodes.map((organizer) => organizer.title).join(', ')} /> */}
          <IconText icon={<ExitToAppIcon />} text='Påmelding nødvendig' />
          <Link className='group ml-auto hover:underline' href={'/event/' + event.slug}>
            Les mer
            <NavigateNextIcon className='inline-block origin-center group-hover:-rotate-45 duration-200' />
          </Link>
        </div>
      )}
    </span>
  );
}
