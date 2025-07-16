import { type WordpressCategoriesResponse, type WordpressCategoriesResult } from '@/types/apollo/response.types';
import { ApolloError, gql } from '@apollo/client';
import apolloClient from '@/lib/apollo/client';

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

// todo - remove dummy data
export const availableCategories = [
  {
    name: 'Coworking',
    slug: 'coworking',
    id: 'dGVybTo0OA==',
  },
  {
    name: 'Inkubator',
    slug: 'inkubator',
    id: 'dGVybTo1Nw==',
  },
  {
    name: 'Månedsoppsumering',
    slug: 'manedsoppsumering',
    id: 'dGVybTo2Nw==',
  },
  {
    name: 'Medlemmer',
    slug: 'medlemmer',
    id: 'dGVybTox',
  },
];
