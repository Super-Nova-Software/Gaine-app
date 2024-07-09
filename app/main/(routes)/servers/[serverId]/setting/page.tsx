import ServerSetting from "@/components/serverSetting";

interface ServerSettingPageProps {
  params: {
    serverId: string;
  }
}

const ServerSettingPage = ({ params }: ServerSettingPageProps) => {

  return (
    <div>
      <ServerSetting serverId={params.serverId} />
    </div>
  );
}
export default ServerSettingPage;
