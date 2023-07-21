import React from "react";
import logo from "@/assets/logodash.png";
import SideBarBtn from "../../shared/SideBarBtn";
import realLogo from "@/assets/realLogo.png";
import barcaLogo from "@/assets/barcaLogo.png";
import { Outlet } from "react-router-dom";
import { useState } from "react";

type Props = {};

const Sidebar = (props: Props) => {
  const [activeSidebar, setActiveSidebar] = useState("Real Madrid");
  return (
    <>
      <div className="bg-color1 p-4 px-8 sticky top-0 z-50 sm:h-[100vh]  sm:w-[20.8125rem] sm:rounded-r-md">
        <img src={logo} className="mb-10 hidden sm:flex" alt="logo" />

        <div className="flex w-full   space-x-6 sm:flex-col sm:space-y-8 sm:space-x-0">
          <SideBarBtn
            activeSidebar={activeSidebar}
            setActiveSidebar={setActiveSidebar}
            path="/dashboard/real"
            name="Real Madrid"
            iconUrl={realLogo}
          />
          <SideBarBtn
            activeSidebar={activeSidebar}
            setActiveSidebar={setActiveSidebar}
            path="/dashboard/barca"
            name="FC Barcelone"
            iconUrl={barcaLogo}
          />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Sidebar;
