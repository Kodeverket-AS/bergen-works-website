import { client } from "@/app/sanity/lib/client";

export const getArticles = async () => {
  const query = `
    *[_type == "article"]{ 
      _id, 
      title, 
      articleBody[]{
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
      images[]{
        asset -> { url },
        alt
      } 
    }
  `;

  const data = await client.fetch(query);
  return data || [];
};
