import { gql } from "@apollo/client";
import apolloClient from "./client";
import {
  GET_ALL_WORDPRESS_POST_DETAILS,
  GET_ALL_WORDPRESS_POSTS,
  GET_WORDPRESS_POST,
} from "./queries";
import { WordpressPostsResponse } from "@/types/apollo/response.types";

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
        const categories = post.categories.nodes.map((category) =>
          category.name.toLocaleLowerCase()
        );
        const tags = post.tags.nodes.map((tag) =>
          tag.name.toLocaleLowerCase().replace("#", "")
        );
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
    const { data } = await apolloClient.query({
      query: GET_WORDPRESS_POST,
      variables: { id: slug },
    });

    if (data.post?.content) {
      return data.post.content as string;
    }
  } catch (err) {
    console.log(err);
  }
}
