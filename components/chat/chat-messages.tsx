"use client";
import { useEffect, useRef } from "react";
import { format } from "date-fns";
import { Loader2, ServerCrash } from "lucide-react";
import { ChatWelcome } from "./chat-welcome";
import { ChatItem } from "./chat-item";
import { MemberType } from "@/graphql/gql/graphql";
import { useMessages } from "@/hooks/graphql/chat/useMessage";


const DATE_FORMAT = "d MMM yyyy, HH:mm";

interface ChatMessagesProps {
  name: string;
  member: MemberType;
  emoji: string;
  chatId: string;
  paramKey: "channelId" | "conversationId";
  paramValue: string;
  type: "channel" | "conversation";
}

export const ChatMessages = ({
  name,
  member,
  paramValue,
  emoji,
  type,
}: ChatMessagesProps) => {
  const chatRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const { messages, loading, error } = useMessages(paramValue );

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  if (loading) {
    return (
      <div className="flex flex-col flex-1 justify-center items-center">
        <Loader2 className="h-7 w-7 text-zinc-500 animate-spin my-4" />
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          Loading messages...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col flex-1 justify-center items-center">
        <ServerCrash className="h-7 w-7 text-zinc-500 my-4" />
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          Something went wrong!
        </p>
      </div>
    );
  }

  // if (messages.length === 0) {
  //   return (
  //     <div className="flex flex-col flex-1 justify-center items-center">
  //       <p className="text-xs text-zinc-500 dark:text-zinc-400">
  //         No messages yet.
  //       </p>
  //     </div>
  //   );
  // }

  return (
    <div ref={chatRef} className="flex-1 flex flex-col py-4 overflow-y-auto">
      <ChatWelcome type={type} emoji={emoji} name={name} />
      <div className="flex flex-col-reverse mt-auto">
        {messages.map((message) => (
          <ChatItem
            key={message.id}
            id={message.id}
            currentMember={member}
            member={message.sender}
            content={message.content}
            deleted={message.deleted}
            timestamp={format(new Date(message.timestamp), DATE_FORMAT)}
            isUpdated={message.editedTimestamp !== message.timestamp}
          />
        ))}
      </div>
      <div ref={bottomRef} />
    </div>
  );
};
