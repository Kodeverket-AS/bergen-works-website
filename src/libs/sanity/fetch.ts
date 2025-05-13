import { Article } from "@/types/sanity/sanity.types";
import { sanityFetch } from "./client";

/**
 * Function fetches all articles available from sanity
 * @returns array of articles
 */
export async function getArticles() {
  try {
    const QUERY = `*[_type == "article"]`;
    const result: Article[] = await sanityFetch({
      query: QUERY,
      tags: ["article"],
    });
    return result;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export async function getArticle(slug: string) {
  try {
    if (typeof slug !== "string") return null;
    const result: Article = await sanityFetch({
      query: `*[_type == "article" && slug.current == "${slug}"][0]`,
      tags: ["all", "articles"],
    });
    return result;
  } catch (err) {
    console.log(err);
    return null;
  }
}
