'use server';

import { type WpTagsResponse } from '@/types/apollo/articles.types';
import { type WpTag } from '@/types/apollo/shared.types';
import { ApolloQueryResult, gql } from '@apollo/client';
import { getApolloClient } from '@/lib/apollo/server/client';

const QUERY = gql`
  query GetTags($first: Int!, $after: String) {
    tags(first: $first, after: $after) {
      nodes {
        id
        name
        slug
      }
      pageInfo {
        __typename
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;

/**
 * Fetches all available tags from the WordPress GraphQL API.
 *
 * This function retrieves the first 100 tag nodes including their `id`, `name`, and `slug`.
 * It is typically used for displaying tag filters or generating tag-based routes.
 *
 * @returns A result object containing the list of tags or an error if the fetch fails.
 */

export async function wpFetchTagsServer({ first = 100 } = {}): Promise<{
  tags: WpTag[];
  error: string | null;
}> {
  // Add time-out check for query
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12_000);

  try {
    // Init client
    const client = getApolloClient();

    // Start with empty tags list
    const tags: WpTag[] = [];

    // Graphql pagination helper variables
    let after: string | null = null;
    let hasNextPage: boolean = true;

    // Cap to avoid infinite loops if server sends weird cursors
    const MAX_PAGES = 100;
    let pageCount = 0;

    // Keep track of graphql error
    let error: string | null = null;

    while (hasNextPage && pageCount < MAX_PAGES) {
      const response: ApolloQueryResult<WpTagsResponse> = await client.query({
        query: QUERY,
        variables: { first, after },
        context: {
          fetchOptions: {
            next: {
              signal: controller.signal,
              tags: ['tags', 'wordpress'],
            },
          },
        },
      });

      if (response?.errors) {
        console.error('[wpFetchTagsServer] Failed to fetch tags:', { errors: response.errors });
        error = 'GraphQL response error';
        break;
      }

      // Fix for edge case null return
      if (!response.data.tags) break;

      // Push events to collection
      tags.push(...response.data.tags.nodes.map((tag) => tag));

      // Update pagination helpers
      after = response.data.tags.pageInfo?.endCursor ?? null;
      hasNextPage = Boolean(response.data.tags.pageInfo?.hasNextPage);
      pageCount++;
    }

    return { tags, error };
  } catch (error) {
    // Log full error server-side for debugging
    console.error('[wpFetchTagsServer] GraphQl error:', { error });

    // Request timed out
    if (error instanceof DOMException && error.name === 'AbortError') {
      return { tags: [], error: 'GraphQL request timed out' };
    }

    // Unknown error
    return { tags: [], error: 'Unknown error occoured while fetching wordpress tags, contact site admin.' };
  } finally {
    clearTimeout(timeout);
  }
}
