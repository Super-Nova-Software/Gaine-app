import { GET_CHANNEL_BY_NAME_AND_SERVER } from "@/graphql/queries/channel";
import { getClient } from "@/lib/apollo-client";
import { redirect } from "next/navigation";

interface ServerIdPageProps {
  params: {
    serverId: string;
  };
}

const ServerIdPage = async ({ params }: ServerIdPageProps) => {
  const client = getClient();
  const { data, loading, error } = await client.query({
    query: GET_CHANNEL_BY_NAME_AND_SERVER,
    variables: { name: "General", serverId: params.serverId },
  });

  if (loading) {
    return <div>Loading...</div>; // Handle loading state if necessary
  }

  if (error) {
    console.error("Error loading data:", error);
    return null; // Handle error state if necessary
  }

  const initialChannel = data?.channel;

  if (!initialChannel || initialChannel.name !== "General") {
    return null; // Channel not found or not named "General", return null or handle accordingly
  }

  // Redirect to the channel's URL
  return redirect(`/servers/${params.serverId}/channels/${initialChannel.id}`);
};

export default ServerIdPage;
