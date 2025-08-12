'use server';

import { type WpEvent, type WpEventsResponse } from '@/types/apollo/events.types';
import { gql } from '@apollo/client';
import { getApolloClient } from '@/lib/apollo/server/client';
import { isValidDateString } from '@/utils/dates';

const QUERY = gql`
  query events($first: Int = 100, $after: String = null, $startDate: String!, $endDate: String!) {
    events(first: $first, after: $after, where: { runsBetween: { start: $startDate, end: $endDate } }) {
      nodes {
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
      pageInfo {
        __typename
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;

interface WpQueryOptions {
  first?: number;
  after?: string | null;
  startDate: string;
  endDate: string;
}

export async function wpFetchEventsByDateRangeServer(
  queryOptions: WpQueryOptions
): Promise<{ events: WpEvent[]; error: string | null }> {
  // Deconstruct params
  const { first = 100, after = null, endDate, startDate } = queryOptions;

  if (!isValidDateString(startDate) || !isValidDateString(endDate))
    return {
      events: [],
      error: 'Invalid date strings',
    };

  // Add time-out check for query
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12_000);

  try {
    const client = getApolloClient();
    const { data, errors } = await client.query<WpEventsResponse>({
      query: QUERY,
      variables: { first, after, startDate, endDate },
      context: {
        fetchOptions: {
          next: {
            tags: ['events', 'wordpress'],
          },
        },
      },
    });

    // Handle errors
    if (errors?.length) {
      console.error('[wpFetchEventsByDateRangeServer] Failed to fetch event:', { errors });
      return { events: [], error: 'GraphQL response error' };
    }

    return { events: data.events?.nodes || [], error: null };
  } catch (error) {
    // Log full error server-side for debugging
    console.error('[wpFetchEventsByDateRangeServer] GraphQl error:', { error });

    // Request timed out
    if (error instanceof DOMException && error.name === 'AbortError') {
      return { events: [], error: 'GraphQL request timed out' };
    }

    // Unkonw error
    return { events: [], error: 'Unknown error occoured while fetching wordpress event, contact site admin.' };
  } finally {
    clearTimeout(timeout);
  }
}
