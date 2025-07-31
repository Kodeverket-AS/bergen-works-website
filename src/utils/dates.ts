/**
 * Checks whether a given string is a valid date.
 *
 * @param dateQuery - The string to validate as a date.
 * @returns True if the string represents a valid date, false otherwise.
 */
export function isValidDateString(dateQuery: string): boolean {
  return !isNaN(Date.parse(dateQuery));
}

/**
 * Safely formats an ISO date string using Intl.DateTimeFormat.
 * @returns A formatted date string, or "Invalid date" if the input is invalid.
 */
export function dateStringFormat(
  dateString: string,
  options: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }
) {
  if (!dateString) return 'Invalid date';

  const date = new Date(dateString);
  if (isNaN(date.getTime())) return 'Invalid date';

  return new Intl.DateTimeFormat('no-NO', options).format(date);
}

/**
 * Returns a localized relative time string from a given ISO date string.
 */
export function dateStringToRelative(dateString: string) {
  // Convert arg into useable date object, return error string if error
  if (!dateString) return 'Invalid date';
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return 'Invalid date';

  // Calculate diffrence and convert to positive number
  const differenceInSeconds = Math.round((date.getTime() - Date.now()) / 1000);
  const formatter = new Intl.RelativeTimeFormat('no-NO', { numeric: 'auto' });

  // Division table
  const divisions: [number, Intl.RelativeTimeFormatUnit][] = [
    [60, 'second'],
    [60, 'minute'],
    [24, 'hour'],
    [7, 'day'],
    [4.34524, 'week'],
    [12, 'month'],
    [Number.POSITIVE_INFINITY, 'year'],
  ];

  // Loop over values until value is greater than division table value
  let value = differenceInSeconds;
  for (const [amount, unit] of divisions) {
    if (Math.abs(value) < amount) {
      return formatter.format(Math.round(value), unit);
    }
    value /= amount;
  }

  // Fallback for out of scope
  return 'A long, long, time ago';
}
