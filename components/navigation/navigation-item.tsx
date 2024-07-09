"use client";

import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ActionTooltip } from "@/components/action-tooltip";
import { ServerType } from "@/graphql/gql/graphql";
import { Skeleton } from "../ui/skeleton";

interface NavigationItemProps {
  server: ServerType;
  handleServerClick: (serverId: string) => void;
}

export const NavigationItem = ({ server, handleServerClick }: NavigationItemProps) => {
  const params = useParams();

  return (
    <ActionTooltip
      side="right"
      align="center"
      label={server?.name || "Unnamed Server"}
    >
      <button
        onClick={() => handleServerClick(server.id)}
        className="group relative flex items-center"
      >
        <div
          className={cn(
            "absolute left-0 bg-primary rounded-r-full transition-all w-[4px]",
            params?.serverId === server?.id && "h-[36px]",
            params?.serverId !== server?.id && "group-hover:h-[20px]",
            params?.serverId === server?.id ? "h-[36px]" : "h-[8px]"
          )}
        />
        <div
          className={cn(
            "relative flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden",
            params?.serverId === server?.id && "bg-primary/10 text-primary rounded-[16px]"
          )}
        >
          <Image
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 300px"
            src={server?.icon ? `http://127.0.0.1:8000/media/${server?.icon}` : "/next.svg"}
            alt={server?.name || "Server"}
          />
        </div>
      </button>
    </ActionTooltip>
  );
};

NavigationItem.Skeleton = function NavigationItemSkeleton() {
return (
  <div className="relative flex items-center">
    <Skeleton className="h-3 w-1 bg-[rgb(42,107,58)]" />
    <Skeleton className="ml-3 h-[48px] w-[48px] rounded-[24px] bg-[rgb(42,107,58)]" />
  </div>
);
};