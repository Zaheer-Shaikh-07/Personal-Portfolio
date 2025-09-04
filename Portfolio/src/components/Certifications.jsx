import React, { useState } from "react";
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
  {
    id: 1,
    title: "Logic Building In C++",
    issuer: "CodeChef",
    image: CodeChef,
    date: "10 Sep 2023",
  },
  {
    id: 2,
    title: "Programming using Java",
    issuer: "Infosys Springboard",
    image: JavaCertificate,
    date: "15 June 2024",
  },
  {
    id: 3,
    title: "Web Development",
    issuer: "Infosys Springboard",
    image: Web_infosys,
    date: "11 Oct 2024",
  },
  {
    id: 4,
    title: "Simulink Onramp",
    issuer: "Matlab",
    image: Simulink,
    date: "30 May 2024",
  },
  {
    id: 5,
    title: "Software Engineering",
    issuer: "Infosys Springboard",
    image: SW_infosys,
    date: "12 June 2024",
  },
  {
    id: 6,
    title: "Fundamentals of Deep learning",
    issuer: "NVIDIA",
    image: Certificate_3,
    date: "8 April 2025",
  },
  {
    id: 7,
    title: "Accelerated Computing with CUDA Python",
    issuer: "NVIDIA",
    image: Certificate_2,
    date: "9 April 2025",
  },
  {
    id: 8,
    title: "Application of AI Anomaly Detection",
    issuer: "Infosys Springboard",
    image: Certificate_1,
    date: "9 April 2025",
  },
  {
    id: 9,
    title: "Project on C++",
    issuer: "Infosys Springboard",
    image: ProjectonCpp,
    date: "24 Oct 2023",
  },
  {
    id: 10,
    title: "Matlab Onramp",
    issuer: "Matlab",
    image: Matlab_Onramp,
    date: "",
  },
];

const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalImage, setModalImage] = useState(null);

  const prevCert = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? certificates.length - 1 : prev - 1
    );
  };

  const nextCert = () => {
    setCurrentIndex((prev) =>
      prev === certificates.length - 1 ? 0 : prev + 1
    );
  };

  const openModal = (image) => setModalImage(image);
  const closeModal = () => setModalImage(null);

  const { title, issuer, image, date } = certificates[currentIndex];

  return (
    <section className="relative py-16 w-full bg-gray-950 text-white flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-10">🏅 Certifications</h2>

      {/* Certificate Viewer */}
      <div className="relative w-full max-w-3xl bg-gray-900 rounded-2xl p-6 shadow-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-72 object-contain rounded-4xl cursor-pointer transition-transform hover:scale-105"
          onClick={() => openModal(image)}
        />
        <h3 className="text-xl font-semibold mt-4 text-center">{title}</h3>
        <p className="text-gray-300 text-center">Issued by: {issuer}</p>
        <p className="text-gray-400 text-center text-sm">
          Issued Date: {date || "N/A"}
        </p>

        {/* Navigation buttons */}
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button
            onClick={prevCert}
            className="bg-indigo-500 hover:bg-black/70 p-3 rounded-full ml-2 transition"
          >
            <ChevronLeft size={24} />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center ">
          <button
            onClick={nextCert}
            className="bg-indigo-500 hover:bg-black/70 p-3 rounded-full mr-2 transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {modalImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 text-white hover:text-red-400"
          >
            <X size={32} />
          </button>
          <img
            src={modalImage}
            alt="Certificate"
            className="max-w-[95%] max-h-[85%] rounded-lg shadow-lg object-contain"
          />
        </div>
      )}
    </section>
  );
};

export default Certifications;
