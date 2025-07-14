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

export interface WordpressResponse<Key extends string, T> {
  data: {
    [K in Key]: T;
  };
}
export interface WordpressPost {
  __typename: "Post";
  slug: string;
  status: "published" | "private";
  title: string;
  uri: string;
  date: Date;
  modified: Date;
  excerpt: string;
  categories: Nodes<WordpressCategories>;
  tags: Nodes<WordpressTags>;
  isSticky: boolean;
  featuredImage: Node<WordpressImage>;
}

export interface WordpressPostsResponse {
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

export interface WordpressPostResponse {
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
