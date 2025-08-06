// Global
import { type WpEvent } from '@/types/apollo/events.types';
import Link from 'next/link';
import { IconText } from '../text/iconText';

// Icons
import LocationPinIcon from '@mui/icons-material/LocationPin';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export function EventCalendarUpcoming({ event, activeDate }: { event: WpEvent; activeDate: Date }) {
  // prettier-ignore
  const MONTH_NAME = [ 'januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'septemper', 'oktober', 'november', 'desember', ];

  // Gather dates
  const currentMonth = activeDate.getMonth();
  // Formatter for human readable dates
  const dateFormatter = new Intl.DateTimeFormat('no-NO', {
    month: 'long',
    day: 'numeric',
  });

  return (
    <div key={`upcoming-events-${event.slug}`} className='flex flex-col gap-2 p-2 text-sm rounded-md bg-moss-100'>
      <Link href={'/event/' + event.slug}>
        <h3 className='text-xl'>{event.title}</h3>
      </Link>
      <div
        className='line-clamp-6 lg:line-clamp-3'
        dangerouslySetInnerHTML={{ __html: event.content || 'Beskrivelse mangler' }}
      ></div>
      <IconText icon={<CalendarMonthIcon />} text={dateFormatter.format(new Date(event.startDate))} />
      <IconText icon={<LocationPinIcon />} text={event.venue?.address || 'Digital plattform'} />
      <IconText
        icon={<AssignmentIndIcon />}
        text={event.organizers.nodes.map((organizer) => organizer.title).join(', ')}
      />
      <IconText icon={<ExitToAppIcon />} text='Påmelding nødvendig' />
      <Link className='group ml-auto hover:underline' href={'/event/' + event.slug}>
        Les mer
        <NavigateNextIcon className='inline-block origin-center group-hover:-rotate-45 duration-200' />
      </Link>
    </div>
  );
}
