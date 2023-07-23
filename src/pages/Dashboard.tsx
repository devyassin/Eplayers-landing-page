import React from "react";
import Sidebar from "@/Components/Sidebar/Sidebar";
import { useEffect } from "react";
import Feed from "@/Components/Feed/Feed";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col sm:flex-row  ">
      <Sidebar />
    </div>
  );
};

export default Dashboard;
