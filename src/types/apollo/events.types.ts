import { GqlNodes, GqlPageInfo, WpCategories, WpFeaturedImage, WpOrganizers, WpTags, WpVenue } from './shared.types';

/**
 * Represents a single WordPress event post fetched from WPGraphQL.
 *
 * Typically returned as part of a paginated list of events in the GraphQL response.
 * This type includes metadata such as scheduling information, categories, organizers,
 * and associated media.
 */
export interface WpEvent {
  /** Unique identifier for the event, usually a GraphQL Node ID. */
  id: string;
  /** URL-friendly slug used for routing to the event detail page. */
  slug: string;
  /** Title or name of the event. */
  title: string;
  /** Raw HTML content of the event description, used with `dangerouslySetInnerHTML`. */
  content: string | null;
  /** Short HTML excerpt or summary of the event, used with `dangerouslySetInnerHTML`. */
  excerpt: string | null;
  /** Link to the main event page for signup */
  url: string | null;
  /** Cost to attend the event, represented as a string. */
  cost: string | null;
  /** If true, the event should be excluded from "upcoming events" views. */
  hideFromUpcoming: boolean;
  /** If true, the event is marked as featured/promoted in listings. */
  featured: boolean;
  /** Categories associated with the event. */
  eventsCategories: WpCategories;
  /** Tags associated with the event. */
  tags: WpTags;
  /** ISO timestamp of when the event post was originally created in WordPress. */
  date: string;
  /** ISO timestamp of when the event post was last modified in WordPress. */
  modified: string;
  /** Indicates whether a map should be shown on the event detail page. */
  showMap: boolean;
  /** ISO datetime string representing when the event begins. */
  startDate: string;
  /** ISO datetime string representing when the event ends. */
  endDate: string;
  /** Duration of the event in seconds (calculated from `startDate` to `endDate`). */
  duration: number;
  /** Whether the event spans the full day (e.g., 00:00 to 23:59). */
  allDay: boolean;
  /** The venue where the event takes place, or `null` if not assigned. */
  venue: WpVenue | null;
  /** List of organizers associated with the event. */
  organizers: WpOrganizers;
}

/**
 * Represents the structure of a GraphQL response for a single WordPress event.
 *
 * This type is passed to `apolloClient.query<T>()` to define the expected shape of the response
 * when querying a single event (typically by ID or slug).
 *
 * @see WpEvent - The shape of the returned event object.
 *
 * Example usage:
 * ```ts
 * const response = await apolloClient.query<WpEventResponse>({
 *   query: GET_EVENT_BY_SLUG,
 *   variables: { slug: 'my-event-slug' },
 * });
 * const event = response.data.event;
 * if (!event) {
 *   console.error('Event not found');
 * }
 * ```
 */
export interface WpEventResponse {
  /** The single WordPress event returned by the query, or `null` if not found. */
  event: WpEvent | null;
}

/**
 * Represents the structure of a GraphQL response for a list of WordPress events.
 *
 * This type is passed to `apolloClient.query<T>()` to define the expected shape of the response.
 * It includes:
 * - A list of event nodes under the `events.nodes` array.
 * - Pagination metadata under `events.pageInfo`, following the Relay specification.
 *
 * @see WpEvent - The shape of each individual event.
 * @see GqlNodes - A generic wrapper for lists of GraphQL nodes.
 * @see GqlPageInfo - Standard pagination metadata used in cursor-based pagination.
 *
 * Example usage:
 * ```ts
 * const response = await apolloClient.query<WpEventsResponse>({
 *   query: GET_EVENTS_QUERY
 * });
 * const events = response.data.events.nodes;
 * const pageInfo = response.data.events.pageInfo;
 * ```
 */
export interface WpEventsResponse {
  /**
   * Contains a list of event nodes and pagination metadata.
   * - `nodes` holds individual WordPress event entries.
   * - `pageInfo` provides cursor-based pagination details.
   */
  events: (GqlNodes<WpEvent> & GqlPageInfo) | null;
}
