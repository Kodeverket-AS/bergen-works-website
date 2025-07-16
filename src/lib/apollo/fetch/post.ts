import { type WordpressPostResponse, type WordpressPostResult } from '@/types/apollo/response.types';
import { ApolloError, gql } from '@apollo/client';
import apolloClient from '@/lib/apollo/client';

const QUERY = gql`
  query post($id: ID = "") {
    post(id: $id, idType: SLUG) {
      title
      slug
      content
      contentStyles
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
`;

export async function wpFetchPost(slug: string): Promise<WordpressPostResult> {
  try {
    const response = await apolloClient.query<WordpressPostResponse>({
      query: QUERY,
      variables: { id: slug },
    });

    // If fetch fails, return response as this helps ssg error handling
    if (response?.error) return { post: null, error: response.error.cause };

    // Gather necessary datasets
    const post = response.data?.post;
    const error = response.error?.cause;

    return { post, error };
  } catch (error) {
    if (error instanceof ApolloError) {
      console.error(error.cause);
      return { post: null, error: error.cause };
    }
    return {
      post: null,
      error: 'Unknown error occoured while fetching wordpress post, contact site admin',
    };
  }
}
