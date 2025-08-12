import { type WpArticleResponse, type WpPost } from '@/types/apollo/articles.types';
import { ApolloError, gql } from '@apollo/client';
import apolloClient from '@/lib/apollo/client/client';

const QUERY = gql`
  query post($id: ID = "") {
    post(id: $id, idType: SLUG) {
      __typename
      title
      slug
      status
      isSticky
      uri
      date
      modified
      content
      contentStyles
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      categories {
        nodes {
          id
          slug
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
    }
  }
`;

/**
 * Fetches the full content of a single WordPress post by its slug.
 *
 * This is used during static site generation to build individual article pages
 *
 * It queries the WordPress GraphQL API to retrieve the post's content,
 * featured image, and styles, based on the provided slug.
 *
 * @param slug - The slug of the post to fetch.
 * @returns A post result object containing content and metadata, or error details.
 */
export async function wpFetchPost(slug: string): Promise<{ post: WpPost | null; error: string | null }> {
  try {
    const { data, error } = await apolloClient.query<WpArticleResponse>({
      query: QUERY,
      variables: { id: slug },
    });

    if (error) return { post: null, error: error.message };

    return { post: data.post, error: null };
  } catch (error) {
    if (error instanceof ApolloError) {
      console.error(error.cause);
      return { post: null, error: error.message };
    }
    return {
      post: null,
      error: 'Unknown error occoured while fetching wordpress post, contact site admin',
    };
  }
}
