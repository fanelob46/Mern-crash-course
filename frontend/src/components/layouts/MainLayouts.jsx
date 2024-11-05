import React from "react";
import NavBar from "../NavBar";
import { Outlet } from "react-router-dom";


const MainLayouts = () => {
  return (
    
      <div className="min-h-[100vh] ">
        <NavBar />
        <Outlet />
      </div>
      
    
  );
};

export default MainLayouts;
