'use server';

import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const apolloClientServer = new ApolloClient({
  ssrMode: true,
  link: createHttpLink({
    uri: process.env.WORDPRESS_GRAPHQL_URL,
  }),
  cache: new InMemoryCache(),
});

export default apolloClientServer;
