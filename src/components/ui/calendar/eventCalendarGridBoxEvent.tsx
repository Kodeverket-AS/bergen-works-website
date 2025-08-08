import { type WpEvent } from '@/types/apollo/events.types';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { getPresetColorFromString } from '@/utils/strings';
import { EventCalendarTooltip } from '../modal/eventCalendarTooltip';
import { useClickPosition } from '@/hooks/useClickPosition';

export function EventCalendarGridBoxEvent({ event, thisDate }: { event: WpEvent; thisDate: Date }) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalPosition, setModalPosition] = useClickPosition();

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
        backgroundColor: getPresetColorFromString(event.eventsCategories.nodes.at(0)?.name, 0.5),
      }}
      onClick={(e) => {
        e.stopPropagation();
        setModalPosition(e);
        setShowModal(!showModal);
      }}
    >
      <p
        aria-label={event.title}
        title={event.title}
        className={`truncate ${isMultiday ? (isStart ? '' : isEnd ? 'opacity-0' : 'opacity-0') : ''}`}
      >
        {event.eventsCategories.nodes.map((category) => category.name)}
      </p>
      {showModal &&
        createPortal(
          <EventCalendarTooltip
            event={event}
            position={modalPosition}
            onClose={() => setShowModal(false)}
            isVisible={showModal}
          />,
          document.body
        )}
    </span>
  );
}
