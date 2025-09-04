import { FaDownload } from "react-icons/fa";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Resume_pic } from "../assets/assets";

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <section
      ref={ref}
      className="bg-gray-950 text-white py-20 px-6 text-center rounded-tl-[250px] rounded-[200px]"
    >
      <h2 className="text-4xl font-bold mb-4 tracking-wide">My Resume</h2>
      <p className="text-lg max-w-xl mx-auto mb-10 text-gray-300">
        Here's a quick preview of my resume highlighting my skills, experience,
        and projects. Click the button below to download the full PDF!
      </p>

      {/* Resume Animation Wrapper */}
      <motion.div
        className="relative mx-auto w-fit h-fit"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { scale: 0.8, opacity: 0 },
          visible: {
            scale: 1,
            opacity: 1,
            transition: { delay: 0.3, duration: 0.8, ease: "easeOut" },
          },
        }}
      >
        {/* Glowing Background Effect */}
        <motion.div
          className="absolute inset-0 w-[340px] md:w-[390px] h-[440px] md:h-[490px] rounded-[50px] 
                     bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 blur-2xl opacity-50"
          animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />

        {/* Resume Image */}
        <motion.img
          src={Resume_pic}
          alt="Resume Preview"
          className="relative z-10 w-[300px] md:w-[350px] rounded-[50px] shadow-2xl border blur-sm border-gray-700"
          whileHover={{ scale: 1.03, rotate: 0.5 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
      </motion.div>

      {/* DOWNLOAD BUTTON */}
      <a
        href="/Zaheer_Shaikh_CSE-C_2026.pdf"
        download
        className="mt-12 inline-flex items-center gap-3 px-8 py-3 
                   bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 
                   text-white font-semibold text-lg rounded-full shadow-lg transform transition-all 
                   hover:scale-105 hover:shadow-cyan-400/40"
      >
        <FaDownload className="text-xl animate-bounce" />
        Download Resume
      </a>
    </section>
  );
};

export default Resume;
