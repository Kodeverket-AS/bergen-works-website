import { type WpEventResponse } from '@/types/apollo/events.types';
import { ApolloError, gql } from '@apollo/client';
import apolloClient from '@/lib/apollo/client';

const QUERY = gql`
  query event($id: ID = "") {
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
      duration
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
