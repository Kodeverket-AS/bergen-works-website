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
      }[];
    };
  };
}
