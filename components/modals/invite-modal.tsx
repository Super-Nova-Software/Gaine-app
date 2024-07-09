"use client";

import { Check, Copy, RefreshCw } from "lucide-react";
import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useModal } from "@/hooks/use-modal-store";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useOrigin } from "@/hooks/use-origin";
import { UserAvatar } from "../user-avatar";
import { ScrollArea } from "../ui/scroll-area";
import { useUserFriends } from "@/hooks/graphql/user/useuser";
import { userId } from "@/data/user";

export const InviteModal = () => {
  const { onOpen, isOpen, onClose, type, data } = useModal();
  const origin = useOrigin();

  const isModalOpen = isOpen && type === "invite";
  const { server } = data;
  const {loading, error ,friends} = useUserFriends(userId)
  console.log("friends : ", friends)
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const inviteUrl = `${origin}/invite/${server?.invites?.code}`;

  const onCopy = () => {
    navigator.clipboard.writeText(inviteUrl);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const onCreateinvite = async () => {
    // try {
    //   setIsLoading(true);
    //   const response = await axios.patch(`/api/servers/${server?.id}/invite-code`);

    //   onOpen("invite", { server: response.data });
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   setIsLoading(false);
    // }
  }

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Invite Friends
          </DialogTitle>
        </DialogHeader>
        <div className="p-6">
          <Label
            className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70"
          >
            Server invite link
          </Label>
          <div className="flex items-center mt-2 gap-x-2">
            <Input
              disabled={isLoading}
              className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
              value={inviteUrl}
            />
            <Button disabled={isLoading} onClick={onCopy} size="icon">
              {copied 
                ? <Check className="w-4 h-4" /> 
                : <Copy className="w-4 h-4" />
              }
            </Button>
          </div>
          <Button
            onClick={onCreateinvite}
            disabled={isLoading}
            variant="link"
            size="sm"
            className="text-xs text-zinc-500 mt-4"
          >
            Generate a invite link
            <RefreshCw className="w-4 h-4 ml-2" />
          </Button>
        </div>
        <ScrollArea className="mt-8 max-h-[420px] pr-6">
           {friends?.map(friend => (
            <div key={friend.id} className="flex items-center gap-x-2 mb-6">
              <UserAvatar src={friend.user?.avatar ? `http://127.0.0.1:8000/media/${friend.user?.avatar}` : "/next.svg"} />
              <div className="flex flex-col gap-y-1">
                <div className="text-xs font-semibold flex items-center gap-x-1">
                  {friend.user?.username}
                  {friend.friend.username} (Status: {friend.accepted ? 'Accepted' : 'Pending'})
                </div>
                <p className="text-xs text-zinc-500">{friend.user?.username}</p>
              </div>
              <div className="ml-auto">
                <Button>Invit</Button>
              </div>
            </div>
          ))}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}