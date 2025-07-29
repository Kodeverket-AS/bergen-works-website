import { type WpEvent } from '@/types/apollo/events.types';
import Image from 'next/image';
import Link from 'next/link';

// Mui icons
import LocationPinIcon from '@mui/icons-material/LocationPin';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export function EventCardPreview(event: WpEvent) {
  const startDate = new Date(event.date);

  const day = new Intl.DateTimeFormat('no-NO', { day: '2-digit' }).format(startDate).replace('.', '');
  const month = new Intl.DateTimeFormat('no-NO', { month: 'short' }).format(startDate).toLocaleUpperCase();

  const dateFormatter = new Intl.DateTimeFormat('no-NO', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  console.log(event);

  return (
    <div className='flex flex-col gap-4 pb-4 rounded-lg border border-gray-200 bg-white shadow-md hover:shadow-2xl duration-300'>
      <Link href={'/event/' + event.slug} className='relative block'>
        <Image
          src={event.featuredImage?.node?.sourceUrl || '/KoV-ov.png'}
          alt={event.featuredImage?.node?.altText || 'Event image'}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          style={{
            width: '100%',
            height: 'auto',
            aspectRatio: '16/9',
            objectFit: 'cover',
          }}
          width={500}
          height={300}
          className='transition-transform duration-300 group-hover:scale-105'
        />
        <div className='absolute top-2 left-2 size-12 p-1 flex flex-col flex-nowrap items-center justify-center rounded-md border border-gray-300 bg-white'>
          <p className='font-bold text-2xl leading-4'>{day}</p>
          <p className='font-bold tracking-wider text-sm text-red-600 leading-4'>{month}</p>
        </div>
      </Link>
      <div className='flex flex-col gap-2 px-4'>
        <Link href={'/event/' + event.slug}>
          <h3 className='text-xl font-bold text-gray-800 hover:text-moss-600'>{event.title}</h3>
        </Link>
        <span className='flex gap-2'>
          <CalendarMonthIcon />
          <p>{dateFormatter.format(startDate)}</p>
        </span>
        <span className='flex gap-2 items-center'>
          <LocationPinIcon />
          <p className='line-clamp-1'>{event.venue?.address || 'Digital plattform'}</p>
        </span>
        {event.organizers?.nodes.map((organizer) => (
          <span key={organizer.slug} className='flex gap-2'>
            <AssignmentIndIcon />
            <p>{organizer.title}</p>
          </span>
        ))}
        {event.url && (
          <Link href={'/event/' + event.slug} className='flex gap-2'>
            <ExitToAppIcon />
            <p>Påmelding nødvendig</p>
          </Link>
        )}
      </div>
    </div>
  );
}
