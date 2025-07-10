import { gql } from "@apollo/client";

// todo: pagination
export const GET_ALL_WORDPRESS_POST_DETAILS = gql`
  query PostDetails {
    posts(where: { status: PUBLISH }) {
      nodes {
        slug
        status
        title
        uri
        modified
        excerpt
        categories {
          nodes {
            name
          }
        }
        tags {
          nodes {
            name
          }
        }
        isSticky
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;

export const GET_ALL_WORDPRESS_POSTS = gql`
  query {
    posts {
      nodes {
        id
        slug
        title
      }
    }
  }
`;

export const GET_WORDPRESS_POST = gql`
  query post($id: ID = "") {
    post(id: $id, idType: SLUG) {
      title
      slug
      content
      contentStyles
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
`;

export const GET_WORDPRESS_POSTS_URI = gql`
  query PostUris($first: Int!, $after: String) {
    posts(first: $first, after: $after, where: { status: PUBLISH }) {
      nodes {
        uri
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

export const QUERY_WORDPRESS_CATEGORIES = gql`
  query GetCategoryEdges {
    categories {
      nodes {
        id
        name
      }
    }
  }
`;
