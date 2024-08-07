"use client";

import { useEffect, useState } from "react";

// import { EditServerModal } from "@/components/modals/edit-server-modal";
import { InviteModal } from "@/components/modals/invite-modal";
import { CreateServerModal } from "@/components/modals/create-server-modal";
import { CreateChannelModal } from "@/components/modals/create-channel-modal";

import { MembersModal } from "@/components/modals/members-modal";

// import { LeaveServerModal } from "@/components/modals/leave-server-modal";
import { DeleteServerModal } from "@/components/modals/delete-server-modal";
import { DeleteChannelModal } from "@/components/modals/delete-channel-modal";
import { CreateCategoryModal } from "@/components/modals/create-category-modal";
import { ChooseFilesModal } from "../modals/choose_files";
import { CreateServerRoleModal } from "@/components/modals/create-server-role-modal";
// import { EditChannelModal } from "@/components/modals/edit-channel-modal";
// import { MessageFileModal } from "@/components/modals/message-file-modal";
import { DeleteMessageModal } from "@/components/modals/delete-message-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CreateServerModal />
      <InviteModal />
      <ChooseFilesModal />
      <CreateServerRoleModal />
      {/* <EditServerModal /> */}
      <MembersModal />
      <CreateChannelModal />
      <CreateCategoryModal />
      {/* <LeaveServerModal /> */}
      <DeleteServerModal />
      <DeleteChannelModal />
      {/* <EditChannelModal /> */}
      {/* <MessageFileModal /> */}
      <DeleteMessageModal />
    </>
  )
}