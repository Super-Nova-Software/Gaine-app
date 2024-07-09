import { DocumentType } from '@/graphql/gql/graphql';
import { GET_DOCUMENT_BY_CHANNEL } from '@/graphql/queries/document';


import { useQuery } from "@apollo/client";

export const useDocument = (channelId: string) => {
  const { loading, error, data, refetch } = useQuery(GET_DOCUMENT_BY_CHANNEL, {
    variables: { channelId },
    onError: (err) => {
      console.error("Error fetching document:", err);
    },
  });
  const document: DocumentType | undefined = data?.documentByChannel;
  return {
    loading,
    error,
    document,
    refetch,
  };
};
