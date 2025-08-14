'use server';

import { type WpArticleResponse, type WpPost } from '@/types/apollo/articles.types';
import { gql } from '@apollo/client';
import { getApolloClient } from '@/lib/apollo/server/client';
import { isValidSlug } from '@/utils/validation/url';

const QUERY = gql`
  query post($id: ID!) {
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
export async function wpFetchPostServer(slug: string): Promise<{ post: WpPost | null; error: string | null }> {
  if (!slug || !isValidSlug(slug)) {
    return { post: null, error: 'Invalid slug' };
  }

  // Add time-out check for query
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12_000);

  try {
    const client = getApolloClient();
    const { data, errors } = await client.query<WpArticleResponse>({
      query: QUERY,
      variables: { id: slug },
      context: {
        fetchOptions: {
          signal: controller.signal,
          next: {
            tags: [`post:${slug}`, 'posts', 'wordpress'],
          },
        },
      },
    });

    // Handle errors
    if (errors?.length) {
      console.error('[wpFetchPostServer] Failed to fetch post:', { errors });
      return { post: null, error: 'GraphQL response error' };
    }

    // Handle empty results
    if (!data?.post) {
      return { post: null, error: `Post doesn't exist` };
    }

    // Return result
    return { post: data.post, error: null };
  } catch (error) {
    // Log full error server-side for debugging
    console.error('[wpFetchPostServer] GraphQl error:', { error });

    // Request timed out
    if (error instanceof DOMException && error.name === 'AbortError') {
      return { post: null, error: 'GraphQL request timed out' };
    }

    // Unkonw error
    return { post: null, error: 'Unknown error occoured while fetching wordpress post, contact site admin.' };
  } finally {
    clearTimeout(timeout);
  }
}
