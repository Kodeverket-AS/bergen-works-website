import { gql } from "@apollo/client";

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
    }
  }
`;
