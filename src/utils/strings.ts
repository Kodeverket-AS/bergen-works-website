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

export function getPresetColorFromString(categoryName: string = '', alpha: number = 1): string {
  const approvedColors: Record<string, string> = {
    red: 'rgba(248, 113, 113, ALPHA)',
    yellow: 'rgba(251, 191, 36, ALPHA)',
    /* green: 'rgba(52, 211, 153, ALPHA)', */
    blue: 'rgba(96, 165, 250, ALPHA)',
    purple: 'rgba(167, 139, 250, ALPHA)',
    pink: 'rgba(244, 114, 182, ALPHA)',
    orange: 'rgba(251, 146, 60, ALPHA)',
    /* emerald: 'rgba(74, 222, 128, ALPHA)', */
    sky: 'rgba(56, 189, 248, ALPHA)',
    violet: 'rgba(192, 132, 252, ALPHA)',
  };
  const colorNames = Object.keys(approvedColors);

  let hash = 0;
  for (let i = 0; i < categoryName.length; i++) {
    hash = categoryName.charCodeAt(i) + ((hash << 5) - hash);
  }

  const index = Math.abs(hash) % colorNames.length;
  const colorName = colorNames[index];
  const rgba = approvedColors[colorName].replace('ALPHA', alpha.toString());

  return rgba;
}
