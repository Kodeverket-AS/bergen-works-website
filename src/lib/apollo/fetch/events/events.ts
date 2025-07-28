import { ApolloError, gql } from '@apollo/client';
import apolloClient from '../../client';
import { WpEvent, WpEvents, WpEventsResponse } from '@/types/apollo/events.types';

const QUERY = gql`
  query Events {
    events {
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

export async function wpFetchEvents() {
  try {
    const response = await apolloClient.query<WpEventsResponse>({
      query: QUERY,
      variables: {},
    });

    console.log(response.data.events.pageInfo);
  } catch (error) {
    if (error instanceof ApolloError) {
      console.error(error.cause);
      return { events: [], error: error.cause };
    }
    return {
      events: [],
      error: 'Unknown error occoured while fetching wordpress categories, contact site admin',
    };
  }
}
