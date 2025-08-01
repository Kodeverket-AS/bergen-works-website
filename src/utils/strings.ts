/**
 * Generates a consistent HSL color string based on an input string.
 *
 * Useful for assigning unique but repeatable colors to items (e.g. tags, users) based on their name or ID.
 *
 * @param {string} input - The input string used to generate a color.
 * @param {number} [saturation=100] - The saturation value for the HSL color (0–100).
 * @param {number} [lightness=90] - The lightness value for the HSL color (0–100).
 * @returns {string} An HSL color string, e.g. `hsl(123, 100%, 90%)`.
 *
 * @example
 * getColorFromString("Event A"); // Always returns the same color for "Event A"
 * getColorFromString("User42", 80, 70); // Custom saturation and lightness
 */
export function getColorFromString(input: string, saturation = 100, lightness = 90): string {
  let hash = 0;

  // Create a hash from the input string
  for (let i = 0; i < input.length; i++) {
    hash = input.charCodeAt(i) + ((hash << 5) - hash);
  }

  // Map hash to HSL values
  const hue = Math.abs(hash) % 360; // Hue from 0 to 359

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}
