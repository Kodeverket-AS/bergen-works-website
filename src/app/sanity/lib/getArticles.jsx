import { client } from "@/app/sanity/lib/client";

/**
 * Fetches articles from Sanity CMS.
 * If a limit is passed, it returns only the latest `limit` articles.
 * If no limit is passed, it returns all articles.
 */
export const getArticles = async (limit) => {
  const baseQuery = `*[_type == "article"] | order(releaseDate desc)`;
  const range = typeof limit === "number" ? `[0...${limit}]` : "";

  const query = `
    ${baseQuery}${range} {
      _id, 
      title, 
      articleBody[] {
        ..., 
        _type == "image" => {
          asset -> { url },
          alt
        }
      }, 
      background { asset -> { url } }, 
      releaseDate, 
      author, 
      category, 
      tags, 
      images[] {
        asset -> { url },
        alt
      }
    }
  `;
  
  const data = await client.fetch(query);
  return data || [];
};
