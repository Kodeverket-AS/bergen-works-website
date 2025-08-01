import { WpEvent } from '@/types/apollo/events.types';
import { dateStringFormat } from '@/utils/dates';
import Link from 'next/link';

export function CalendarUpcomingContainer({ events }: { events: WpEvent[] }) {
  function getColorFromString(input: string): string {
    let hash = 0;

    // Create a hash from the input string
    for (let i = 0; i < input.length; i++) {
      hash = input.charCodeAt(i) + ((hash << 5) - hash);
    }

    // Map hash to HSL values
    const hue = Math.abs(hash) % 360; // Hue from 0 to 359
    const saturation = 100; // You can tweak this for pastel or bold
    const lightness = 50;

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }
  return (
    <div className='hidden flex-1 sm:flex flex-col gap-4'>
      <span className='flex justify-between mt-12 gap-2'>
        <button className='p-2 border rounded-md'>Denne måned</button>
        <button>Alle events</button>
      </span>
      {events.map((event) => (
        <Link
          href={`/event/` + event.slug}
          style={{ background: getColorFromString(event.slug) }}
          className='flex flex-col border rounded-md p-2 hover:brightness-105'
        >
          <p>{event.title}</p>
          <p className='text-sm text-gray-500'>{dateStringFormat(event.startDate)}</p>
        </Link>
      ))}
    </div>
  );
}
