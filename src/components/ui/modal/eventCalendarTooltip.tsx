'use client';

import { type WpEvent } from '@/types/apollo/events.types';
import Link from 'next/link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useLayoutEffect, useRef, useState } from 'react';
import { useClickOutside } from '@/hooks/useClickOutside';

export function EventCalendarTooltip({
  event,
  position,
  onClose,
  isVisible,
}: {
  event: WpEvent;
  position: { x: number; y: number };
  onClose: () => void;
  isVisible: boolean;
}) {
  // Handle closing when clicking outside
  const containerRef = useRef<HTMLDivElement>(null);
  useClickOutside(containerRef, onClose);

  // handle overflow by adjusting tooltip position after render, based on tooltip size
  const [adjustedPos, setAdjustedPos] = useState({ x: 0, y: 0 });
  useLayoutEffect(() => {
    if (containerRef.current && isVisible) {
      const tooltipRect = containerRef.current.getBoundingClientRect();
      const margin = 10;

      let x = position.x + margin;
      let y = position.y + margin;

      if (x + tooltipRect.width > window.innerWidth) {
        x = window.innerWidth - tooltipRect.width - margin;
      }

      if (y + tooltipRect.height > window.innerHeight) {
        y = window.innerHeight - tooltipRect.height - margin;
      }

      setAdjustedPos({ x, y });
    }
  }, [position, isVisible]);
  return (
    <div
      ref={containerRef}
      className='z-10 w-screen max-w-96 absolute flex flex-col gap-1 p-2 border rounded-md shadow-md bg-white'
      style={{
        top: adjustedPos.y,
        left: adjustedPos.x,
      }}
    >
      <button onClick={onClose}>Close</button>
      <h4 className='text-xl'>{event.title}</h4>
      <div className='line-clamp-3' dangerouslySetInnerHTML={{ __html: event.content || 'Beskrivelse mangler' }}></div>
      {/* <IconText icon={<LocationPinIcon />} text={event.venue?.address || 'Digital plattform'} /> */}
      {/* <IconText icon={<AssignmentIndIcon />} text={event.organizers.nodes.map((organizer) => organizer.title).join(', ')} /> */}
      <Link className='group ml-auto hover:underline' href={'/event/' + event.slug}>
        Les mer
        <NavigateNextIcon className='inline-block origin-center group-hover:-rotate-45 duration-200' />
      </Link>
    </div>
  );
}
