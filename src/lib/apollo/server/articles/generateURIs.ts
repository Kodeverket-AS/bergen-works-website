'use server';

import {
  type WordpressPostsURIResponse,
  type WordpressPostsURIResult,
  type WordpressURI,
} from '@/types/apollo/response.types';
import { ApolloError, ApolloQueryResult, gql } from '@apollo/client';
import apolloClientServer from '@/lib/apollo/server/client';

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

/**
 * Options for fetching post URIs from the WordPress GraphQL API.
 */
interface WpFetchURIsOptions {
  /**
   * Optional list of tag IDs to filter the post results.
   */
  tags?: string[];

  /**
   * Optional list of category IDs to filter the post results.
   */
  category?: string[];

  /**
   * Number of posts to fetch per request. Defaults to 100, which is the maximum allowed by WPGraphQL.
   */
  first?: number;
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
export async function wpFetchURIsServer({
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
      const response: ApolloQueryResult<WordpressPostsURIResponse> = await apolloClientServer.query({
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
