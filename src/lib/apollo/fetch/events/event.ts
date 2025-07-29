'use server';

import { type WpEventResponse } from '@/types/apollo/events.types';
import { ApolloError, gql } from '@apollo/client';
import apolloClient from '@/lib/apollo/client';

const QUERY = gql`
  query event($id: ID = "") {
    event(id: $id, idType: SLUG) {
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
        cost
        url
        venue {
          address
          city
          country
          zip
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

export async function wpFetchEvent(slug: string) {
  try {
    const response = await apolloClient.query<WpEventResponse>({
      query: QUERY,
      variables: { id: slug },
    });

    if (response.error) return { event: null, error: response.error.message };

    return { event: response.data.event, error: null };
  } catch (error) {
    // Construct error message based on error type
    const errorMessage =
      error instanceof ApolloError
        ? error.message
        : 'Unknown error occoured while fetching wordpress event, contact site admin';
    return { event: null, error: errorMessage };
  }
}
