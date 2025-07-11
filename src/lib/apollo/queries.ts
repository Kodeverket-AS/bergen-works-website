import { gql } from "@apollo/client";

// todo: pagination
export const GET_ALL_WORDPRESS_POST_DETAILS = gql`
  query PostDetails($first: Int!, $after: String) {
    posts(first: $first, after: $after, where: { status: PUBLISH }) {
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
  query GetCategories {
    categories {
      nodes {
        id
        name
      }
    }
  }
`;

export const QUERY_WORDPRESS_POSTS_BY_CATEGORY = gql`
  query GetPostsByCategories($first: Int!, $after: String, $categorySlug: String) {
    posts(first: $first, after: $after, where: { categoryName: "$categorySlug", status: PUBLISH }) {
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
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

export const QUERY_WORDPRESS_TAGS = gql`
  query GetTags {
    tags {
      nodes {
        id
        name
      }
    }
  }
`;
