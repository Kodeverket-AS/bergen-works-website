/**
 * Validates that a string is a SAFE *relative* path for internal navigation.
 *
 * Guards against:
 * - Empty/non-string input
 * - Absolute/protocol URLs (e.g. `http:`, `javascript:`, `data:`)
 * - Backslashes
 * - Disallowed characters
 *
 * Allowed shape: starts with "/" and contains only URL-safe chars,
 * slashes, dashes, underscores, dots, tildes and percent escapes.
 *
 * @param {string} uri - Candidate relative path (e.g. "/artikler/2025/08/11/slug").
 * @returns {boolean} `true` if the path is a safe relative URL; otherwise `false`.
 *
 * @example
 * isSafeRelativePath('/artikler/2025/08/11/slug'); // true
 * isSafeRelativePath('https://evil.com'); // false
 * isSafeRelativePath('javascript:alert(1)'); // false
 * isSafeRelativePath('/foo\\bar'); // false
 */
export function isSafeRelativePath(uri: string): boolean {
  if (!uri || typeof uri !== 'string') return false;
  if (!uri.startsWith('/')) return false;
  if (/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(uri) || uri.includes('\\')) return false;
  return /^\/[A-Za-z0-9/_\-.~%]*$/.test(uri);
}

/**
 * Checks whether a relative URI matches your *article* route shape:
 * `/<YYYY>/<MM>/<DD>/<slug>`
 *
 * Year      : 4 digits (e.g. 2025)
 * Month     : 01–12
 * Day       : 01–31
 * Slug      : letters, digits, dashes, underscores, `~`, `%`
 * Trailing slash is optional.
 *
 * NOTE: Validates only the *shape*, not calendar validity (e.g., Feb 31 will pass).
 *
 * @param {string} uri - Relative URI to test (e.g., "/2025/08/11/min-artikkel").
 * @returns {boolean} `true` if the URI matches the article pattern; otherwise `false`.
 *
 * @example
 * isArticleUri("/2025/08/11/min-artikkel"); // true
 * isArticleUri("/2025/13/01/min-artikkel"); // false (invalid month)
 * isArticleUri("/artikler/2025/08/11/min-artikkel"); // false (no prefix allowed)
 */
export function isArticleUri(uri: string): boolean {
  // Accept either "/YYYY/MM/DD/slug" or "/artikler/YYYY/MM/DD/slug"
  const re = /^(?:\/artikler)?\/\d{4}\/(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/[A-Za-z0-9-_~%]+\/?$/;
  return re.test(uri);
}

/**
 * Checks whether a relative URI matches your *event* route shape:
 * `/event/<slug>`
 *
 * Slug: letters, digits, dashes, underscores, `~`, `%`
 * Trailing slash is optional.
 *
 * @param {string} uri - Relative URI to test (e.g., "/event/min-event").
 * @returns {boolean} `true` if the URI matches the event pattern; otherwise `false`.
 *
 * @example
 * isEventUri("/event/min-event"); // true
 * isEventUri("/event/min_event"); // true
 * isEventUri("/event/2025-special"); // true
 * isEventUri("/events/min-event"); // false (wrong base path)
 */
export function isEventUri(uri: string): boolean {
  const re = /^\/event\/[A-Za-z0-9-_~%]+\/?$/;
  return re.test(uri);
}

/**
 * Normalizes a URI string by:
 * - Trimming surrounding whitespace
 * - Collapsing duplicate slashes (`//` → `/`)
 * - Removing trailing slashes (except for root `/`)
 *
 * NOTE: This does *not* validate the input. Pair with `isSafeRelativePath`
 * when normalizing untrusted relative paths.
 *
 * @param {string} uri - A relative or absolute URI to normalize.
 * @returns {string} A normalized URI.
 *
 * @example
 * normalizeUri('  /artikler//2025/08/11/slug/  '); // "/artikler/2025/08/11/slug"
 */
export function normalizeUri(uri: string): string {
  let out = uri.trim();
  out = out.replace(/\/{2,}/g, '/');
  if (out.length > 1) out = out.replace(/\/+$/, '');
  return out;
}

/**
 * Parses and validates an *external* URL string and whitelists the scheme.
 *
 * Allowed protocols: `http:`, `https:`, `mailto:`, `tel:`
 *
 * Returns a `URL` instance on success, or `null` on parse error or disallowed protocol.
 *
 * @param {string} value - Candidate absolute URL (e.g. "https://example.com").
 * @returns {URL | null} A `URL` object if valid/allowed; otherwise `null`.
 *
 * @example
 * toSafeExternalUrl('https://example.com'); // URL(...)
 * toSafeExternalUrl('javascript:alert(1)'); // null
 * toSafeExternalUrl('data:text/html,hi');   // null
 */
export function toSafeExternalUrl(value: string): URL | null {
  try {
    const url = new URL(value);
    if (!['http:', 'https:', 'mailto:', 'tel:'].includes(url.protocol)) return null;
    return url;
  } catch {
    return null;
  }
}
