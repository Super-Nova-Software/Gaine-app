import { ServerchannelsChannelChannelTypeChoices } from "@/graphql/gql/graphql";
import { Dock, Hash, Mic, Notebook, ShieldAlert, ShieldCheck, Video } from "lucide-react";


export const iconMap = {
    [ServerchannelsChannelChannelTypeChoices.Text]: Hash,
    [ServerchannelsChannelChannelTypeChoices.Audio]: Mic,
    [ServerchannelsChannelChannelTypeChoices.Video]: Video,
    [ServerchannelsChannelChannelTypeChoices.Document]: Dock,
    [ServerchannelsChannelChannelTypeChoices.Note]: Notebook,
  }


export const roleIconMap = {
    GUEST: null,
    MODERATOR: <ShieldCheck className="h-4 w-4 mr-2 text-indigo-500" />,
    ADMIN: <ShieldAlert className="h-4 w-4 mr-2 text-rose-500" />,
  };