"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Delete, Edit,Lock, MessageCircleIcon,Users , ServerIcon, SettingsIcon, Text, Trash, UsersIcon, MoreVertical, ShieldQuestion, Check, Gavel } from "lucide-react";
import Image from "next/image";
import { useServer } from "@/hooks/graphql/server/useServer";

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
import { UserAvatar } from "./user-avatar";
import { useModal } from "@/hooks/use-modal-store";
import { ActionTooltip } from "./action-tooltip";
import { cn } from "@/lib/utils";

interface ServerSettingProps {
  serverId: string;
}

export default function ServerSetting({ serverId }: ServerSettingProps) {
  const [currentTab, setCurrentTab] = useState("general");
  const { server, members, permissions, loading, error, refetch } = useServer(serverId);

  const tabs = [
    { name: "general", label: "General", icon: SettingsIcon, content: GeneralTabContent },
    { name: "roles", label: "Roles", icon: UsersIcon, content: RolesTabContent },
    { name: "channels", label: "Channels", icon: MessageCircleIcon, content: ChannelsTabContent },
    { name: "members", label: "Members", icon: Users , content: MemberaTabContent },
  ];
  const { onOpen } = useModal();
  function GeneralTabContent() {
    return (
      <Card className="dark:bg-[#1E1F22] bg-[#E3E5E8]">
        <CardHeader>
          <CardTitle>Server Settings</CardTitle>
          <CardDescription>Manage your server settings here.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-8">
          <div className="grid gap-2">
            <Label htmlFor="name">Server Name</Label>
            <Input
              id="name"
              className="bg-zinc-300/50 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              placeholder="Enter server name"
              value={server?.name}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              className="bg-zinc-300/50 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              placeholder="Enter server description"
              rows={2}
              value={server?.description}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="icon">Server Icon</Label>
            <div className="flex items-center gap-4">
              <Image src={server?.icon ? `http://127.0.0.1:8000/media/${server?.icon}` : "/next.svg"} width="64" height="64" alt="Server Icon" className="rounded-md" />
              <Button variant="outline">Upload Icon</Button>
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t p-6">
          <Button onClick={() => { }}>Save Changes</Button>
        </CardFooter>
      </Card>
    );
  }

  function RolesTabContent() {
    return (
      <Card className="dark:bg-[#1E1F22] bg-[#E3E5E8]">
        <CardHeader>
        <div className="flex items-center justify-between mb-6">
          <CardTitle>Roles</CardTitle>
          <Button onClick={() => onOpen("createServerRole",{server,permissions})}>Add Role</Button>
        </div>
        </CardHeader>
        <CardContent className="flex-col">
        {server?.roles?.length > 0 ? (
        server.roles.map((role) => (
    <div key={role.id} className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className={`w-5 h-5 ${role.color} rounded-md`} />
        <span className="font-medium">{role.name}</span>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <Delete className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Trash className="w-5 h-5" />
        </Button>
      </div>
    </div>
  ))
) : (
  <p>No roles found.</p>
)}
        </CardContent>
      </Card>
    );
  }

  function ChannelsTabContent() {
    return (
<Card className="dark:bg-[#1E1F22] bg-[#E3E5E8]">
<CardHeader>
<div className="flex items-center justify-between mb-6">
  <CardTitle>Channels # {server?.channelSet.length}</CardTitle>
  <Button onClick={() => onOpen("createChannel")}>Add Channel</Button>
</div>
</CardHeader>
<CardContent className="flex-col">
{server?.channelSet.length > 0 ? (
server?.channelSet.map((channel, index) => (
<div key={index} className="flex items-center gap-2">
<div
      className={cn(
        "group relative px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition mb-1"
      )}
    >
      {channel.emoji ? (
        <>{channel.emoji}</>
      ) : (
        <Text className="flex-shrink-0 w-5 h-5 text-zinc-500 dark:text-zinc-400" />
      )}
      <p>
        {channel.name}
      </p>
      {channel.name !== "general" &&  (
        <div className="ml-auto flex items-center gap-x-2">
          <ActionTooltip label="Edit">
            <Edit
              onClick={() => onOpen("editChannel", { channel })}
              className="hidden group-hover:block w-4 h-4 text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition"
            />
          </ActionTooltip>
          <ActionTooltip label="Delete">
            <Trash
             onClick={() => onOpen("deleteChannel", { channel })}
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
    </div>
</div>
))
) : (
<p>No roles found.</p>
)}
</CardContent>
</Card>
    );
  }

  function MemberaTabContent() {
    return (
<Card className="dark:bg-[#1E1F22] bg-[#E3E5E8]">
<CardHeader>
<div className="flex items-center justify-between mb-6">
  <CardTitle>Member</CardTitle>
  <Button>Invite Member</Button>
</div>
</CardHeader>
<CardContent className="flex-col">
{members?.map((member) => (
            <div key={member.id} className="flex items-center gap-x-2 mb-6">
              <UserAvatar src={member.user?.avatar ? `http://127.0.0.1:8000/media/${member.user?.avatar}` : "/next.svg"} />
              <div className="flex flex-col gap-y-1">
                <div className="text-balance font-medium flex items-center gap-x-1">
                  {member.user?.username}
                </div>
                <p className="text-sm text-zinc-400">{member.user?.userstatus?.status}</p>
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
                              // onClick={() => onRoleChange(member.id, role.id)}
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
                    <DropdownMenuItem >
                      <Gavel className="h-4 w-4 mr-2" />
                      Kick
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
</CardContent>
</Card>
    );
  }
  const renderContent = () => {
    const currentTabContent = tabs.find(tab => tab.name === currentTab)?.content;
    return currentTabContent ? currentTabContent() : null;
  };

  return (
    <div className="grid min-h-screen w-full ">
      <div className="flex flex-col w-full">
        <header className="text-md font-semibold px-3 flex items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2">
          <Link href={`/server/${serverId}`} className="lg:hidden">
            <ServerIcon className="h-6 w-6" />
            <span className="sr-only">Server Settings</span>
          </Link>
          <div className="w-full flex-1">
            <h1 className="text-lg font-semibold">{tabs.find(tab => tab.name === currentTab)?.label}</h1>
          </div>
          <nav className="flex gap-4 text-sm font-medium">
            {tabs.map(tab => (
              <button
                key={tab.name}
                onClick={() => setCurrentTab(tab.name)}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                  currentTab === tab.name ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50" : "text-gray-500 dark:text-gray-400"
                } transition-all hover:text-gray-900 dark:hover:text-gray-50`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </nav>
        </header>
        <main className="flex-1 overflow-auto p-6">{renderContent()}</main>
      </div>
    </div>
  );
}
