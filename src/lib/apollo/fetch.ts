import { type ApolloQueryResult } from "@apollo/client";
import {
  type WordpressPostsURIResponse,
  type WordpressPostResponse,
  type WordpressPostsResponse,
} from "@/types/apollo/response.types";
import { GET_ALL_WORDPRESS_POST_DETAILS, GET_WORDPRESS_POST, GET_WORDPRESS_POSTS_URI } from "./queries";
import apolloClient from "./client";

export async function getAllWordpressPostDetails() {
  try {
    const response: WordpressPostsResponse = await apolloClient.query({
      query: GET_ALL_WORDPRESS_POST_DETAILS,
    });

    // Response might be undefined if env is missing or graphql is unavailable
    if (!response) return;

    // Start proccessing response
    const { data } = response;
    const posts =
      data.posts?.nodes.map((post) => {
        const categories = post.categories.nodes.map((category) => category.name.toLocaleLowerCase());
        const tags = post.tags.nodes.map((tag) => tag.name.toLocaleLowerCase().replace("#", ""));
        return { ...post, tags, categories };
      }) || [];

    return posts;
  } catch (err) {
    console.log(err);
  }
}

export async function getWordpressArticleSlugs() {
  try {
    /* const { data } = await apolloClient.query({
      query: GET_ALL_WORDPRESS_POSTS,
    });

    if (data.posts?.nodes) {
      return data.posts.nodes as { slug: string; title: string }[];
    } */
  } catch (err) {
    console.log(err);
  }
}

export async function getWordpressArticle(slug: string) {
  try {
    const response: unknown = await apolloClient.query({
      query: GET_WORDPRESS_POST,
      variables: { id: slug },
    });

    if (!response) {
      throw new Error("Something went wrong when fetching graphql");
    }

    const { data } = response as WordpressPostResponse;

    return data.post;
  } catch (err) {
    console.log(err);
  }
}

/**
 * Fetches all published WordPress post URIs using GraphQL with pagination.
 *
 * WordPress limits GraphQL queries to a maximum of 100 items per batch,
 * so `limit` defaults to 100 to retrieve as many as possible per request.
 * The function continues paginating until all post URIs are collected.
 *
 * URIs are normalized by removing leading and trailing slashes.
 *
 * @param {number} [limit=100] - The number of posts to fetch per page (max 100 due to WordPress limits).
 * @returns {Promise<string[]>} A promise that resolves to an array of normalized post URIs.
 */
export async function getWordpressPostsURIs(limit = 100) {
  // Array of available post URI
  const postURIs: string[] = [];

  // Pagination helpers
  let hasNextPage: boolean = true;
  let afterCursor: string | null = null;

  while (hasNextPage) {
    const response: ApolloQueryResult<WordpressPostsURIResponse> = await apolloClient.query({
      query: GET_WORDPRESS_POSTS_URI,
      variables: { first: limit, after: afterCursor },
    });

    // Response data deconstructed
    const nodes = response.data.posts.nodes;
    const pageInfo = response.data.posts.pageInfo;

    // Strip leading and trailing slashes and update uri output array
    postURIs.push(...nodes.map((node: { uri: string }) => node.uri.replace(/^\/|\/$/g, "")));

    // Update pagination helpers
    hasNextPage = pageInfo.hasNextPage;
    afterCursor = pageInfo.endCursor;
  }

  return postURIs;
}
