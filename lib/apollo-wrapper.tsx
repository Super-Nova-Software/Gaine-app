"use client";

import {
  ApolloLink,
  HttpLink,
} from "@apollo/client";
import {
  ApolloNextAppProvider,
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";

import { createUploadLink } from "apollo-upload-client";

function makeClient() {
  const httpLink = new HttpLink({
    uri: "http://127.0.0.1:8000/graphql/",
  });

  const uploadLink = createUploadLink({
    uri: 'http://127.0.0.1:8000/graphql/',
  });

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: typeof window === "undefined"
      ? ApolloLink.from([
          new SSRMultipartLink({
            stripDefer: true,
          }),
          uploadLink,
          httpLink,
        ])
      : uploadLink,  // Use uploadLink directly for client-side rendering
  });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
