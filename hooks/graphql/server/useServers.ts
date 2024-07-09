import { useRouter } from "next/navigation";
import { useQuery } from "@apollo/client";
import { GET_USER_SERVERS } from "@/graphql/queries/server";

export const useServers = (userId: string) => {
  const router = useRouter();

  const { data, loading, error } = useQuery(GET_USER_SERVERS, {
    variables: { userId },
  });

  const servers = data?.userServers || [];

  const handleServerClick = (serverId: string) => {
    router.push(`/main/servers/${serverId}`);
  };

  return {
    loading,
    error,
    servers,
    handleServerClick,
  };
};
