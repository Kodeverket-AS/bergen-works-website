export interface WordpressPostsResponse {
  data: {
    posts: {
      nodes: {
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
