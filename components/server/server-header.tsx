"use client";
import {
  ChevronDown,
  LogOut,
  PlusCircle,
  Settings,
  Layers2,
  UserPlus,
  Users,
  CalendarCheck2,
  Bell,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useModal } from "@/hooks/use-modal-store";
import { PermissionType, ServerRoleType, ServerType } from "@/graphql/gql/graphql";
import { useRouter } from "next/navigation";
import { Skeleton } from "../ui/skeleton";

interface ServerHeaderProps {
  server: ServerType;
  role?: ServerRoleType;
  permissions?: PermissionType[];
}

export const ServerHeader = ({ server, role, permissions }: ServerHeaderProps) => {
  const { onOpen } = useModal();
  const router = useRouter();
  const hasPermission = (permissionCode: string) =>
    permissions?.some((permission) => permission.codename === permissionCode);

  const actions = [
    {
      condition: hasPermission("aeb86d52-9833-4350-a2ef-6c65cf7ec572"),
      label: "Invite People",
      action: () => onOpen("invite", { server }),
      icon: <UserPlus className="h-4 w-4 ml-auto" />,
      className: "text-indigo-600 dark:text-indigo-400",
    },
    {
      condition:hasPermission("75898a71-70c2-4708-ac9b-3c44785f0f29"),
      label: "Server Settings",
      action: () => {router.push(`/main/servers/${server.id}/setting`)},
      icon: <Settings className="h-4 w-4 ml-auto" />,
    },
    {
      condition: hasPermission("75898a71-70c2-4708-ac9b-3c44785f0f29"),
      label: "Manage Members",
      action: () => onOpen("members", { server }),
      icon: <Users className="h-4 w-4 ml-auto" />,
    },
    {
      condition: hasPermission("de7677b2-d151-4d8c-85b6-19ba9eda439a") || hasPermission("135fa47a-de95-4911-b0e6-218933125428"),
      label: "Create Channel",
      action: () => onOpen("createChannel"),
      icon: <PlusCircle className="h-4 w-4 ml-auto" />,
    },
    {
      condition: hasPermission("0a901a5c-a472-492f-b7ba-fb6a66d56067") || hasPermission("135fa47a-de95-4911-b0e6-218933125428"),
      label: "Create Category",
      action: () => onOpen("createCategory"),
      icon: <Layers2 className="h-4 w-4 ml-auto" />,
    },
    {
      condition: hasPermission("11bbb197-12b4-4954-b11c-a67214a0fc78") || hasPermission("135fa47a-de95-4911-b0e6-218933125428"),
      label: "Create Event",
      action: () => onOpen("createEvent"),
      icon: <CalendarCheck2 className="h-4 w-4 ml-auto" />,
    },
    {
      condition: true,
      separator: true
    },
    {
      condition: true,
      label: "Notification Settings",
      action: () => onOpen("createEvent"),
      icon: <Bell className="h-4 w-4 ml-auto" />,
    },
    {
      condition: true,
      separator: true
    },
    {
      condition: true,
      label: "Leave Server",
      action: () => onOpen("leaveServer", { server }),
      icon: <LogOut className="h-4 w-4 ml-auto" />,
      className: "text-rose-500",
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none" asChild>
        <button className="w-full text-md font-semibold px-3 flex items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2 hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition">
          {server?.name}
          <ChevronDown className="h-5 w-5 ml-auto" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 text-xs font-medium text-black dark:text-neutral-400 space-y-[2px]">
        {actions.map((item, index) =>
          item.condition ? (
            item.separator ? (
              <DropdownMenuSeparator key={`separator-${index}`} />
            ) : (
              <DropdownMenuItem
                key={item.label}
                onClick={item.action}
                className={`${item.className} px-3 py-2 text-sm cursor-pointer`}
              >
                {item.label}
                {item.icon}
              </DropdownMenuItem>
            )
          ) : null
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

ServerHeader.Skeleton = function HeaderSkeleton() {
  return (
    <div className="w-full px-3 flex items-center h-12 border-b-2">
      <Skeleton className="w-24 h-5 bg-[rgb(50,129,70)]" />
    </div>
  );
};