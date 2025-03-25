"use server";

import { createClient, QueryParams } from "@sanity/client";

// Sanity client init
export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_ID,
  dataset: "production",
  useCdn: false,
  apiVersion: "2025-02-06",
});

// Sanity fetch fn, doc wip
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
  });
}
