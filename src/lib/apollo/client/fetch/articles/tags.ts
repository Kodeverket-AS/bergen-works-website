import { type WpTagsResponse } from '@/types/apollo/articles.types';
import { type WpTag } from '@/types/apollo/shared.types';
import { ApolloError, gql } from '@apollo/client';
import apolloClient from '@/lib/apollo/client/client';

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

export async function wpFetchTags(): Promise<{ tags: WpTag[]; error: string | null }> {
  try {
    const { data, error } = await apolloClient.query<WpTagsResponse>({
      query: QUERY,
    });

    if (error) return { tags: [], error: 'GraphQL response error' };

    return { tags: data.tags?.nodes || [], error: null };
  } catch (error) {
    if (error instanceof ApolloError) {
      return { tags: [], error: error.message };
    }
    return {
      tags: [],
      error: 'Unknown error occoured while fetching wordpress post, contact site admin',
    };
  }
}
