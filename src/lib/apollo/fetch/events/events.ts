import { WpEvent, type WpEventsResponse } from '@/types/apollo/events.types';
import { ApolloError, ApolloQueryResult, gql } from '@apollo/client';
import apolloClient from '@/lib/apollo/client';

const QUERY = gql`
  query events($first: Int!, $after: String) {
    events(first: $first, after: $after) {
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

export async function wpFetchEvents({ first = 100 } = {}) {
  try {
    // Start with empty event list
    const events: WpEvent[] = [];

    // Graphql pagination helper variables
    let after: string | null = null;
    let hasNextPage: boolean = true;

    // Keep track of graphql error
    let error: string | null = null;

    while (hasNextPage) {
      const response: ApolloQueryResult<WpEventsResponse> = await apolloClient.query({
        query: QUERY,
        variables: { first, after },
      });

      if (response.error) {
        error = response.error.message;
        break;
      }

      // Fix for edge case null return
      if (!response.data.events) break;

      // Deconstruct response
      const nodes = response.data.events.nodes;
      const pageInfo = response.data.events.pageInfo;

      // Push events to collection
      events.push(...nodes.map((event) => event));

      // Update pagination helpers
      after = pageInfo?.endCursor ?? null;
      hasNextPage = Boolean(pageInfo?.hasNextPage);
    }

    return { events, error };
  } catch (error) {
    const errorMessage =
      error instanceof ApolloError
        ? error.message
        : 'Unknown error occoured while fetching wordpress post, contact site admin';
    return { events: [], error: errorMessage };
  }
}
