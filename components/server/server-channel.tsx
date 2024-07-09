"use client";
import { useParams, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { ActionTooltip } from "@/components/action-tooltip";
import { ModalType, useModal } from "@/hooks/use-modal-store";
import { ChannelType, ServerType, PermissionType } from "@/graphql/gql/graphql";
import { iconMap } from "@/data/iconsmap";
import { Edit, Trash, Lock } from "lucide-react";
import { Skeleton } from "../ui/skeleton";

interface ServerChannelProps {
  channel: ChannelType;
  server: ServerType;
  permissions?: PermissionType[];
}

export const ServerChannel = ({
  channel,
  server,
  permissions
}: ServerChannelProps) => {
  const { onOpen } = useModal();
  const params = useParams();
  const router = useRouter();

  const hasPermission = (permissionCode: string) =>
    permissions?.some((permission) => permission.codename === permissionCode);

  const Icon = iconMap[channel?.channelType];

  const onClick = () => {
    router.push(`/main/servers/${params?.serverId}/channels/${channel.id}`)
  }

  const onAction = (e: React.MouseEvent, action: ModalType) => {
    e.stopPropagation();
    onOpen(action, { channel, server });
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition mb-1",
        params?.channelId === channel.id && "bg-zinc-700/20 dark:bg-zinc-700"
      )}
    >
      <div
        className={cn(
          "absolute left-0 bg-primary rounded-r-full transition-all w-[4px]",
          params?.channelId !== channel.id && "group-hover:h-[20px]",
          params?.channelId === channel.id ? "h-[36px]" : "h-[8px]"
        )}
      />
      {channel.emoji ? (
        <>{channel.emoji}</>
      ) : (
        <Icon className="flex-shrink-0 w-5 h-5 text-zinc-500 dark:text-zinc-400" />
      )}
      <p className={cn(
        "line-clamp-1 font-semibold text-sm text-zinc-500 group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300 transition",
        params?.channelId === channel.id && "text-primary dark:text-zinc-200 dark:group-hover:text-white"
      )}>
        {channel.name}
      </p>
      {channel.name !== "general" && hasPermission("4e3395e8-9b83-4ae3-a1ea-92d4f913925f") && (
        <div className="ml-auto flex items-center gap-x-2">
          <ActionTooltip label="Edit">
            <Edit
              onClick={(e) => onAction(e, "editChannel")}
              className="hidden group-hover:block w-4 h-4 text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition"
            />
          </ActionTooltip>
          <ActionTooltip label="Delete">
            <Trash
              onClick={(e) => onAction(e, "deleteChannel")}
              className="hidden group-hover:block w-4 h-4 text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition"
            />
          </ActionTooltip>
        </div>
      )}
      {channel.name === "general" && (
        <Lock
          className="ml-auto w-4 h-4 text-zinc-500 dark:text-zinc-400"
        />
      )}
    </button>
  );
}

ServerChannel.Skeleton = function ChannelSkeleton() {
  return (
    <div className="group relative px-2 py-2 rounded-md flex items-center gap-x-2 w-full mb-1">
      <div className="absolute left-0 rounded-r-full transition-all w-[4px] h-[8px]" />
      <Skeleton className="flex-shrink-0 w-5 h-5 bg-[rgb(50,129,70)]" />
      <Skeleton className="flex-1 h-4 bg-[rgb(50,129,70)]" />
      <Skeleton className="ml-auto w-4 h-4 bg-[rgb(50,129,70)]" />
    </div>
  );
};