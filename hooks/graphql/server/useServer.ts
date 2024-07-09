import { useEffect, useMemo } from "react";
import { useQuery } from "@apollo/client";
import { GET_SERVER } from "@/graphql/queries/server";
import { ServerType, ChannelType, MemberType, ServerRoleType, PermissionType } from "@/graphql/gql/graphql";
import { userId } from "@/data/user";

export const useServer = (serverId: string) => {
  const { data, loading, error, refetch } = useQuery(GET_SERVER, {
    variables: { id: serverId },
  });

  useEffect(() => {
    if (error) {
      console.error("Error fetching server data:", error);
    }
  }, [error]);

  const server: ServerType | undefined = data?.server;
  const channels: ChannelType[] = useMemo(() => server?.channelSet || [], [server]);
  const members: MemberType[] = server?.members || [];

  const currentUserMember = members.find(member => member.user?.id === userId);
  const role: ServerRoleType | undefined = currentUserMember?.roles[0];
  const permissions: PermissionType[] = role?.permissions || [];

  const channelsByCategory = useMemo(() => {
    const groupedChannels: { [key: string]: ChannelType[] } = {};
    channels.forEach((channel) => {
      const category = channel.category?.name || channel.channelType;
      if (!groupedChannels[category]) {
        groupedChannels[category] = [];
      }
      groupedChannels[category].push(channel);
    });
    return groupedChannels;
  }, [channels]);

  return {
    server,
    channels,
    members,
    role: role?.name || "GUEST",
    permissions,
    loading,
    error,
    refetch,
    channelsByCategory,
  };
};