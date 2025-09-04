import React from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Certifications from './components/Certifications';

export default function HomePage() {
  return (
    <>
    <About />
    <Resume />
    <Skills />
    <Project />
    <Certifications />
    <Contact />
    <Footer/>
    </>
  );
}