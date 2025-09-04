import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import "tailwindcss";
import Certifications from "./components/Certifications";
import HomePage from "./HomePage";

function App() {
  return (
    <div className=" px-4  sm:px-[1vw] md:px-[7vw] lg:px-[7vw] bg-gray-950 
            
              from-indigo-900
              via--800
              to-purple-500 font-Roboto">
      
     <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project" element={<Project />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/Certiciations" element={<Certifications />} />
      </Routes>
    </div>
  );
}

export default App;
