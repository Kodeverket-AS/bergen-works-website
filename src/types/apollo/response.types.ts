import { ApolloError } from '@apollo/client';

export interface PageInfo {
  __typename?: string;
  startCursor: string;
  endCursor: string;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

interface Node<T> {
  node: T | undefined;
}
interface Nodes<T> {
  nodes: T[];
}

interface WordpressImage {
  sourceUrl: string;
  altText: string;
}

interface WordpressResponse {
  pageInfo?: PageInfo;
  error?: ApolloError['cause'] | string;
}

// todo: perhaps we can extract metadata?

/**
 * Represents a single post fetched from WordPress via GraphQL.
 */
export interface WordpressPost {
  __typename: 'Post';
  /**
   * The URL-friendly slug of the post, used to identify it.
   */
  slug: string;
  /**
   * The publication status of the post (e.g., 'published', 'private').
   */
  status: 'published' | 'private';
  title: string;
  /**
   * Combined date and slug string in the format `/year/month/day/slug/`.
   * Used to construct dynamic route paths.
   */
  uri: string;
  /**
   * The original publication date of the post.
   */
  date: Date;
  /**
   * The last modified date of the post.
   */
  modified: Date;
  /**
   * Indicates whether the post is marked as "sticky" (featured).
   */
  isSticky: boolean;
  /**
   * A short summary of the post, typically used in previews or cards.
   */
  excerpt?: string;
  /**
   * The full HTML content of the post as returned from WordPress.
   * Should be rendered using `dangerouslySetInnerHTML` in React.
   */
  content?: string;
  /**
   * Raw CSS styles associated with the post (e.g., from Elementor).
   * Should be injected into a `<style>` tag using `dangerouslySetInnerHTML`.
   */
  contentStyles?: string;
  categories: Nodes<WordpressCategory>;
  tags: Nodes<WordpressTag>;
  /**
   * The post's featured image and its associated metadata.
   */
  featuredImage: Node<WordpressImage>;
}

export interface WordpressPostResponse extends WordpressResponse {
  post: WordpressPost | null;
}

export interface WordpressPostResult extends WordpressResponse {
  post: WordpressPost | null;
}

export interface WordpressPostsResponse {
  posts: Nodes<WordpressPost> & WordpressResponse;
}

export interface WordpressPostsResult extends WordpressResponse {
  posts: WordpressPost[];
}

/**
 * Wordpress URI interfaces
 */
export interface WordpressURI {
  slug: string;
  uri: string;
  date: string;
  modified: string;
}

export interface WordpressPostsURIResponse extends Omit<WordpressResponse, 'pageInfo'> {
  posts: Nodes<WordpressURI> & {
    pageInfo: PageInfo;
  };
}

export interface WordpressPostsURIResult extends WordpressResponse {
  uri: WordpressURI[];
}

/**
 * Wordpress Tag
 */
export interface WordpressTag {
  id: string;
  slug: string;
  name: string;
}

export interface WordpressTagsResponse extends WordpressResponse {
  tags: Nodes<WordpressTag>;
}

export interface WordpressTagsResult extends WordpressResponse {
  tags: WordpressTag[];
}

/**
 * Wordpress Category
 */
export interface WordpressCategory {
  id: string;
  slug: string;
  name: string;
}

export interface WordpressCategoriesResponse extends WordpressResponse {
  categories: Nodes<WordpressCategory>;
}

export interface WordpressCategoriesResult extends WordpressResponse {
  categories: WordpressCategory[];
}
