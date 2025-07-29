import { GqlNodes, GqlPageInfo, WpCategories, WpFeaturedImage, WpOrganizers, WpTags, WpVenue } from './shared.types';

/**
 * Represents a single WordPress event post fetched from WPGraphQL.
 *
 * Typically returned as part of a paginated list of events in the GraphQL response.
 * This type includes metadata such as scheduling information, categories, organizers,
 * and associated media.
 */
export interface WpEvent {
  /** The event title */
  title: string;
  /** The slug used to generate the event URL */
  slug: string;
  /** Short summary or teaser for the event in HTML format */
  excerpt?: string;
  /** ISO 8601 date string for when the event was created/published */
  date: string;
  /** End date and time of the event, as string (typically `YYYY-MM-DD HH:mm:ss`) */
  endDate?: string;
  /** Whether the event is marked as an all-day event */
  allDay: boolean;
  /** Associated categories for the event */
  eventsCategories: WpCategories;
  /** Associated tags for the event */
  tags: WpTags;
  /** Whether the event is marked as featured/promoted */
  featured?: boolean;
  /** Optional image attached to the event */
  featuredImage: WpFeaturedImage;
  /** If true, this event should be hidden from the "upcoming events" list */
  hideFromUpcoming?: boolean;
  /** Organizer(s) responsible for hosting the event */
  organizers?: WpOrganizers;
  /** A physical or virtual venue associated with event. */
  venue?: WpVenue;
  /** Cost associated with the event */
  cost?: string | null;
  /** Link to signup page */
  url?: string | null;
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
