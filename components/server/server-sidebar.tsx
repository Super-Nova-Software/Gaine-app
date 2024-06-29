"use client";
import { redirect } from "next/navigation";
import { Hash, Mic, ShieldAlert, ShieldCheck, Video } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

import { ServerHeader } from "./server-header";
import { ServerSearch } from "./server-search";
import { ServerSection } from "./server-section";
import { ServerChannel } from "./server-channel";
import { ServerMember } from "./server-member";
import { UserProfile } from "@/lib/current-profile";
import { useQuery } from "@apollo/client";
import { GET_ROLES_BY_USER_AND_SERVER, GET_SERVER_DETAILS } from "@/graphql/queries/server";

interface ServerSidebarProps {
  serverId: string;
}

// const iconMap = {
//   [ServerchannelsChannelChanneltypeChoices]: <Hash className="mr-2 h-4 w-4" />,
//   [ServerchannelsChannelChanneltypeChoices]: <Mic className="mr-2 h-4 w-4" />,
//   [ServerchannelsChannelChanneltypeChoices]: <Video className="mr-2 h-4 w-4" />
// };

// const roleIconMap = {
//   [MemberRole.GUEST]: null,
//   [MemberRole.MODERATOR]: <ShieldCheck className="h-4 w-4 mr-2 text-indigo-500" />,
//   [MemberRole.ADMIN]: <ShieldAlert className="h-4 w-4 mr-2 text-rose-500" />
// }

export const ServerSidebar = ({
  serverId
}: ServerSidebarProps) => {
  const profile = UserProfile;
  console.log(" fggggggggggggggggggggggggg : ", profile);

  if (!profile) {
    return redirect("/");
  }

  const {  data:datarole,loading:loadingrole,error:errorrole } = useQuery(GET_ROLES_BY_USER_AND_SERVER, {
    variables: {
      userId: '437b14cd-6c25-4795-83ff-d56e9d71dad5',
      serverId,
    },
  });

const { loading, error, data } = useQuery(GET_SERVER_DETAILS, {
  variables: { serverId },
});



if (loading) return 'Loading...';
if (error) return `Error! ${error.message}`;
if (loadingrole) return 'Loading...';
// if (errorrole) return `Error! ${errorrole.message}`;


const server = data?.server;

if (!server) {
    return redirect("/");
  }

const role = "ADMIN";
console.log("role : ", role);
  return (
    <div className="flex flex-col h-full text-primary w-full dark:bg-[#2B2D31] bg-[#F2F3F5]">
      <ServerHeader
        server={server}
        role={role}
      />
      {/* <ScrollArea className="flex-1 px-3">
        <div className="mt-2">
          <ServerSearch
            data={[
              {
                label: "Text Channels",
                type: "channel",
                data: textChannels?.map((channel) => ({
                  id: channel.id,
                  name: channel.name,
                  icon: iconMap[channel.type],
                }))
              },
              {
                label: "Voice Channels",
                type: "channel",
                data: audioChannels?.map((channel) => ({
                  id: channel.id,
                  name: channel.name,
                  icon: iconMap[channel.type],
                }))
              },
              {
                label: "Video Channels",
                type: "channel",
                data: videoChannels?.map((channel) => ({
                  id: channel.id,
                  name: channel.name,
                  icon: iconMap[channel.type],
                }))
              },
              {
                label: "Members",
                type: "member",
                data: members?.map((member) => ({
                  id: member.id,
                  name: member.profile.name,
                  icon: roleIconMap[member.role],
                }))
              },
            ]}
          />
        </div>
        <Separator className="bg-zinc-200 dark:bg-zinc-700 rounded-md my-2" />
        {!!textChannels?.length && (
          <div className="mb-2">
            <ServerSection
              sectionType="channels"
              channelType={ServerchannelsChannelChanneltypeChoices.Text}
              role={role}
              label="Text Channels"
            />
            <div className="space-y-[2px]">
              {textChannels.map((channel) => (
                <ServerChannel
                  key={channel.id}
                  channel={channel}
                  role={role}
                  server={server}
                />
              ))}
            </div>
          </div>
        )}
        {!!audioChannels?.length && (
          <div className="mb-2">
            <ServerSection
              sectionType="channels"
              channelType={ChannelType.AUDIO}
              role={role}
              label="Voice Channels"
            />
            <div className="space-y-[2px]">
              {audioChannels.map((channel) => (
                <ServerChannel
                  key={channel.id}
                  channel={channel}
                  role={role}
                  server={server}
                />
              ))}
            </div>
          </div>
        )}
        {!!videoChannels?.length && (
          <div className="mb-2">
            <ServerSection
              sectionType="channels"
              channelType={ChannelType.VIDEO}
              role={role}
              label="Video Channels"
            />
            <div className="space-y-[2px]">
              {videoChannels.map((channel) => (
                <ServerChannel
                  key={channel.id}
                  channel={channel}
                  role={role}
                  server={server}
                />
              ))}
            </div>
          </div>
        )}
        {!!members?.length && (
          <div className="mb-2">
            <ServerSection
              sectionType="members"
              role={role}
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
      </ScrollArea> */}
    </div>
  )
}