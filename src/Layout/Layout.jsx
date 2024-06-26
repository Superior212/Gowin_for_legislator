import DashHeader from "@/components/DashHeader";
import SideNavbar from "@/components/SideNavbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="h-screen flex">
      <SideNavbar />
      <main className="flex flex-col w-full">
        <DashHeader />
        <div className="bg-[#F7F7F7] flex-grow p-3 overflow-y-auto overflow-x-hidden">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
