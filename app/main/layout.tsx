import { NavigationSidebar } from "@/components/navigation/navigation-sidebar";

const  MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className=" md:flex md:w-[72px] z-30 flex-col fixed inset-y-0">
        <NavigationSidebar />
      </div>
      <main className="md:pl-[72px] h-full overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
