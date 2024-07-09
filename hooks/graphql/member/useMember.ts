import { useEffect, useMemo } from "react";
import { useQuery } from "@apollo/client";

import { MemberType, PermissionType } from "@/graphql/gql/graphql";
import { GET_MEMBER } from "@/graphql/queries/server";

export const useMember = (serverId: string, userId: string) => {
  const { data, loading, error, refetch } = useQuery(GET_MEMBER, {
    variables: { serverId, userId },
  });

  useEffect(() => {
    if (error) {
      console.error("Error fetching member data:", error);
    }
  }, [error]);

  const member: MemberType | undefined = data?.member;
  const roles = useMemo(() => member?.roles || [], [member]);

  const permissions = useMemo(() => {
    if (!member || !member.roles) return [];

    return member.roles.reduce((acc: PermissionType[], role) => {
      return [...acc, ...role.permissions];
    }, []);
  }, [member]);

  return {
    member,
    roles,
    permissions,
    loading,
    error,
    refetch,
  };
};
