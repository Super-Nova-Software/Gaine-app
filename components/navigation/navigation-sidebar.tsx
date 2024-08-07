"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import { NavigationAction } from "./navigation-action";
import { NavigationItem, NavigationItemSkeleton } from "./navigation-item";
import { useServers } from "@/hooks/graphql/server/useServers";
import { userId } from "@/data/user";

export const NavigationSidebar =  () => {
  const { loading, error, servers, handleServerClick } = useServers(userId);

  return (
    <div className="space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-[#1E1F22] bg-[#E3E5E8] py-3">
      <NavigationAction />
      <Separator className="h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto" />
      <ScrollArea className="flex-1 w-full">
        <div className="flex flex-col gap-y-2">
          {loading ? (
            <>
              <NavigationItem.Skeleton />
              <NavigationItem.Skeleton />
              <NavigationItem.Skeleton />
            </>
          ) : error ? (
            <p>Error loading servers...</p>
          ) : (
            servers.map((server) => (
              <NavigationItem
                key={server.id}
                server={server}
                handleServerClick={handleServerClick}
              />
            ))
          )}
        </div>
      </ScrollArea>
      <div className="pb-3 mt-auto flex items-center flex-col gap-y-4">
        <ModeToggle />
      </div>
    </div>
  );
};
