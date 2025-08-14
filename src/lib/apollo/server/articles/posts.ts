'use server';

import { type WpArticlesResponse, type WpPost } from '@/types/apollo/articles.types';
import { ApolloQueryResult, gql } from '@apollo/client';
import { getApolloClient } from '@/lib/apollo/server/client';

const QUERY = gql`
  query Posts($first: Int!, $after: String, $tag: String, $category: String) {
    posts(first: $first, after: $after, where: { tag: $tag, categoryName: $category, status: PUBLISH }) {
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
export async function wpFetchPostsServer(
  options: WpFetchPostsOptions = {}
): Promise<{ posts: WpPost[]; error: string | null }> {
  const { first = 100, tag, category } = options;

  // Add time-out check for query
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12_000);

  try {
    // Init client
    const client = getApolloClient();

    // Start with empty posts list
    const posts: WpPost[] = [];

    // Graphql pagination helper variables
    let after: string | null = null;
    let hasNextPage: boolean = true;

    // Cap to avoid infinite loops if server sends weird cursors
    const MAX_PAGES = 100;
    let pageCount = 0;

    // Keep track of graphql error
    let error: string | null = null;

    while (hasNextPage && pageCount < MAX_PAGES) {
      const response: ApolloQueryResult<WpArticlesResponse> = await client.query({
        query: QUERY,
        variables: { first, after, tag, category },
        context: {
          fetchOptions: {
            next: {
              signal: controller.signal,
              tags: ['posts', 'wordpress'],
            },
          },
        },
      });

      if (response?.errors) {
        console.error('[wpFetchPostsServer] Failed to fetch posts:', { errors: response.errors });
        error = 'GraphQL response error';
        break;
      }

      // Fix for edge case null return
      if (!response.data.posts) break;

      // Push posts to collection
      posts.push(...response.data.posts.nodes.map((post) => post));

      // Update pagination helpers
      after = response.data.posts.pageInfo?.endCursor ?? null;
      hasNextPage = Boolean(response.data.posts.pageInfo?.hasNextPage);
      pageCount++;
    }

    return { posts, error };
  } catch (error) {
    // Log full error server-side for debugging
    console.error('[wpFetchPostsServer] GraphQl error:', { error });

    // Request timed out
    if (error instanceof DOMException && error.name === 'AbortError') {
      return { posts: [], error: 'GraphQL request timed out' };
    }

    // Unkonw error
    return { posts: [], error: 'Unknown error occoured while fetching wordpress posts, contact site admin.' };
  } finally {
    clearTimeout(timeout);
  }
}
