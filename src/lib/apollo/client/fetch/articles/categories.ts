import { type WpCategory } from '@/types/apollo/shared.types';
import { type WpCategoriesResponse } from '@/types/apollo/articles.types';
import { ApolloError, gql } from '@apollo/client';
import apolloClient from '@/lib/apollo/client/client';

const QUERY = gql`
  query GetCategories {
    categories {
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
export async function wpFetchCategories(): Promise<{ categories: WpCategory[]; error: string | null }> {
  try {
    const { data, error } = await apolloClient.query<WpCategoriesResponse>({
      query: QUERY,
    });

    if (error) return { categories: [], error: error.message };

    return { categories: data.categories?.nodes || [], error: null };
  } catch (error) {
    if (error instanceof ApolloError) {
      console.error(error.cause);
      return { categories: [], error: error.message };
    }
    return {
      categories: [],
      error: 'Unknown error occoured while fetching wordpress categories, contact site admin',
    };
  }
}
