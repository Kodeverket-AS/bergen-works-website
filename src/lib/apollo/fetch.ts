import apolloClient from "./client";
import { GET_ALL_WORDPRESS_POSTS, GET_WORDPRESS_POST } from "./queries";

export async function getWordpressArticleSlugs() {
  try {
    const { data } = await apolloClient.query({ query: GET_ALL_WORDPRESS_POSTS });

    if (data.posts?.nodes) {
      return data.posts.nodes as { slug: string; title: string }[];
    }
  } catch (err) {
    console.log(err);
  }
}

export async function getWordpressArticle(slug: string) {
  try {
    const { data } = await apolloClient.query({ query: GET_WORDPRESS_POST, variables: { id: slug } });

    if (data.post?.content) {
      return data.post.content as string;
    }
  } catch (err) {
    console.log(err);
  }
}
