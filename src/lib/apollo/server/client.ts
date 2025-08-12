'server only';

import { ApolloClient, HttpLink, InMemoryCache, type NormalizedCacheObject } from '@apollo/client';
import { relayStylePagination } from '@apollo/client/utilities';

export function getApolloClient(): ApolloClient<NormalizedCacheObject> {
  return new ApolloClient({
    ssrMode: true,
    link: new HttpLink({
      uri: process.env.WORDPRESS_GRAPHQL_URL!,
    }),
    cache: new InMemoryCache({
      typePolicies: {
        RootQuery: {
          fields: {
            events: relayStylePagination(['where']),
            posts: relayStylePagination(['where']),
            tags: relayStylePagination(['where']),
          },
        },
      },
    }),
  });
}
