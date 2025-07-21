import {
  type WordpressPostsURIResponse,
  type WordpressPostsURIResult,
  type WordpressURI,
} from '@/types/apollo/response.types';
import { ApolloError, ApolloQueryResult, gql } from '@apollo/client';
import apolloClient from '@/lib/apollo/client';

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

interface WpFetchURIsOptions {
  tags?: string[];
  category?: string[];
  /**
   * Number of posts to fetch per page. Defaults to 100 which is the max that we can request at once.
   */
  first?: number;
}
export async function wpFetchURIs({
  first = 100,
  tags,
  category,
}: WpFetchURIsOptions = {}): Promise<WordpressPostsURIResult> {
  try {
    // Start with empty list
    const uri: WordpressURI[] = [];

    // Graphql pagination helper variables
    let after: string | null = null;
    let error: string | undefined = undefined;
    let hasNextPage: boolean = true;

    // Itterate trough multiple pages until all posts URIs has been collected
    // Using this type as client has problem extracting type in while loops
    while (hasNextPage) {
      const response: ApolloQueryResult<WordpressPostsURIResponse> = await apolloClient.query({
        query: QUERY,
        variables: { first, after, tags, category },
      });

      // If fetch fails, return response as this helps ssg error handling
      if (response?.error) {
        error = response.error.cause?.message;
        break;
      }

      // Gather reqruired fields
      const nodes = response.data.posts.nodes;
      const pageInfo = response.data.posts.pageInfo;

      // Process fetched URIs
      uri.push(...nodes.map((node) => ({ ...node, uri: node.uri.replace(/^\/|\/$/g, '') })));

      // Update pagination helpers
      after = pageInfo?.endCursor ?? null;
      hasNextPage = Boolean(pageInfo?.hasNextPage);
    }

    return { uri, error };
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
