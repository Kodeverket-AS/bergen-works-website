'use server';

import { WpEvent, type WpEventsResponse } from '@/types/apollo/events.types';
import { ApolloError, gql } from '@apollo/client';
import { isValidDateString } from '@/utils/dates';
import apolloClient from '@/lib/apollo/client';

const QUERY = gql`
  query events($first: Int = 100, $after: String = null, $startDate: String!, $endDate: String!) {
    events(first: $first, after: $after, where: { runsBetween: { start: $startDate, end: $endDate } }) {
      nodes {
        title
        slug
        allDay
        excerpt
        date
        endDate
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
        featured
        featuredImage {
          node {
            uri
            altText
            description
            status
            caption
            mediaDetails {
              height
              width
            }
            sourceUrl
          }
        }
        hideFromUpcoming
        organizers {
          nodes {
            featuredImage {
              node {
                uri
                altText
              }
            }
            slug
            link
            title
            website
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

export async function wpFetchEventsByDateRange(
  queryOptions: WpQueryOptions
): Promise<{ events: WpEvent[]; error: string | null }> {
  try {
    const { first = 100, after = null, endDate, startDate } = queryOptions;

    if (!isValidDateString(startDate) || !isValidDateString(endDate))
      return {
        events: [],
        error: 'Invalid date strings',
      };

    const response = await apolloClient.query<WpEventsResponse>({
      query: QUERY,
      variables: { first, after, startDate, endDate },
    });

    if (response.error) return { events: [], error: response.error.message };

    return { events: response.data.events?.nodes || [], error: null };
  } catch (error) {
    // Construct error message based on error type
    const errorMessage =
      error instanceof ApolloError
        ? error.message
        : 'Unknown error occoured while fetching wordpress post, contact site admin';
    return { events: [], error: errorMessage };
  }
}
