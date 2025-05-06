import { type SanityImageSource } from "@sanity/image-url/lib/types/types";
import { type QueryParams } from "sanity";
import { sanityBuilder, sanityClient } from "./client";
import { SanityDocument } from "next-sanity";
import { Article } from "@/types/sanity/sanity.types";

/**
 * Helper function for generating valid image urls that we can use with next image
 * @param source sanity image object
 * @returns url location for given resource, handles both cdn and no cache states
 */
export async function urlFor(source: SanityImageSource) {
  return sanityBuilder.image(source);
}

/**
 * Wrapper function for {@link sanityClient} that makes it easier to do Nextjs cache validations and other operations.
 * @param query GROQ query string for fetching relevant data
 * @param params Sanity GROQ specific parameters ({@link https://www.sanity.io/docs/groq-parameters|read more})
 * @param revalidate Time in seconds for data invalidation, defaults to false to force-store ({@link https://nextjs.org/docs/app/building-your-application/caching#revalidating-1|read more})
 * @param tags Array of tags that can be used to trigger cache invalidation later
 * @returns Data from query
 */
export async function sanityFetch<const QueryString extends string>({
  query,
  params = {},
  revalidate = false,
  tags = [],
}: {
  query: QueryString;
  params?: QueryParams;
  revalidate?: number | false;
  tags?: string[];
}) {
  return sanityClient.fetch(query, params, {
    next: {
      revalidate: tags.length ? false : revalidate,
      tags,
    },
    useCdn: false,
  });
}

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
