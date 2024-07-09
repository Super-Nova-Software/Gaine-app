"use client";
import { ChatHeader } from "@/components/chat/chat-header";
import { ChatInput } from "@/components/chat/chat-input";
import { ChatMessages } from "@/components/chat/chat-messages";
import TipTapEditor from "@/components/document/editor";
import Canvas from "@/components/draw/Canvas";
import { MediaRoom } from "@/components/media-room";
import { userId } from "@/data/user";
import { ServerchannelsChannelChannelTypeChoices } from "@/graphql/gql/graphql";
import { useChannel } from "@/hooks/graphql/channel/useChannel";
import { useDocument } from "@/hooks/graphql/document/usedocument";
import { useDraw } from "@/hooks/graphql/draw/usedraw";

import { useMember } from "@/hooks/graphql/member/useMember";
import { useServer } from "@/hooks/graphql/server/useServer";

interface ChannelIdPageProps {
  params: {
    serverId: string;
    channelId: string;
  }
}

const ChannelIdPage = ({ params }: ChannelIdPageProps) => {
  const { channel, loading: loadingChannel, error: errorChannel } = useChannel(params.channelId);
  const { document, loading: loadingDoc, error: errorDoc } = useDocument(params.channelId);
  const { members } = useServer(params.serverId);
  const { member, permissions, loading: loadingMember, error: errorMember } = useMember(params.serverId, userId);
  const {draw } = useDraw(params.channelId)

  if (loadingChannel || loadingDoc || loadingMember) return <ChatHeader.Skeleton />;

  if (errorChannel || errorDoc || errorMember) {
    console.error("Error fetching data:", errorChannel || errorDoc || errorMember);
    return <div>Error fetching data. Please try again later.</div>;
  }

  return (
    <div className="bg-white dark:bg-[#313338] flex flex-col h-full">
      <ChatHeader
        name={channel?.name}
        topic={channel?.topic}
        channelType={channel?.channelType}
        emoji={channel?.emoji}
        members={members}
        serverId={channel?.server.id}
        type="channel"
      />
      {channel?.channelType === ServerchannelsChannelChannelTypeChoices.Text && (
        <>
          <ChatMessages
            member={member}
            emoji={channel?.emoji}
            name={channel?.name}
            chatId={channel?.id}
            type="channel"
            paramKey="channelId"
            paramValue={channel?.id}
          />
          <ChatInput
            permissions={permissions}
            channelId={params.channelId}
            name={channel?.name}
            type="channel"
          />
        </>
      )}
      {channel?.channelType === ServerchannelsChannelChannelTypeChoices.Document && document && (
        <div className="border-stone-200 shadow-xl border rounded-lg px-16 py-8 w-full">
          <TipTapEditor document={document} channelId={params.channelId} />
        </div>
      )}
      {channel?.channelType === ServerchannelsChannelChannelTypeChoices.Draw && (
        <div className=' h-screen border-l'>
        {/* <Canvas
         draw={draw}
         channelId={params.channelId}
        /> */}
    </div>
      )}
      {channel?.channelType === ServerchannelsChannelChannelTypeChoices.Audio && (
        <MediaRoom
          chatId={channel?.id}
          video={false}
          audio={true}
        />
      )}
      {channel?.channelType === ServerchannelsChannelChannelTypeChoices.Video && (
        <MediaRoom
          chatId={channel?.id}
          video={true}
          audio={true}
        />
      )}
    </div>
  );
};

export default ChannelIdPage;
