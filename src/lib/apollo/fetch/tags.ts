import { type WordpressTagsResponse, type WordpressTagsResult } from "@/types/apollo/response.types";
import { ApolloError, gql } from "@apollo/client";
import apolloClient from "@/lib/apollo/client";

const QUERY = gql`
  query GetTags {
    tags(first: 100) {
      nodes {
        id
        name
        slug
      }
    }
  }
`;

export async function wpFetchTags(): Promise<WordpressTagsResult> {
  try {
    const response = await apolloClient.query<WordpressTagsResponse>({
      query: QUERY,
    });

    // If fetch fails, return response as this helps ssg error handling
    if (response?.error) return { tags: [], error: response.error.cause };

    // Gather necessary datasets
    const tags = response.data.tags.nodes;
    const error = response.error?.cause;

    return { tags, error };
  } catch (error) {
    if (error instanceof ApolloError) {
      console.error(error.cause);
      return { tags: [], error: error.cause };
    }
    return { tags: [], error: "Unknown error occoured while fetching wordpress post, contact site admin" };
  }
}

// todo - remove dummy data
export const availableTags = [
  {
    name: "#april",
    slug: "april",
    id: "dGVybTo3Mw==",
  },
  {
    name: "#bergenworks",
    slug: "bergenworks-2",
    id: "dGVybTo3Nw==",
  },
  {
    name: "#coworking",
    slug: "coworking-2",
    id: "dGVybTo3OA==",
  },
  {
    name: "#felelskap",
    slug: "felelskap",
    id: "dGVybTo3OQ==",
  },
  {
    name: "#felleskap",
    slug: "felleskap-2",
    id: "dGVybTo4MA==",
  },
  {
    name: "#lunsjmøte",
    slug: "lunsjmote-2",
    id: "dGVybTo3NQ==",
  },
  {
    name: "#markedsføring",
    slug: "markedsforing",
    id: "dGVybTo3Ng==",
  },
  {
    name: "#oppsummering",
    slug: "oppsummering",
    id: "dGVybTo3NA==",
  },
  {
    name: "afterwork",
    slug: "afterwork",
    id: "dGVybTo1NA==",
  },
  {
    name: "bærekraft",
    slug: "baerekraft",
    id: "dGVybTo5",
  },
];
