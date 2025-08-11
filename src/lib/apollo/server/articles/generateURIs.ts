'use server';

import { ApolloQueryResult, gql } from '@apollo/client';
import { getApolloClient } from '@/lib/apollo/server/client';
import { WpUri, WpUriResponse } from '@/types/apollo/articles.types';

const QUERY = gql`
  query Posts($first: Int!, $after: String, $tags: [ID], $categories: [ID]) {
    posts(first: $first, after: $after, where: { categoryIn: $categories, tagIn: $tags, status: PUBLISH }) {
      nodes {
        uri
        slug
        date
        modified
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

/** Options for fetching post URIs from the WordPress GraphQL API. */
interface WpFetchURIsOptions {
  /** Number of posts to fetch per request. Defaults to 100, which is the maximum allowed by WPGraphQL. */
  first?: number;
  /** Optional list of tag IDs to filter the post results. */
  tags?: string[];
  /** Optional list of category IDs to filter the post results. */
  category?: string[];
}

/**
 * Fetches a complete list of published WordPress post URIs using cursor-based pagination.
 *
 * This function is commonly used in:
 * - `generateStaticParams()` to statically generate dynamic article routes.
 * - `sitemap.ts` to produce a complete sitemap of all article URLs.
 *
 * Posts are fetched in batches (default 100) until no further pages remain.
 *
 * @param options - Optional filter and pagination parameters.
 * @returns A promise resolving to all available post URIs and pagination error info if applicable.
 */
export async function wpFetchURIsServer({ first = 100, tags, category }: WpFetchURIsOptions = {}): Promise<{
  uri: WpUri[];
  error: string | null;
}> {
  // Add time-out check for query
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12_000);

  try {
    // Init client
    const client = getApolloClient();

    // Start with empty list
    const uri: WpUri[] = [];

    // Graphql pagination helper variables
    let after: string | null = null;
    let hasNextPage: boolean = true;

    // Cap to avoid infinite loops if server sends weird cursors
    const MAX_PAGES = 100;
    let pageCount = 0;

    // Keep track of graphql error
    let error: string | null = null;

    while (hasNextPage && pageCount < MAX_PAGES) {
      const response: ApolloQueryResult<WpUriResponse> = await client.query({
        query: QUERY,
        variables: { first, after, tags, category },
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
        console.error('[wpFetchURIsServer] Failed to fetch posts uris:', { errors: response.errors });
        error = 'GraphQL response error';
        break;
      }

      // Fix for edge case null return
      if (!response.data.posts) break;

      // Push events to collection
      uri.push(...response.data.posts.nodes.map((post) => post));

      // Update pagination helpers
      after = response.data.posts.pageInfo?.endCursor ?? null;
      hasNextPage = Boolean(response.data.posts.pageInfo?.hasNextPage);
      pageCount++;
    }

    return { uri, error };
  } catch (error) {
    // Log full error server-side for debugging
    console.error('[wpFetchURIsServer] GraphQl error:', { error });

    // Request timed out
    if (error instanceof DOMException && error.name === 'AbortError') {
      return { uri: [], error: 'GraphQL request timed out' };
    }

    // Unkonw error
    return { uri: [], error: 'Unknown error occoured while fetching wordpress posts uris, contact site admin.' };
  } finally {
    clearTimeout(timeout);
  }
}
