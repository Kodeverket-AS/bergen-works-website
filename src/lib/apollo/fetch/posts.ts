import { type WordpressPostsResponse, type WordpressPostsResult } from '@/types/apollo/response.types';
import { ApolloError, gql } from '@apollo/client';
import apolloClient from '@/lib/apollo/client';

const QUERY = gql`
  query Posts($first: Int!, $after: String, $before: String, $tags: [ID], $categories: [ID]) {
    posts(
      first: $first
      after: $after
      before: $before
      where: { categoryIn: $categories, tagIn: $tags, status: PUBLISH }
    ) {
      nodes {
        slug
        status
        title
        uri
        modified
        excerpt
        categories {
          nodes {
            name
          }
        }
        tags {
          nodes {
            id
            slug
            name
          }
        }
        isSticky
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
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

interface WpFetchPostsOptions {
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
  before?: string | null;
}

export async function wpFetchPosts(options: WpFetchPostsOptions = {}): Promise<WordpressPostsResult> {
  try {
    const { tags, category, first = 100, after = null, before = null } = options;

    const response = await apolloClient.query<WordpressPostsResponse>({
      query: QUERY,
      variables: { tags, category, first, after, before },
    });

    // If fetch fails, return response as this helps ssg error handling
    if (response?.error) return { posts: [], error: response.error.cause };

    // Gather necessary datasets
    const posts = response.data.posts.nodes;
    const pageInfo = response.data.posts.pageInfo;
    const error = response.error?.cause;

    return { posts, pageInfo, error };
  } catch (error) {
    console.log(error);
    if (error instanceof ApolloError) {
      console.error(error.cause);
      return { posts: [], error: error.cause };
    }
    return {
      posts: [],
      error: 'Unknown error occoured while fetching wordpress post, contact site admin',
    };
  }
}
