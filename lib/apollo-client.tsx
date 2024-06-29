import { ApolloClient, InMemoryCache, ApolloLink, HttpLink } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import { createUploadLink } from "apollo-upload-client";

export const { getClient } = registerApolloClient(() => {
  const httpLink = new HttpLink({
    uri: "http://127.0.0.1:8000/graphql/",
  });

  const uploadLink = createUploadLink({
    uri: "http://127.0.0.1:8000/graphql/", // Replace with your GraphQL endpoint
  });

  // Using ApolloLink.split to differentiate between HTTP requests and file uploads
  const link = ApolloLink.split(
    // Split based on whether the request is a file upload
    (operation) => {
      const context = operation.getContext();
      return context.hasUpload;
    },
    uploadLink,
    httpLink
  );

  return new ApolloClient({
    cache: new InMemoryCache(),
    link,
  });
});
