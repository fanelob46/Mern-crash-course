import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";


const NavBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="">
      <div className="max-w-[1140px] px-4 mx-auto">
        <div className="flex justify-between h-16 items-center">
          <div>
            <Link to={"/"}>
              <h1 className="text-center text-[22px] sm:text-[28px] font-bold uppercase bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Product Store 🛒
              </h1>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to={"/create"}>
              <button>
                <CiSquarePlus className="text-4xl dark:text-white" />
              </button>
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors duration-300"
            >
              {isDarkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
