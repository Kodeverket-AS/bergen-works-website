import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: process.env.WORDPRESS_GRAPHQL_URL,
  cache: new InMemoryCache(),
});

export default apolloClient;
