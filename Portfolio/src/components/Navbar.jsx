import { useState,useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"; // Install Heroicons if needed

import { Typewriter } from "react-simple-typewriter";
import { FaDownload } from "react-icons/fa6";


 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className=" dark:bg-gray-800 sticky w-full  z-20 top-0 start-0 border- bg-transparent backdrop-blur-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-0">
         {/* Logo Icon */}
          <div className=" flex items-center justify-center  bg-clip-text  text-transparent dark:bg-gradient-to-r dark:from-blue-500 dark:to-green-500  bg-gradient-to-r from-purple-500 to-indigo-500  ">
            <span className="text-6xl font-extrabold  font-sans   text-transparent text-clip "></span>
          </div>
          
          {/* Logo Text */}
          <span className="text-3xl font-sans   underline-offset-8  -pl-6 -pr-6  tracking-wide    dark:from-cyan-300 dark:to-blue-500 bg-gradient-to-r from-purple-500 to-indigo-500   bg-clip-text text-transparent ">
            Zaheer Shaikh
          </span>
        </a>
        {/* Buttons */}
        <div className="flex md:order-2 space-x-2 md:space-x-2 sm:justify-end">
          <button className="text-white flex bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <a
        href="/Zaheer_Shaikh_CSE-C_2026.pdf"
        download
        
      >
        <FaDownload className="text-xl animate-bounce inline-flex mx-1" />
         Resume
      </a>
          </button>
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
                   {/* Dark Mode Toggle (Switch Button) */}
        {/* <div className="ml-auto flex items-center">
          <label className=" inline-flex items-center cursor-pointer ml-12">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              className="sr-only peer"
            /><p className="text-white flex m-2">Dark Mode</p>
            <div className="w-11 h-6 bg-gray-700 flex flex-col peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-gray-700 dark:peer-focus:ring-white rounded-full peer dark:bg-white peer-checked:bg-white relative dark:peer-checked:bg-gray-600">
              <span 
                className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-all ${
                  darkMode ? "translate-x-5" : ""
                }`}
                
              />
              
            </div>
            
         
          </label>
        </div> */}
        </div>

        {/* Navbar Links */}
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-bold font-sans border border-gray-100 rounded-lg md:space-x-8 md:flex-row bg-gr-800 md:mt-0 md:border-0  dark:bg-gray-900 md:dark:bg-gray-800 dark:border-gray-700 hover:text-blue-700">
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent hover:text-blue-700  md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            
            <li>
              <a
                href="/Skills"
                className="block py-2 px-3 text-white rounded-sm hover:bg-blue-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="/project"
                className="block py-2 px-3 text-white rounded-sm hover:bg-blue-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Project
              </a>
            </li>
            <li>
              <a
                href="/Contact"
                className="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
          </ul>
        

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
