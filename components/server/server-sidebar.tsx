"use client";
import { useMemo } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { ServerHeader } from "./server-header";
import { ServerSearch } from "./server-search";
import { ServerSection } from "./server-section";
import { ServerChannel } from "./server-channel";
import { useServer } from "@/hooks/graphql/server/useServer";
import { iconMap } from "@/data/iconsmap";
import { userId } from "@/data/user";
import { useMember } from "@/hooks/graphql/member/useMember";
import { ServerMember } from "./server-member";
import { Skeleton } from "../ui/skeleton";

interface ServerSidebarProps {
  serverId: string;
}

export const ServerSidebar = ({ serverId }: ServerSidebarProps) => {
  const { server, members, channelsByCategory, loading, error, refetch } = useServer(serverId);
  const { member, roles, permissions } = useMember(serverId, userId);
  const memoizedChannelsByCategory = useMemo(() => channelsByCategory, [channelsByCategory]);

  if (loading) return (
    <div className="flex flex-col h-full w-full dark:bg-[rgb(43,45,49)] bg-[#F2F3F5]">
      <ServerHeader.Skeleton />
      <ScrollArea className="flex-1 px-3">
        <ServerSearch.Skeleton/>
        <ServerSection.Skeleton />
        <ServerChannel.Skeleton />
        <ServerChannel.Skeleton />
        <ServerChannel.Skeleton />
        <ServerChannel.Skeleton />
        <ServerChannel.Skeleton />
        <ServerSection.Skeleton />
        <ServerMember.Skeleton />
      </ScrollArea>
    </div>
  );
  
  if (error) return <div>Error fetching server data.</div>;

  return (
    <div className="flex flex-col h-full text-primary w-full dark:bg-[rgb(43,45,49)] bg-[#F2F3F5]">
      <ServerHeader server={server} role={roles} permissions={permissions} />
      <ScrollArea className="flex-1 px-3">
        <ServerSearch
          data={Object.entries(memoizedChannelsByCategory).map(([category, channelsInCategory]) => ({
            label: `Channels By ${category}`,
            type: "channel",
            data: channelsInCategory.map((channel) => ({
              id: channel.id,
              name: channel.name,
              icon: iconMap[channel.channelType],
            })),
          }))}
        />
        <Separator className="bg-zinc-200 dark:bg-zinc-700 rounded-md my-2" />
        {Object.entries(memoizedChannelsByCategory).map(([category, channelsInCategory]) => (
          <div key={category} className="mb-2">
            <ServerSection sectionType="channels" ChannelCategoryType={category} permissions={permissions} label={`Channels - ${category}`} />
            <div className="space-y-2">
              {channelsInCategory.map((channel) => (
                <div key={channel.id} className="flex items-center space-x-2">
                  <ServerChannel key={channel.id} channel={channel} permissions={permissions} server={server} />
                </div>
              ))}
            </div>
          </div>
        ))}
        {!!members?.length && (
          <div className="mb-2">
            <ServerSection
              sectionType="members"
              permissions={permissions}
              label="Members"
              server={server}
            />
            <div className="space-y-[2px]">
              {members.map((member) => (
                <ServerMember
                  key={member.id}
                  member={member}
                  server={server}
                />
              ))}
            </div>
          </div>
        )}
      </ScrollArea>
    </div>
  );
};
