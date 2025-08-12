'use server';

import { WpArticlesResult, type WpArticlesResponse } from '@/types/apollo/articles.types';
import { gql } from '@apollo/client';
import { getApolloClient } from '@/lib/apollo/server/client';

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

/** Options for fetching paginated WordPress post previews.  */
interface WpFetchPostsOptions {
  /** Number of posts to fetch per page. Defaults to 100 (WordPress GraphQL max). */
  first?: number;
  /** Cursor to fetch posts after this point (used for forward pagination). */
  after?: string | null;
  /** Cursor to fetch posts before this point (used for backward pagination). */
  before?: string | null;
  /** Optional tag slug to filter posts by. */
  tag?: string;
  /** Optional category slug to filter posts by. */
  category?: string;
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
export async function wpFetchPostsPaginatedServer(options: WpFetchPostsOptions = {}): Promise<WpArticlesResult> {
  const { tag, category, first = 100, after = null, before = null } = options;

  // Add time-out check for query
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12_000);

  try {
    // Init client
    const client = getApolloClient();

    const { data, errors } = await client.query<WpArticlesResponse>({
      query: QUERY,
      variables: { first, after, before, tag, category },
      context: {
        fetchOptions: {
          next: {
            signal: controller.signal,
            tags: ['posts', 'wordpress'],
          },
        },
      },
    });

    // Handle errors
    if (errors?.length) {
      console.error('[wpFetchPostsPaginatedServer] Failed to fetch post:', { errors });
      return { posts: [], error: 'GraphQL response error' };
    }

    // Handle empty results
    if (!data?.posts) {
      return { posts: [], error: `Post doesn't exist` };
    }

    // Return result
    return { posts: data.posts.nodes, pageInfo: data.posts.pageInfo, error: null };
  } catch (error) {
    // Log full error server-side for debugging
    console.error('[wpFetchPostsPaginatedServer] GraphQl error:', { error });

    // Request timed out
    if (error instanceof DOMException && error.name === 'AbortError') {
      return { posts: [], error: 'GraphQL request timed out' };
    }

    // Unkonw error
    return {
      posts: [],
      error: 'Unknown error occoured while fetching wordpress posts, contact site admin.',
    };
  } finally {
    clearTimeout(timeout);
  }
}
