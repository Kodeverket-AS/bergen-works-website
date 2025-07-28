/**
 * Checks whether a given string is a valid date.
 *
 * @param dateQuery - The string to validate as a date.
 * @returns True if the string represents a valid date, false otherwise.
 */
export function isValidDateString(dateQuery: string): boolean {
  return !isNaN(Date.parse(dateQuery));
}
