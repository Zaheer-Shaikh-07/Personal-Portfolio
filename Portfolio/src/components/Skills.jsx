import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaDatabase, FaTools } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiJavascript } from 'react-icons/si';

const skills = [
  { name: 'React.js', icon: <FaReact className="text-cyan-400 animate-spin "/>, level: 75 , year: 2024},
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-blue-500 animate-pulse" />, level: 85 , year: 2024 },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400"/>, level: 65, year: 2023 },
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-600 hover:animate-pulse"/>, level: 95 , year: 2022},
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600"/>, level: 90 , year: 2022},
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500"/>, level: 50 , year: 2024},
  { name: 'MongoDB', icon: <SiMongodb className="text-green-700"/>, level: 50 , year: 2024},
  { name: 'MySQL', icon: <FaDatabase className="text-blue-500"/>, level: 50 , year: 2024},
  { name: 'Dev Tools', icon: <FaTools className="text-gray-400 animate-pulse"/>, level: 70 , year: 2020},
];

const Skills = () => {
  return (
    <section className="bg-gray-950 py-15 px-8">
      <div className="max-w-7xl mx-auto text-center">
        
        <h2 className="text-4xl font-bold text-white mb-4">My Skills</h2>
        <p className="text-gray-600 mb-12">Computer Science • Frontend • Backend • Databases • Tools</p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-900 rounded-xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
            >
              <div className="text-4xl text-green-600 mb-3">{skill.icon}</div>
              <h3 className="text-xl font-mono text-white mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="font-sans text-semibold text-gray-300 mt-2">{skill.level}% </p>
              <p className="text-sm text-gray-500">Mastered in {skill.year}</p>
            </motion.div>
          ))}
        </div>

        {/* Innovation: Interactive Timeline */}
       
      </div>
    </section>
  );
};

export default Skills;