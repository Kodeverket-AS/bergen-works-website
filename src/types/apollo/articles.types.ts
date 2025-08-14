import { type GqlNodes, type GqlPageInfo, type WpCategories, type WpFeaturedImage, type WpTags } from './shared.types';

/**
 * Represents a single WordPress article post fetched from WPGraphQL.
 */
export interface WpPost {
  /** Unique identifier for the article, usually a GraphQL Node ID. */
  id: string;
  /** URL-friendly slug used for routing to the article detail page. */
  slug: string;
  /** Combined date and slug string in the format `/year/month/day/slug/`, used to construct dynamic route paths. */
  uri: string;
  /** Title or name of the post. */
  title: string;
  /** The publication status of the post (e.g., 'published', 'private') */
  status: 'published' | 'private';
  /** Indicates whether the post is marked as "sticky" (featured) */
  isSticky: boolean;
  /** Raw HTML content of the article, used with `dangerouslySetInnerHTML`. */
  content: string | null;
  /** Short HTML excerpt or summary of the article, used with `dangerouslySetInnerHTML`. */
  excerpt: string | null;
  /** Extra styles supplied by elementor in wordpress, used with `dangerouslySetInnerHTML`. */
  contentStyles?: string | null;
  /** Optional featured image representing the article. */
  featuredImage: WpFeaturedImage;
  /** Categories associated with the article. */
  categories: WpCategories;
  /** Tags associated with the article. */
  tags: WpTags;
  /** ISO timestamp of when the article was originally created in WordPress. */
  date: string;
  /** ISO timestamp of when the article was last modified in WordPress. */
  modified: string;
}

/**
 * Represents the structure of a GraphQL response for a single WordPress post.
 *
 * This type is passed to `apolloClient.query<T>()` to define the expected shape of the response
 * when querying a single post (typically by ID or slug).
 *
 * @see WpPost - The shape of the returned post object.
 *
 * Example usage:
 * ```ts
 * const response = await apolloClient.query<WpArticleResponse>({
 *   query: GET_POST_BY_SLUG,
 *   variables: { slug: 'my-post-slug' },
 * });
 * const post = response.data.post;
 * if (!post) {
 *   console.error('Post not found');
 * }
 * ```
 */
export interface WpArticleResponse {
  /** The single WordPress post returned by the query, or `null` if not found. */
  post: WpPost | null;
}

/**
 * Represents the structure of a GraphQL response for a list of WordPress posts.
 *
 * This type is passed to `apolloClient.query<T>()` to define the expected shape of the response.
 * It includes:
 * - A list of posts nodes under the `posts.nodes` array.
 * - Pagination metadata under `posts.pageInfo`, following the Relay specification.
 *
 * @see WpPost - The shape of each individual post.
 * @see GqlNodes - A generic wrapper for lists of GraphQL nodes.
 * @see GqlPageInfo - Standard pagination metadata used in cursor-based pagination.
 *
 * Example usage:
 * ```ts
 * const response = await apolloClient.query<WpArticlesResponse>({
 *   query: GET_POSTS_QUERY
 * });
 * const posts = response.data.posts.nodes;
 * const pageInfo = response.data.posts.pageInfo;
 * ```
 */
export interface WpArticlesResponse {
  /**
   * Contains a list of posts nodes and pagination metadata.
   * - `nodes` holds individual WordPress posts entries.
   * - `pageInfo` provides cursor-based pagination details.
   */
  posts: (GqlNodes<WpPost> & GqlPageInfo) | null;
}

export interface WpArticlesResult {
  /**
   * Contains a list of posts nodes and pagination metadata.
   * - `nodes` holds individual WordPress posts entries.
   * - `pageInfo` provides cursor-based pagination details.
   */
  posts: WpPost[];
  pageInfo?: GqlPageInfo['pageInfo'];
  error: string | null;
}

/**
 * Represents the structure of a GraphQL response for a list of WordPress categories.
 *
 * This type is used when querying all categories from WPGraphQL.
 * The list is wrapped in a `categories.nodes` array following the Relay connection spec.
 *
 * @see WpCategories - The shape of each individual category object.
 * @see GqlNodes - A generic wrapper for lists of GraphQL nodes.
 *
 * Example usage:
 * ```ts
 * const response = await apolloClient.query<WpCategoriesResponse>({
 *   query: GET_CATEGORIES_QUERY
 * });
 * const categories = response.data.categories?.nodes ?? [];
 * ```
 */
export interface WpCategoriesResponse {
  /** A connection object containing the list of categories, or `null` if none exist. */
  categories: WpCategories | null;
}

/**
 * Represents the structure of a GraphQL response for a list of WordPress tags.
 *
 * This type is used when querying all tags from WPGraphQL.
 * The list is wrapped in a `tags.nodes` array following the Relay connection spec.
 *
 * @see WpTags - The shape of each individual tag object.
 * @see GqlNodes - A generic wrapper for lists of GraphQL nodes.
 *
 * Example usage:
 * ```ts
 * const response = await apolloClient.query<WpTagsResponse>({
 *   query: GET_TAGS_QUERY
 * });
 * const tags = response.data.tags?.nodes ?? [];
 * ```
 */
export interface WpTagsResponse {
  /** A connection object containing the list of tags, or `null` if none exist. */
  tags: (WpTags & GqlPageInfo) | null;
}

/**
 * Represents the minimal set of fields needed from a WordPress post
 * when generating static routes (SSG) for articles.
 *
 * Includes:
 * - `slug`: The post's URL-friendly identifier.
 * - `uri`: The full path string in the format `/YYYY/MM/DD/slug`.
 * - `date`: ISO timestamp for when the post was created.
 * - `modified`: ISO timestamp for when the post was last updated.
 *
 * @see WpPost - The full post type definition.
 */
export type WpUri = Pick<WpPost, 'slug' | 'uri' | 'date' | 'modified'>;

/**
 * Represents the structure of a GraphQL response for fetching only
 * the minimal metadata (`WpUri`) needed to generate dynamic routes
 * for articles.
 *
 * This type is used in `generateStaticParams` to prebuild article
 * pages during static site generation.
 *
 * The `uri` returned by WordPress has the format `/YYYY/MM/DD/slug`,
 * and often requires stripping the leading slash before use in
 * route parameters.
 *
 * @see WpUri - The shape of each minimal post object.
 * @see GqlNodes - A generic wrapper for lists of GraphQL nodes.
 * @see GqlPageInfo - Standard pagination metadata for Relay-style queries.
 *
 * Example usage:
 * ```ts
 * const response = await apolloClient.query<WpUriResponse>({
 *   query: GET_POST_URIS
 * });
 * const uris = response.data.posts?.nodes ?? [];
 * ```
 */
export interface WpUriResponse {
  /** Connection object containing minimal post metadata for route generation, or `null` if none exist. */
  posts: (GqlNodes<WpUri> & GqlPageInfo) | null;
}
