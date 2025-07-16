import { WordpressPostsURIResult, WordpressURI } from '@/types/apollo/response.types';
import { ApolloError, gql } from '@apollo/client';

const QUERY = gql`
  query Posts($first: Int!, $after: String, $tags: [ID], $categories: [ID]) {
    posts(first: $first, after: $after, where: { categoryIn: $categories, tagIn: $tags, status: PUBLISH }) {
      nodes {
        uri
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

interface WpFetchURIsOptions {
  tags?: string[];
  category?: string[];
  /**
   * Number of posts to fetch per page. Defaults to 100 which is the max that we can request at once.
   */
  first?: number;
  /**
   * Cursor for pagination. Fetches posts after this cursor (cursor is basically an id of a position).
   */
  after?: string | null;
}
export async function wpFetchURIs({
  first = 2,
  tags,
  category,
}: WpFetchURIsOptions = {}): Promise<WordpressPostsURIResult> {
  try {
    // Start with empty list
    const uri: WordpressURI[] = [];

    // Graphql pagination helper variables
    let after: string | null = null;
    let hasNextPage = true;

    // Itterate trough multiple pages until all posts URIs has been collected
    while (hasNextPage) {
      const result = await wpFetchURIs({ first, after, tags, category });

      console.log(result);
      hasNextPage = false;
    }

    return { uri };
  } catch (error) {
    if (error instanceof ApolloError) {
      console.error(error.cause);
      return { uri: [], error: error.cause };
    }

    console.error('Unknown error occoured while fetching wordpress URIs, contact site admin');
    return {
      uri: [],
      error: 'Unknown error occoured while fetching wordpress URIs, contact site admin',
    };
  }
}
