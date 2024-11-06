import React from "react";
import NavBar from "../NavBar";
import { Outlet } from "react-router-dom";


const MainLayouts = () => {
  return (
    <div className="min-h-[100vh] text-black dark:bg-blue-950">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default MainLayouts;
