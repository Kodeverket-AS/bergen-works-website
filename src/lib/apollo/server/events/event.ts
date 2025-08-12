'use server';

import { type WpEvent, type WpEventResponse } from '@/types/apollo/events.types';
import { gql } from '@apollo/client';
import { getApolloClient } from '@/lib/apollo/server/client';
import { isValidSlug } from '@/utils/validation/url';

const QUERY = gql`
  query event($id: ID!) {
    event(id: $id, idType: SLUG) {
      id
      slug
      title
      content
      excerpt
      url
      cost
      hideFromUpcoming
      featured
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      modified
      showMap
      date
      startDate
      endDate
      duration
      allDay
      eventsCategories {
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
      venue {
        title
        address
        city
        country
        zip
        content
        excerpt
        url
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
      organizers {
        nodes {
          title
          slug
          content
          excerpt
          phone
          email
          website
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  }
`;

export async function wpFetchEventServer(slug: string): Promise<{ event: WpEvent | null; error: string | null }> {
  if (!slug || !isValidSlug(slug)) {
    return { event: null, error: 'Invalid slug' };
  }

  // Add time-out check for query
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12_000);

  try {
    const client = getApolloClient();
    const { data, errors } = await client.query<WpEventResponse>({
      query: QUERY,
      variables: { id: slug },
      context: {
        fetchOptions: {
          signal: controller.signal,
          next: {
            tags: [`event:${slug}`, 'events', 'wordpress'],
          },
        },
      },
    });

    // Handle errors
    if (errors?.length) {
      console.error('[wpFetchEventServer] Failed to fetch event:', { errors });
      return { event: null, error: 'GraphQL response error' };
    }

    // Handle empty results
    if (!data?.event) {
      return { event: null, error: `Event doesn't exist` };
    }

    // Return result
    return { event: data.event, error: null };
  } catch (error) {
    // Log full error server-side for debugging
    console.error('[wpFetchEventServer] GraphQl error:', { error });

    // Request timed out
    if (error instanceof DOMException && error.name === 'AbortError') {
      return { event: null, error: 'GraphQL request timed out' };
    }

    // Unkonw error
    return { event: null, error: 'Unknown error occoured while fetching wordpress event, contact site admin.' };
  } finally {
    clearTimeout(timeout);
  }
}
