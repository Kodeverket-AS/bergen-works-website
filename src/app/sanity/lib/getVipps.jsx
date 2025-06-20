import { client } from "@/app/sanity/lib/client";

export const getVipps = async () => {
  const query = `
    *[_type == "vippsCard"] | order(_createdAt desc){
      _id,
      serviceTitle,
      description,
      price {
        number,
        period,
        price
      },
      url
    }
  `;

  const data = await client.fetch(query);
  return data || [];
};
