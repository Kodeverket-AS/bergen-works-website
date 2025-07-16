import { ApolloError } from '@apollo/client';

interface PageInfo {
  __typename: string;
  endCursor: string;
  hasNextPage: boolean;
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
 * Wordpress post & posts interfaces
 */
export interface WordpressPost {
  __typename: 'Post';
  slug: string;
  status: 'published' | 'private';
  title: string;
  uri: string;
  date: Date;
  modified: Date;
  isSticky: boolean;
  excerpt?: string;
  content?: string;
  contentStyles?: string;
  categories: Nodes<WordpressCategory>;
  tags: Nodes<WordpressTag>;
  featuredImage: Node<WordpressImage>;
}

export interface WordpressPostResponse extends WordpressResponse {
  post: WordpressPost | null;
}

export interface WordpressPostResult extends WordpressResponse {
  post: WordpressPost | null;
}

export interface WordpressPostsResponse extends WordpressResponse {
  posts: Nodes<WordpressPost>;
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
}
export interface WordpressPostsURIResponse extends WordpressResponse {
  uri: Nodes<WordpressURI>;
}
export interface WordpressPostsURIResult extends WordpressResponse {
  uri: WordpressURI[];
}

/**
 * Wordpress Tags & Category interfaces
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
