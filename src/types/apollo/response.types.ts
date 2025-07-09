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
