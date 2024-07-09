"use client";
import { Plus, Settings } from "lucide-react";
import { ActionTooltip } from "@/components/action-tooltip";
import { useModal } from "@/hooks/use-modal-store";
import { ChannelCategoryType, PermissionType, ServerType, ServerchannelsChannelChannelTypeChoices } from "@/graphql/gql/graphql";
import { Skeleton } from "../ui/skeleton";

interface ServerSectionProps {
  label: string;
  sectionType: "channels" | "members";
  ChannelType?: ServerchannelsChannelChannelTypeChoices;
  ChannelCategoryType?: ChannelCategoryType;
  server?: ServerType;
  permissions?: PermissionType[];
}

export const ServerSection = ({
  label,
  sectionType,
  ChannelType,
  ChannelCategoryType,
  server,
  permissions
}: ServerSectionProps) => {
  const { onOpen } = useModal();
  const hasPermission = (permissionCode: string) =>
    permissions?.some((permission) => permission.codename === permissionCode);

  return (
    <div className="flex items-center justify-between py-2">
      <p className="text-xs uppercase font-semibold text-zinc-500 dark:text-zinc-400">
        {label}
      </p>
      {sectionType === "channels" && hasPermission("de7677b2-d151-4d8c-85b6-19ba9eda439a") && (
        <ActionTooltip label="Create Channel" side="top">
          <button
            onClick={() => onOpen("createChannel", { ChannelCategoryType })}
            className="text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition"
          >
            <Plus className="h-4 w-4" />
          </button>
        </ActionTooltip>
      )}
      {sectionType === "members" && hasPermission("75898a71-70c2-4708-ac9b-3c44785f0f29") && (
        <ActionTooltip label="Manage Members" side="top">
          <button
            onClick={() => onOpen("members", { server })}
            className="text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition"
          >
            <Settings className="h-4 w-4" />
          </button>
        </ActionTooltip>
      )}
    </div>
  );
}

ServerSection.Skeleton = function SectionSkeleton() {
  return (
    <div className="flex items-center justify-between py-2">
      <Skeleton className="h-4 w-32 bg-[rgb(42,107,58)]" />
      <Skeleton className="h-4 w-4 bg-[rgb(50,129,70)]" />
    </div>
  );
};