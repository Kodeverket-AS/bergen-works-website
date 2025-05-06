import { ClientConfig, createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

// Client configuration setup
const clientConfig: ClientConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-11-04",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "development",
};

// Initialize sanity client
export const sanityClient = createClient(clientConfig);

// Initialize sanity image url builder
export const sanityBuilder = imageUrlBuilder(sanityClient);
