import { type WpEvent } from '@/types/apollo/events.types';
import { getPresetColorFromString } from '@/utils/strings';
import { MouseEvent } from 'react';

export function EventCalendarGridBoxEvent({
  event,
  thisDate,
  setModal,
  setPosition,
}: {
  event: WpEvent;
  thisDate: Date;
  setModal: (event: WpEvent) => void;
  setPosition: (e: MouseEvent) => void;
}) {
  const eventLabel = event.eventsCategories.nodes.length ? event.eventsCategories.nodes.at(0)?.name : event.title

  const eventStart = new Date(event.startDate);
  const eventEnd = new Date(event.endDate);

  const isMultiday = eventStart.toDateString() !== eventEnd.toDateString();
  const isStart = thisDate.toDateString() === eventStart.toDateString();
  const isEnd = thisDate.toDateString() === eventEnd.toDateString();

  // todo: create useMousePos hook for å plasere tooltip
  return (
    <span
      className={`relative px-1 text-xs border border-gray-300 ${isMultiday ? (isStart ? 'ml-1 rounded-l-md border-r-0' : isEnd ? 'mr-1 rounded-r-md border-l-0' : 'border-x-0') : 'mx-1 rounded-md'}`}
      style={{
        backgroundColor: event.eventsCategories.nodes.length ? getPresetColorFromString(event.eventsCategories.nodes.at(0)?.slug, 0.5) : "#fff",
      }}
      onClick={(e) => {
        e.stopPropagation();
        setPosition(e);
        setModal(event);
      }}
    >
      <p
        aria-label={event.title}
        title={event.title}
        className={`truncate ${isMultiday ? (isStart ? '' : isEnd ? 'opacity-0' : 'opacity-0') : ''}`}
      >
        {eventLabel}
      </p>
    </span>
  );
}
