import React from "react";
import Sidebar from "@/Components/Sidebar/Sidebar";
import Feed from "@/Components/Feed/Feed";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex flex-col sm:flex-row  ">
      <Sidebar />
    </div>
  );
};

export default Dashboard;
