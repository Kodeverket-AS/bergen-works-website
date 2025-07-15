import { ApolloError } from "@apollo/client";

interface PageInfo {
  __typename: string;
  endCursor: string;
  hasNextPage: boolean;
}

interface Node<T> {
  node: T | undefined;
}
interface Nodes<T> {
  nodes: T[];
}
interface WordpressTags {
  id: string;
  slug: string;
  name: string;
}

interface WordpressCategories {
  id: string;
  slug: string;
  name: string;
}

interface WordpressImage {
  sourceUrl: string;
  altText: string;
}

interface WordpressResponse {
  pageInfo?: PageInfo;
  error?: ApolloError["cause"] | string;
}

// todo: perhaps we can extract metadata?

export interface WordpressPost {
  __typename: "Post";
  slug: string;
  status: "published" | "private";
  title: string;
  uri: string;
  date: Date;
  modified: Date;
  isSticky: boolean;
  excerpt?: string;
  content?: string;
  contentStyles?: string;
  categories: Nodes<WordpressCategories>;
  tags: Nodes<WordpressTags>;
  featuredImage: Node<WordpressImage>;
}

export interface WordpressPostResponse extends WordpressResponse {
  post: WordpressPost | null;
}

export interface WordpressPostResult extends WordpressResponse {
  post: WordpressPost | null;
}

export interface WordpressPostsResponse extends WordpressResponse {
  posts: Nodes<WordpressPost>;
}

export interface WordpressPostsResult extends WordpressResponse {
  posts: WordpressPost[];
}

export interface WordpressPostsResponse1 {
  data: {
    posts: {
      nodes: {
        __typename: "Post";
        slug: string;
        status: "published" | "private";
        title: string;
        uri: string;
        date: Date;
        modified: Date;
        excerpt: string;
        categories: {
          nodes: {
            name: string;
          }[];
        };
        tags: {
          nodes: {
            name: string;
          }[];
        };
        isSticky: boolean;
        featuredImage: {
          node: {
            sourceUrl: string;
            altText: string;
          };
        };
      }[];
      pageInfo: PageInfo;
    };
  };
}

export interface WordpressPostResponse1 {
  data: {
    post: {
      title: string;
      slug: string;
      content: string;
      contentStyles?: string;
      featuredImage: {
        node: {
          sourceUrl: string;
          altText: string;
        };
      };
    };
  };
}

export interface WordpressPostsURIResponse {
  posts: {
    nodes: {
      __typename: "Post";
      uri: string;
    }[];
    pageInfo: {
      __typename: string;
      endCursor: string;
      hasNextPage: boolean;
    };
  };
}

export interface WordpressCategoriesResponse {
  categories: {
    nodes: {
      id: string;
      name: string;
    }[];
  };
}

export interface WordpressTagsResponse {
  tags: {
    nodes: {
      id: string;
      name: string;
    }[];
  };
}
