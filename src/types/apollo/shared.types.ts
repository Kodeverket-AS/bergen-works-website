/* ====================================================================================================
 * GraphQL Shared Types
 * These types are based on standard GraphQL structures such as pagination,
 * connections, and nodes. Safe for reuse across different APIs using GraphQL.
 * ==================================================================================================== */

/**
 * Represents a single GraphQL Relay-style connection edge.
 *
 * Each edge contains a `node` (the actual item in the list)
 * and a `cursor`, which is used for pagination.
 */
interface GqlEdge<T> {
  /** The GraphQL type name of the edge (typically "PostEdge", "EventEdge", etc.). */
  __typename?: string;
  /** The item at the end of the edge. */
  node: T;
  /** A cursor for use in pagination. */
  cursor: string;
}

/**
 * Represents a collection of GraphQL Relay-style edges.
 *
 * This structure is used in paginated responses, typically returned from
 * WPGraphQL or other Relay-compliant GraphQL APIs. Each edge includes a `node`,
 * which holds the actual data (e.g. a post or category), and a `cursor`,
 * which is used to fetch subsequent pages.
 *
 * This type mirrors the `edges` array in GraphQL connection fields.
 * @see {@link https://www.wpgraphql.com/docs/graphql-connections/ WPGraphQL Connection Docs}
 */
export interface GqlEdges<T> {
  /**
   * The array of edges, each representing an item and its pagination cursor.
   */
  edges: GqlEdge<T>[];
}

/**
 * Represents a single GraphQL node.
 *
 * This is typically used in connection-based pagination to wrap an individual item
 * returned from a GraphQL `{ node { ... } }` structure.
 */
export interface GqlNode<T> {
  /**
   * The referenced entity, or `null` if the relationship is empty or unresolved.
   * Often used for related objects like `featuredImage`, `author`, or similar.
   */
  node: T | null;
}

/**
 * Represents a simplified structure for collections returned by GraphQL queries.
 *
 * Many GraphQL APIs, especially those not strictly following the Relay spec, return
 * a flat `nodes` array instead of `edges { node }`.
 *
 * @example
 * {
 *   nodes: [ { id: '1', name: 'Foo' }, { id: '2', name: 'Bar' } ]
 * }
 */
export interface GqlNodes<T> {
  /**
   * The array of items (entities) returned by the GraphQL connection.
   * Each item represents a full object such as a tag, post, category, etc.
   */
  nodes: T[];
}

/**
 * Represents pagination metadata in a GraphQL Relay-style connection.
 *
 * Provides cursors and directional flags used to paginate through a list of results.
 * Commonly returned as `pageInfo` in connection-based queries (e.g. WordPress posts, tags).
 */
export interface GqlPageInfo {
  /** Optional typename metadata for GraphQL introspection or caching purposes. */
  __typename?: string;
  /** Cursor representing the start of the current page of results. */
  startCursor: string | null;
  /** Cursor representing the end of the current page of results. */
  endCursor: string | null;
  /** Indicates whether there are more items available after this page. */
  hasNextPage: boolean;
  /** Indicates whether there are items available before this page. */
  hasPreviousPage: boolean;
}

/* ====================================================================================================
 * WordPress Specific Types
 * These types represent WordPress-specific structures and are typically used
 * in WPGraphQL responses. Do not reuse for other CMS integrations.
 * ==================================================================================================== */

/**
 * Represents the raw tag entity returned by WPGraphQL.
 */
export interface WpTag {
  /** Global unique identifier for the tag (Base64-encoded ID) */
  id: string;
  /** URL-safe slug used in tag links or queries */
  slug: string;
  /** Human-readable name for the tag */
  name: string;
}

/**
 * Array of WordPress tags used in content models.
 *
 * Always returned as an array—even when empty.
 */
export type WpTags = GqlNodes<WpTag>;

/**
 * Represents a single category returned by WPGraphQL.
 */
export interface WpCategory {
  /** Global unique identifier for the category (Base64-encoded ID) */
  id: string;
  /** URL-safe slug used in category links or queries */
  slug: string;
  /** Human-readable name for the category */
  name: string;
}

/**
 * Array of WordPress categories used in content models.
 *
 * Always returned as an array—even when empty.
 */
export type WpCategories = GqlNodes<WpCategory>;

/**
 * Represents a featured image object from the WordPress GraphQL API.
 *
 * Includes metadata for rendering, accessibility, and responsive handling.
 */
export interface WpImage {
  /** The full URL to the image source. */
  sourceUrl: string;
  /** The alt text for screen readers and SEO. */
  altText: string;
  /** The caption of the image, if provided. */
  caption?: string | null;
  /** A textual description of the image, if available. */
  description?: string | null;
  /** The current status of the media item, typically "inherit". */
  status?: string;
  /** Image dimension details. */
  mediaDetails: {
    /** Height of the image in pixels. */
    height: number;
    /** Width of the image in pixels. */
    width: number;
  };
}

/**
 * Represents the featured image of a WordPress post.
 *
 * This type is a GraphQL `node` wrapper around the `WpImage` type,
 * or `null` if no featured image is assigned to the post.
 *
 * Typically found at `post.featuredImage.node` in WPGraphQL responses.
 */
export type WpFeaturedImage = GqlNode<WpImage> | null;

/**
 * Represents a WordPress organizer entity retrieved via WPGraphQL.
 *
 * This type includes basic metadata and optional featured image information
 * about an event organizer, typically associated with a custom post type or taxonomy.
 */
export interface WpOrganizer {
  /** Display name of the organizer. */
  title: string;
  /** Unique slug used to identify the organizer. */
  slug: string;
  /** Absolute link to the organizer’s WordPress page. */
  link: string;
  /** External website associated with the organizer. */
  website: string;
  /** Optional featured image representing the organizer. */
  featuredImage: WpFeaturedImage;
}

/**
 * Represents a list of WordPress organizers or `null` if none are assigned.
 *
 * Typically used as a field within a parent type such as `WpEvent` to reference
 * one or more associated organizers.
 */
export type WpOrganizers = GqlNodes<WpOrganizer>;
