'use server';

import { type WpCategoriesResponse } from '@/types/apollo/articles.types';
import { type WpCategory } from '@/types/apollo/shared.types';
import { gql } from '@apollo/client';
import { getApolloClient } from '@/lib/apollo/server/client';

const QUERY = gql`
  query GetCategories {
    categories(first: 100) {
      nodes {
        id
        name
        slug
      }
    }
  }
`;

/**
 * Fetches all available categories from the WordPress GraphQL API.
 *
 * This function retrieves category nodes including their `id`, `name`, and `slug`.
 * It is typically used for category-based filters, route generation, or grouping posts.
 *
 * @returns A result object containing the list of categories or an error if the fetch fails.
 */
export async function wpFetchCategoriesServer(): Promise<{
  categories: WpCategory[];
  error: string | null;
}> {
  // Add time-out check for query
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12_000);

  try {
    const client = getApolloClient();
    const { data, errors } = await client.query<WpCategoriesResponse>({
      query: QUERY,
      context: {
        fetchOptions: {
          signal: controller.signal,
          next: {
            tags: ['categories', 'wordpress'],
          },
        },
      },
    });

    // Handle errors
    if (errors?.length) {
      console.error('[wpFetchCategoriesServer] Failed to fetch categories:', { errors });
      return { categories: [], error: 'GraphQL response error' };
    }

    // Handle empty results
    if (!data?.categories) {
      return { categories: [], error: `No categories found` };
    }

    return { categories: data.categories.nodes, error: null };
  } catch (error) {
    // Log full error server-side for debugging
    console.error('[wpFetchCategoriesServer] GraphQl error:', { error });

    // Request timed out
    if (error instanceof DOMException && error.name === 'AbortError') {
      return { categories: [], error: 'GraphQL request timed out' };
    }

    // Unknown error
    return { categories: [], error: 'Unknown error occoured while fetching wordpress categories, contact site admin.' };
  } finally {
    clearTimeout(timeout);
  }
}
