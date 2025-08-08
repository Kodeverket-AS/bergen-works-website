import { type WordpressTagsResponse, type WordpressTagsResult } from '@/types/apollo/response.types';
import { ApolloError, gql } from '@apollo/client';
import apolloClientServer from '@/lib/apollo/server/client';

const QUERY = gql`
  query GetTags {
    tags(first: 100) {
      nodes {
        id
        name
        slug
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

export async function wpFetchTagsServer(): Promise<WordpressTagsResult> {
  try {
    const response = await apolloClientServer.query<WordpressTagsResponse>({
      query: QUERY,
    });

    // If fetch fails, return response as this helps ssg error handling
    if (response?.error) return { tags: [], error: response.error.cause };

    // Gather necessary datasets
    const tags = response.data.tags.nodes;
    const error = response.error?.cause;

    return { tags, error };
  } catch (error) {
    if (error instanceof ApolloError) {
      console.error(error.cause);
      return { tags: [], error: error.cause };
    }
    return {
      tags: [],
      error: 'Unknown error occoured while fetching wordpress post, contact site admin',
    };
  }
}
