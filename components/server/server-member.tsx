"use client";

import { useParams, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { UserAvatar } from "@/components/user-avatar";
import { MemberType, ServerType } from "@/graphql/gql/graphql";
import { Skeleton } from "../ui/skeleton";

interface ServerMemberProps {
  member: MemberType;
  server: ServerType;
}


export const ServerMember = ({
  member,
  server
}: ServerMemberProps) => {
  const params = useParams();
  const router = useRouter();


  const onClick = () => {
    router.push(`/main/servers/${params?.serverId}/conversations/${member.id}`)
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        "group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition mb-1",
        params?.memberId === member.id && "bg-zinc-700/20 dark:bg-zinc-700"
      )}
    >
      <UserAvatar 
        src={member.user?.avatar ? `http://127.0.0.1:8000/media/${member.user?.avatar}` : "/next.svg"}
        className="h-8 w-8 md:h-8 md:w-8"
      />
      <p
        className={cn(
          "font-semibold text-sm text-zinc-500 group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300 transition",
          params?.memberId === member.id && "text-primary dark:text-zinc-200 dark:group-hover:text-white"
        )}
      >
        {member.user?.username}#{member.user?.discriminator}
      </p>
      {member.joinedAt}
    </button>
  )
}

ServerMember.Skeleton = function MemberSkeleton() {
  return (
    <div className="group px-2 py-2 rounded-md flex items-center gap-x-2 w-full mb-1">
      <Skeleton className="h-8 w-8 md:h-8 md:w-8 rounded-full bg-[rgb(50,129,70)]" />
      <Skeleton className="flex-1 h-4 ml-2 bg-[rgb(50,129,70)]" />
      <Skeleton className="h-4 bg-[rgb(50,129,70)]" />
    </div>
  );
};