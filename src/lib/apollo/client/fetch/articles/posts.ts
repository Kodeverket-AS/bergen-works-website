import { type WpArticlesResponse, type WpArticlesResult } from '@/types/apollo/articles.types';
import { ApolloError, gql } from '@apollo/client';
import apolloClient from '@/lib/apollo/client/client';

const QUERY = gql`
  query Posts($first: Int!, $after: String, $before: String, $tag: String, $category: String) {
    posts(
      first: $first
      after: $after
      before: $before
      where: { tag: $tag, categoryName: $category, status: PUBLISH }
    ) {
      nodes {
        slug
        status
        title
        uri
        modified
        excerpt
        categories {
          nodes {
            id
            slug
            name
          }
        }
        tags {
          nodes {
            id
            slug
            name
          }
        }
        isSticky
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;

/**
 * Options for fetching paginated WordPress post previews.
 */
interface WpFetchPostsOptions {
  /** Optional tag slug to filter posts by. */
  tag?: string;
  /** Optional category slug to filter posts by. */
  category?: string;
  /** Number of posts to fetch per page. Defaults to 100 (WordPress GraphQL max). */
  first?: number;
  /** Cursor to fetch posts after this point (used for forward pagination). */
  after?: string | null;
  /** Cursor to fetch posts before this point (used for backward pagination). */
  before?: string | null;
}

/**
 * Fetches a paginated list of published WordPress posts for use in article previews and listing components.
 *
 * This is typically used to populate article cards with title, excerpt, tags, categories, featured image, etc.
 * Pagination is supported via GraphQL cursor-based pagination.
 *
 * @param options - Optional filtering and pagination options.
 * @returns A list of post previews with pagination metadata and error info if applicable.
 */
export async function wpFetchPosts(options: WpFetchPostsOptions = {}): Promise<WpArticlesResult> {
  try {
    const { tag, category, first = 100, after = null, before = null } = options;

    const { data, error } = await apolloClient.query<WpArticlesResponse>({
      query: QUERY,
      variables: { tag, category, first, after, before },
    });

    if (error) return { posts: [], error: error.message };

    return { posts: data.posts?.nodes || [], pageInfo: data.posts?.pageInfo, error: null };
  } catch (error) {
    console.log(error);
    if (error instanceof ApolloError) {
      console.error(error.cause);
      return { posts: [], error: error.message };
    }
    return {
      posts: [],
      error: 'Unknown error occoured while fetching wordpress post, contact site admin',
    };
  }
}
