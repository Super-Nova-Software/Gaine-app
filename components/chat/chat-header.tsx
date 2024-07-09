import { useState } from 'react';
import { MobileToggle } from "@/components/mobile-toggle";
import { UserAvatar } from "@/components/user-avatar";
import { ChatVideoButton } from "./chat-video-button";
import { MemberType, ServerchannelsChannelChannelTypeChoices } from "@/graphql/gql/graphql";
import { iconMap } from "@/data/iconsmap";
import { Button } from "../ui/button";
import { Bell, Pin, Wrench, Users, Search } from "lucide-react";
import { useSheet } from '@/hooks/use-sheet-store';

interface ChatHeaderProps {
  serverId: string | undefined;
  emoji: string | undefined;
  channelType: ServerchannelsChannelChannelTypeChoices;
  name: string;
  topic: string;
  members: MemberType;
  type: "channel" | "conversation";
  imageUrl?: string;
}


export const ChatHeader = ({
  serverId,
  emoji,
  channelType,
  name,
  type,
  topic,
  members,
  imageUrl
}: ChatHeaderProps) => {
  const Icon = iconMap[channelType];

const {onSheetOpen} = useSheet();
  return (
    <>
      <div className="text-md font-semibold px-3 flex items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2">
        <MobileToggle serverId={serverId} />
        {emoji ? (
          <>{emoji}</>
        ) : (
          <Icon className="w-5 h-5 text-zinc-500 dark:text-zinc-400 mr-2" />
        )}
        {type === "conversation" && (
          <UserAvatar 
            src={imageUrl}
            className="h-8 w-8 md:h-8 md:w-8 mr-2"
          />
        )}
        <p className="font-semibold text-md text-black dark:text-white">
          {name}
        </p>
        <div className="ml-auto flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <Bell className="w-5 h-5 text-zinc-500 dark:text-zinc-400" />
          </Button>
          <Button variant="ghost" size="icon">
            <Pin className="w-5 h-5 text-zinc-500 dark:text-zinc-400" />
          </Button>
          <Button variant="ghost" size="icon">
            <Wrench className="w-5 h-5 text-zinc-500 dark:text-zinc-400" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => onSheetOpen("MemberList",{members})}>
            <Users className="w-5 h-5 text-zinc-500 dark:text-zinc-400" />
          </Button>
          <Button variant="ghost" size="icon">
            <Search className="w-5 h-5 text-zinc-500 dark:text-zinc-400" />
          </Button>
          {type === "conversation" && (
            <ChatVideoButton />
          )}
        </div>
      </div>
    </>
  );
}

ChatHeader.Skeleton = function ChatHeaderSkeleton() {
  return (
    <div className="text-md font-semibold px-3 flex items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2">
      <div className="w-5 h-5 bg-gray-200 rounded-full mr-2 animate-pulse"/>
      <div className="flex-auto h-6 bg-gray-200 rounded-md mr-2 animate-pulse" />
      <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"/>
    </div>
  );
};
