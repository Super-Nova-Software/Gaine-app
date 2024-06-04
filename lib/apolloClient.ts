import { ApolloClient, InMemoryCache, split } from "@apollo/client";
import { HttpLink } from "@apollo/client/link/http";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";

const httpLink = new HttpLink({
  uri: 'http://localhost:8000/graphql',
});

const wsLink = process.browser ? new WebSocketLink({
  uri: `ws://localhost:8000/graphql`,
  options: {
    reconnect: true,
  },
}) : null;

const splitLink = process.browser
  ? split(
      ({ query }) => {
        const definition = getMainDefinition(query);
        return (
          definition.kind === "OperationDefinition" &&
          definition.operation === "subscription"
        );
      },
      wsLink || httpLink,
      httpLink
    )
  : httpLink;

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
