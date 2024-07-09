import { useState } from "react";

import { useMutation } from "@apollo/client";

import { ServerType } from "@/graphql/gql/graphql";
import { CHANGE_ROLE, KICK_MEMBER } from "@/graphql/mutation/member";

export const useMembersModal = () => {
  const [server, setServer] = useState<ServerType | null>(null);
  const [loadingId, setLoadingId] = useState<string>("");

  const [kickMemberMutation] = useMutation(KICK_MEMBER);
  const [changeRoleMutation] = useMutation(CHANGE_ROLE);



  const onKick = async (memberId: number) => {
    setLoadingId(memberId.toString());
    try {
      await kickMemberMutation({ variables: { memberId } });

      if (server) {
        const updatedMembers = server.memberSet.filter(
          (member) => member.id !== memberId
        );
        setServer({ ...server, members: updatedMembers });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingId("");
    }
  };

  const onRoleChange = async (memberId: number, roleId: number) => {
    setLoadingId(memberId.toString());
    try {
      await changeRoleMutation({ variables: { memberId, roleId } });

      if (server) {
        const updatedMembers = server.members.map((member) =>
          member.id === memberId ? { ...member, roleId } : member
        );
        setServer({ ...server, members: updatedMembers });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingId("");
    }
  };

  return {
    server,
    loadingId,
    onKick,
    onRoleChange,
  };
};
