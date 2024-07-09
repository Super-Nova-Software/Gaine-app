import { ApolloClient, ApolloLink, HttpLink, InMemoryCache, split } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { createUploadLink } from 'apollo-upload-client';
import { onError } from "@apollo/client/link/error";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

// HTTP connection to the API
const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URI || 'http://localhost:8000/graphql', // Replace with your GraphQL HTTP endpoint
});

// Upload link for file uploads
const uploadLink = createUploadLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URI || 'http://localhost:8000/graphql', // Replace with your GraphQL HTTP endpoint
});

// Error handling for GraphQL and network errors
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      );
    });
  }
  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
  }
});

// WebSocket connection to the API
const wsLink = process.browser ? new WebSocketLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_WS_URI || 'ws://localhost:8000/graphql', // Replace with your GraphQL WebSocket endpoint
  options: {
    reconnect: true,
  },
}) : null;

// Split links based on operation type (query, mutation, subscription)
const splitLink = process.browser ? split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink!,
  ApolloLink.from([errorLink, uploadLink])
) : httpLink;

// Register Apollo Client instance
export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: splitLink,
  });
});
