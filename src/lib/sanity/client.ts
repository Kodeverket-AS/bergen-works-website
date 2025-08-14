import { type QueryParams } from 'sanity';
import { type SanityImageSource } from '@sanity/image-url/lib/types/types';
import { ClientConfig, createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

// Client configuration setup
const clientConfig: ClientConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-11-04',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'development',
  useCdn: true,
};

// Initialize sanity client
export const sanityClient = createClient(clientConfig);

// Initialize sanity image url builder
export const sanityBuilder = imageUrlBuilder(sanityClient);

/**
 * Helper function for generating valid image urls that we can use with next image
 * @param source sanity image object
 * @returns url location for given resource, handles both cdn and no cache states
 */
export function urlFor(source: SanityImageSource) {
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
