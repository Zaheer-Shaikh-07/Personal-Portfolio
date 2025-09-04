import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import Project from "./Project";
import { Typewriter } from "react-simple-typewriter";
import { FaDownload } from "react-icons/fa";
import TailGrids from "./TailGrids";
import Skills from "./Skills";
import Certifications from "./Certifications";
import HomePage from "../HomePage";
import { profile_pic } from "../assets/assets";


const About = () => {
  return (
    
    <div className="flex flex-col items-center justify-center w-full h-auto sm:min-h-screen bg-slate-950 dark:bg-gray-900  ">
      {/* Main Container */}
      
      <div className="w-full lg:min-h-screen  border4 mx-auto bg-gray-950  from-black to-gray-800 dark:bg-gray-700 shadow-lg rounded-lg  py-2  text-white mb-1 p-10 ">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8  lg:mt-18  py-18 " >
          {/* Profile Image */}
          <div className="flex justify-start animate-blob bg-gradient-to-l from-indigo-700 to-purple-700  ">
            <img
              src={profile_pic}
              alt="Profile"
              className="w-50  h-50 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-[400px] lg:h-auto  object-cover border-  border-gray-600 shadow-lg  animate-blob bg-gradient-to-l from-indigo-700 to-blue-700 -translate-x-1.5  -translate-y-1.5 hover:translate-1.2 "
            />
          </div>

          {/* Text & Details */}
          <div className="text-center  lg:text-left p-8 mx-4 max-w-2xl bg-gray-900 rounded-[20px] shadow-lg shadow-purple-700 border-2 border-indigo-600 ">
          <h1 className="text-4xl sm:text-4xl font-mono  text-gray-200">
              
              <span className="  font-Inter text-purple-600  ">
                <Typewriter
                  words={["Hi, I am Zaheer"]}
                  loop={false}
                  cursor
                  cursorStyle="_"
                  typeSpeed={100}
                  deleteSpeed={50}
                />
              </span>
            </h1>
            <p className="text-gray-400 text-lg mt-2">
            <Typewriter
  words={["a Web Developer |  Front-End Engineer | an AI Enthusiast"]}
  loop={true}
  cursor
  typeSpeed={80}
  deleteSpeed={50}
/>
            </p>

            <p className="text-gray-300 text-sm sm:text-base mt-4 max-w-3xl px-4 lg:px-0">
              Welcome to my portfolio! I am a passionate and dedicated web developer with a strong
              interest in building innovative, user-friendly, and scalable web applications. With
              experience in React, Tailwind CSS, and JavaScript, I specialize in creating modern and
              interactive websites that enhance user experience. My journey in web development started
              with a curiosity to understand how websites work, which soon turned into a deep passion for
              coding and problem-solving.
            </p>
          
            {/* Social Icons */}
            
            <div className="mt-4   flex justify-center lg:justify-start gap-4 ">
            
              <a
                href="https://github.com/Zaheer-Shaikh-07"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full  hover:bg-gray-800 transition hover:scale-120 text-amber-100"
              >
                <FaGithub size={28} />
              </a>
              <a
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full   hover:text-blue-600 transition"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl  hover:bg-gradient-to-tl  hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 "
              >
                <FaInstagram size={28} />
              </a>
              <a
                href="https://discord.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full  hover:bg-indigo-600  hover:"
              >
                <FaDiscord size={28}/>
              </a>
            </div>
            
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default About;
