import { type WpEvent } from '@/types/apollo/events.types';

/**
 * Helper function for quickly finding events within a date range
 */
export function getEventsByDate(date: Date, events: WpEvent[]): WpEvent[] {
  const targetDate = new Date(date);
  targetDate.setHours(0, 0, 0, 0);

  return events.filter((event) => {
    const eventStart = new Date(event.startDate);
    const eventEnd = new Date(event.endDate);

    // Set times to start of day for comparison
    eventStart.setHours(0, 0, 0, 0);
    eventEnd.setHours(23, 59, 59, 999);

    // Check if the target date falls within the event's date range
    return targetDate >= eventStart && targetDate <= eventEnd;
  });
}
