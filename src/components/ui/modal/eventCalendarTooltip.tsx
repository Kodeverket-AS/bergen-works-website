'use client';

import { type WpEvent } from '@/types/apollo/events.types';
import { type CSSProperties, useLayoutEffect, useRef, useState } from 'react';
import { useClickOutside } from '@/hooks/useClickOutside';
import Link from 'next/link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CloseIcon from '@mui/icons-material/Close';
import { getPresetColorFromString } from '@/utils/strings';

export function EventCalendarTooltip({
  event,
  position,
  onClose,
}: {
  event: WpEvent;
  position: { x: number; y: number };
  onClose: () => void;
}) {
  // Handle closing when clicking outside
  const containerRef = useRef<HTMLDivElement>(null);
  useClickOutside(containerRef, onClose);

  // Avoid component going off screen
  const [style, setStyle] = useState<CSSProperties>({});

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const { right, bottom, width, height } = container.getBoundingClientRect();
    const newStyle: CSSProperties = {};
    const padding = 8;

    console.log(bottom, innerHeight);
    // Keep tooltip above screen bottom
    if (bottom > innerHeight - 50) {
      newStyle.top = -height;
    }

    if (innerWidth > 1023 && position.x > width + padding) {
      // Keep tooltip inside calendar container
      newStyle.right = 0;
    } else if (right > innerWidth) {
      // Keep tooltip inside screen
      newStyle.left = innerWidth - right - padding;
    }

    setStyle(newStyle);
  }, [position]);

  return (
    <div
      ref={containerRef}
      className={`absolute z-10 w-96 min-w-48 max-w-[90svw] flex flex-col gap-2 md:gap-4 p-2 border rounded-md shadow-2xl bg-white`}
      style={style}
    >
      <Link href={`#event-${event.slug}`} className='text-xl hover:underline'>
        {event.title}
      </Link>
      <div
        className='line-clamp-3 max-sm:text-sm'
        dangerouslySetInnerHTML={{ __html: event.content || 'Beskrivelse mangler' }}
      ></div>
      {/* <IconText icon={<LocationPinIcon />} text={event.venue?.address || 'Digital plattform'} /> */}
      {/* <IconText icon={<AssignmentIndIcon />} text={event.organizers.nodes.map((organizer) => organizer.title).join(', ')} /> */}
      <span className='flex justify-between gap-2'>
        {event.eventsCategories.nodes.length > 0 && (
          <p
            className='px-2 py-1 max-sm:text-sm rounded-md'
            style={{
              backgroundColor: getPresetColorFromString(event.eventsCategories.nodes.at(0)!.name, 0.5),
            }}
          >
            {event.eventsCategories.nodes.at(0)!.name}
          </p>
        )}
        <Link className='group ml-auto hover:underline' href={'/event/' + event.slug}>
          Les mer
          <NavigateNextIcon className='inline-block origin-center group-hover:-rotate-45 duration-200' />
        </Link>
      </span>
      <button onClick={onClose} className='absolute top-0 right-0 '>
        <CloseIcon className='hover:scale-110 duration-200' />
      </button>
    </div>
  );
}
