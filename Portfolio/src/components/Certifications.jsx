import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  CodeChef,
  JavaCertificate,
  Web_infosys,
  Simulink,
  SW_infosys,
  ProjectonCpp,
  Matlab_Onramp,
  Certificate_1,
  Certificate_3,
  Certificate_2,
} from "../assets/assets";

const certificates = [
  { id: 1, title: "Logic Building In C++", issuer: "CodeChef", image: CodeChef, date: "10 Sep 2023" },
  { id: 2, title: "Programming using Java", issuer: "Infosys Springboard", image: JavaCertificate, date: "15 June 2024" },
  { id: 3, title: "Web Development", issuer: "Infosys Springboard", image: Web_infosys, date: "11 Oct 2024" },
  { id: 4, title: "Simulink Onramp", issuer: "Matlab", image: Simulink, date: "30 May 2024" },
  { id: 5, title: "Software Engineering", issuer: "Infosys Springboard", image: SW_infosys, date: "12 June 2024" },
  { id: 6, title: "Fundamentals of Deep learning", issuer: "NVIDIA", image: Certificate_3, date: "8 April 2025" },
  { id: 7, title: "Accelerated Computing with CUDA Python", issuer: "NVIDIA", image: Certificate_2, date: "9 April 2025" },
  { id: 8, title: "Application of AI Anomaly Detection", issuer: "Infosys Springboard", image: Certificate_1, date: "9 April 2025" },
  { id: 9, title: "Project on C++", issuer: "Infosys Springboard", image: ProjectonCpp, date: "24 Oct 2023" },
  { id: 10, title: "Matlab Onramp", issuer: "Matlab", image: Matlab_Onramp, date: "" },
];

const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalImage, setModalImage] = useState(null);

  // Auto-play every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevCert = () => setCurrentIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  const nextCert = () => setCurrentIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));

  const openModal = (image) => setModalImage(image);
  const closeModal = () => setModalImage(null);

  const { title, issuer, image, date } = certificates[currentIndex];

  return (
    <section className="relative py-20 w-full bg-gradient-to-br from-gray-950 via-gray-950 to-gray-950 text-white flex flex-col items-center">
      <h2 className="text-4xl font-extrabold mb-12 bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">
        🏅 Certifications
      </h2>

      {/* Certificate Viewer */}
      <div className="relative w-full max-w-3xl backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={image}
            alt={title}
            className="w-full h-72 object-contain rounded-xl cursor-pointer"
            onClick={() => openModal(image)}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
          />
        </AnimatePresence>

        <motion.h3
          className="text-2xl font-semibold mt-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {title}
        </motion.h3>
        <p className="text-gray-300 text-center">Issued by: {issuer}</p>
        <p className="text-gray-400 text-center text-sm">Issued Date: {date || "N/A"}</p>

        {/* Navigation buttons */}
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button
            onClick={prevCert}
            className="bg-indigo-500/70 hover:bg-indigo-400 p-3 rounded-full ml-3 transition shadow-lg hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            onClick={nextCert}
            className="bg-indigo-500/70 hover:bg-indigo-400 p-3 rounded-full mr-3 transition shadow-lg hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {certificates.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full cursor-pointer transition ${
                idx === currentIndex ? "bg-indigo-400 scale-125" : "bg-gray-600 hover:bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white hover:text-red-400 transition"
            >
              <X size={36} />
            </button>
            <motion.img
              src={modalImage}
              alt="Certificate"
              className="max-w-[95%] max-h-[85%] rounded-xl shadow-2xl object-contain"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
