import { type WordpressPostsResponse, type WordpressPostsResult } from '@/types/apollo/response.types';
import { ApolloError, gql } from '@apollo/client';
import apolloClientServer from '@/lib/apollo/server/client';

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
  /**
   * Optional tag slug to filter posts by.
   */
  tag?: string;

  /**
   * Optional category slug to filter posts by.
   */
  category?: string;

  /**
   * Number of posts to fetch per page. Defaults to 100 (WordPress GraphQL max).
   */
  first?: number;

  /**
   * Cursor to fetch posts after this point (used for forward pagination).
   */
  after?: string | null;

  /**
   * Cursor to fetch posts before this point (used for backward pagination).
   */
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
export async function wpFetchPosts(options: WpFetchPostsOptions = {}): Promise<WordpressPostsResult> {
  try {
    const { tag, category, first = 100, after = null, before = null } = options;

    const response = await apolloClientServer.query<WordpressPostsResponse>({
      query: QUERY,
      variables: { tag, category, first, after, before },
    });

    // If fetch fails, return response as this helps ssg error handling
    if (response?.error) return { posts: [], error: response.error.cause };

    // Gather necessary datasets
    const posts = response.data.posts.nodes;
    const pageInfo = response.data.posts.pageInfo;
    const error = response.error?.cause;

    return { posts, pageInfo, error };
  } catch (error) {
    console.log(error);
    if (error instanceof ApolloError) {
      console.error(error.cause);
      return { posts: [], error: error.cause };
    }
    return {
      posts: [],
      error: 'Unknown error occoured while fetching wordpress post, contact site admin',
    };
  }
}
