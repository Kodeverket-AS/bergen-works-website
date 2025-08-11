'use server';

import { type WpEvent, type WpEventsResponse } from '@/types/apollo/events.types';
import { ApolloQueryResult, gql } from '@apollo/client';
import { getApolloClient } from '@/lib/apollo/server/client';

const QUERY = gql`
  query events($first: Int!, $after: String) {
    events(first: $first, after: $after) {
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

export async function wpFetchEventsServer({ first = 100 } = {}): Promise<{ events: WpEvent[]; error: string | null }> {
  // Add time-out check for query
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12_000);

  try {
    // Init client
    const client = getApolloClient();

    // Start with empty event list
    const events: WpEvent[] = [];

    // Graphql pagination helper variables
    let after: string | null = null;
    let hasNextPage: boolean = true;

    // Cap to avoid infinite loops if server sends weird cursors
    const MAX_PAGES = 100;
    let pageCount = 0;

    // Keep track of graphql error
    let error: string | null = null;

    while (hasNextPage && pageCount < MAX_PAGES) {
      const response: ApolloQueryResult<WpEventsResponse> = await client.query({
        query: QUERY,
        variables: { first, after },
        context: {
          fetchOptions: {
            next: {
              signal: controller.signal,
              tags: ['events', 'wordpress'],
            },
          },
        },
      });

      if (response?.errors) {
        console.error('[wpFetchEventServer] Failed to fetch event:', { errors: response.errors });
        error = 'GraphQL response error';
        break;
      }

      // Fix for edge case null return
      if (!response.data.events) break;

      // Push events to collection
      events.push(...response.data.events.nodes.map((event) => event));

      // Update pagination helpers
      after = response.data.events.pageInfo?.endCursor ?? null;
      hasNextPage = Boolean(response.data.events.pageInfo?.hasNextPage);
      pageCount++;
    }

    return { events, error };
  } catch (error) {
    // Log full error server-side for debugging
    console.error('[wpFetchEventsServer] GraphQl error:', { error });

    // Request timed out
    if (error instanceof DOMException && error.name === 'AbortError') {
      return { events: [], error: 'GraphQL request timed out' };
    }

    // Unkonw error
    return { events: [], error: 'Unknown error occoured while fetching wordpress events, contact site admin.' };
  } finally {
    clearTimeout(timeout);
  }
}
