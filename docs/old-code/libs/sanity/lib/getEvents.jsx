import { client } from "@/app/sanity/lib/client";

export const getEvents = async () => {
  const query = `
    *[_type == "event"] | order(date asc){
      _id,
      title,
      description,
      date,
      location,
      image {
        asset -> {
          url
        }
      },
        url,
    }
  `;

  const data = await client.fetch(query);
  return data || [];
};
