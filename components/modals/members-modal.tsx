import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { UserAvatar } from "@/components/user-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuTrigger,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";
import { ServerType } from "@/graphql/gql/graphql";
import {
  Check,
  Gavel,
  MoreVertical,
  ShieldQuestion,
} from "lucide-react";
import { useMembersModal } from "@/hooks/graphql/member/useMembersModal";
import { useModal } from "@/hooks/use-modal-store";

export const MembersModal = () => {
  const { isOpen, onClose, data,type } = useModal();
  const { onRoleChange, onKick } = useMembersModal();
  const isModalOpen = isOpen && type === "members";
  const { server } = data as { server: ServerType };

  if (!server || !server.members) {
    return null; // Render nothing if server or memberSet is undefined
  }

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="dark:bg-[#1E1F22] bg-white  overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Manage Members
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-500">
            {server.members.length} Members
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="mt-8 max-h-[420px] pr-6">
          {server.members.map((member) => (
            <div key={member.id} className="flex items-center gap-x-2 mb-6">
              <UserAvatar src={member.user?.avatar ? `http://127.0.0.1:8000/media/${member.user?.avatar}` : "/next.svg"} />
              <div className="flex flex-col gap-y-1">
                <div className="text-xs font-semibold flex items-center gap-x-1">
                  {member.user?.username}
                </div>
                <p className="text-xs text-zinc-500">{member.user?.username}</p>
              </div>
              <div className="ml-auto">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <MoreVertical className="h-4 w-4 text-zinc-500" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="left">
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger className="flex items-center">
                        <ShieldQuestion className="w-4 h-4 mr-2" />
                        <span>Role</span>
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                          {member.roles.map((role) => (
                            <DropdownMenuItem
                              key={role.id}
                              onClick={() => onRoleChange(member.id, role.id)}
                            >
                              {role.name}
                              {member.roles.some((r) => r.id === role.id) && (
                                <Check className="h-4 w-4 ml-auto" />
                              )}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => onKick(member.id)}>
                      <Gavel className="h-4 w-4 mr-2" />
                      Kick
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
