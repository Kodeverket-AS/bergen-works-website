import { type WordpressCategoriesResponse, type WordpressCategoriesResult } from '@/types/apollo/response.types';
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
export async function wpFetchCategories(): Promise<WordpressCategoriesResult> {
  try {
    const response = await apolloClient.query<WordpressCategoriesResponse>({
      query: QUERY,
    });

    // If fetch fails, return response as this helps ssg error handling
    if (response?.error) return { categories: [], error: response.error.cause };

    // Gather necessary datasets
    const categories = response.data.categories.nodes;
    const error = response.error?.cause;

    return { categories, error };
  } catch (error) {
    if (error instanceof ApolloError) {
      console.error(error.cause);
      return { categories: [], error: error.cause };
    }
    return {
      categories: [],
      error: 'Unknown error occoured while fetching wordpress categories, contact site admin',
    };
  }
}
