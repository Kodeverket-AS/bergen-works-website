// Global
import { type WpEvent } from '@/types/apollo/events.types';
import Link from 'next/link';
import { IconLink } from '../links/iconLink';
import { IconText } from '../text/iconText';
import { getPresetColorFromString } from '@/utils/strings';

// Icons
import LocationPinIcon from '@mui/icons-material/LocationPin';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export function EventCalendarUpcoming({ events }: { events: WpEvent[]; activeDate: Date }) {
  // Formatter for human readable dates
  const dateFormatter = new Intl.DateTimeFormat('no-NO', {
    month: 'long',
    day: 'numeric',
  });

  // Group events by start date
  const eventMap = new Map<string, WpEvent[]>();
  for (const event of events) {
    const startDate = dateFormatter.format(new Date(event.startDate));
    const endDate = dateFormatter.format(new Date(event.endDate));
    const isMultiday = startDate !== endDate;

    if (isMultiday) {
      const multiday = `${startDate}-${endDate}`;
      if (!eventMap.has(multiday)) eventMap.set(multiday, []);
      eventMap.get(multiday)!.push(event);
    } else {
      if (!eventMap.has(startDate)) eventMap.set(startDate, []);
      eventMap.get(startDate)!.push(event);
    }
  }
  const grouped = Array.from(eventMap.entries());

  return (
    <div className='flex flex-col gap-4'>
      {grouped.map((group, groupIndex) => {
        const eventDates = group[0].split('-');
        return (
          <div key={'eventGroup' + groupIndex} className='flex flex-col gap-2'>
            <span className='flex justify-between p-2 rounded-md bg-moss-100 shadow-md'>
              <p>{eventDates.at(0)}</p>
              {eventDates.length > 1 && <p>{eventDates.at(1)}</p>}
            </span>
            {group[1].map((event) => (
              <div
                id={`event-${event.slug}`}
                key={`upcoming-events-${event.slug}`}
                className='group/card flex flex-col gap-2 p-2 text-sm rounded-md border border-gray-300 shadow-md'
              >
                <h3 className='text-xl'>{event.title}</h3>
                <div
                  className='line-clamp-6 lg:line-clamp-3'
                  dangerouslySetInnerHTML={{ __html: event.content || 'Beskrivelse mangler' }}
                ></div>
                <IconText
                  icon={<AccessTimeIcon />}
                  text={
                    event.allDay
                      ? 'Hele dagen'
                      : new Date(event.startDate).toLocaleTimeString('no', { hour: '2-digit', minute: '2-digit' })
                  }
                />
                <IconText icon={<LocationPinIcon />} text={event.venue?.address || 'Digital plattform'} />
                <IconText
                  icon={<AssignmentIndIcon />}
                  text={event.organizers.nodes.map((organizer) => organizer.title).join(', ')}
                />
                {event.url && (
                  <IconLink icon={<ExitToAppIcon />} link={event.url} label='Gå til påmelding' />
                )}
                <span className='flex justify-between gap-2'>
                  {event.eventsCategories.nodes.length > 0 && (
                    <p
                      className='px-2 py-1 rounded-md'
                      style={{
                        backgroundColor: getPresetColorFromString(event.eventsCategories.nodes.at(0)?.slug, 0.5),
                      }}
                    >
                      {event.eventsCategories.nodes.at(0)!.name}
                    </p>
                  )}
                  <Link className='group/link ml-auto hover:underline' href={'/event/' + event.slug}>
                    Les mer
                    <NavigateNextIcon className='inline-block origin-center group-hover/link:-rotate-45 duration-200' />
                  </Link>
                </span>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
