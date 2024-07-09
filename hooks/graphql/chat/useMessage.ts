import { useQuery } from "@apollo/client";
import { GET_MESSAGES_BY_CHANNEL } from "@/graphql/queries/messages";


export const useMessages = (channelId: string) => {
    const { data, loading, error } = useQuery(GET_MESSAGES_BY_CHANNEL, {
      variables: { channelId },
    });
  
    return {
      messages: data?.messagesByChannel,
      loading,
      error,
    };
  };
