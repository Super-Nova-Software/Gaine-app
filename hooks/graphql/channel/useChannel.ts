import { useEffect, useMemo } from "react";
import { useQuery } from "@apollo/client";
import { GET_CHANNEL } from "@/graphql/queries/channel";
import { ChannelType } from "@/graphql/gql/graphql";

export const useChannel = (channelId: string) => {
  const { data, loading, error, refetch } = useQuery(GET_CHANNEL, {
    variables: { id: channelId },
  });

  useEffect(() => {
    if (error) {
      console.error("Error fetching channel data:", error);
    }
  }, [error]);

  const channel: ChannelType | undefined = data?.channel;
  const server = useMemo(() => channel?.server, [channel]);

  return {
    channel,
    server,
    loading,
    error,
    refetch,
  };
};
