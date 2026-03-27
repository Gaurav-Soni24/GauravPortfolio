import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiHtml5, SiCss,
  SiNodedotjs, SiExpress, SiMongodb, SiFirebase, SiMysql,
  SiGit, SiPostman, SiVercel 
} from "react-icons/si";

import { FaAws } from "react-icons/fa";

const categorizedSkills = [
  {
    category: "Frontend Developers",
    color: "border-blue-500",
    skills: [
      { name: "React.js", icon: <SiReact className="text-[#61DAFB] w-12 h-12" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-black w-12 h-12" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6] w-12 h-12" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E] bg-black rounded-sm w-12 h-12" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38BDF8] w-12 h-12" /> },
      { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26] w-12 h-12" /> },
      { name: "CSS3", icon: <SiCss className="text-[#1572B6] w-12 h-12" /> }, // <-- Changed here
    ],
  },
  {
    category: "Backend & Databases",
    color: "border-green-600",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-[#339933] w-12 h-12" /> },
      { name: "Express.js", icon: <SiExpress className="text-black w-12 h-12" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248] w-12 h-12" /> },
      { name: "Firestore", icon: <SiFirebase className="text-[#FFCA28] w-12 h-12" /> },
      { name: "MySQL", icon: <SiMysql className="text-[#4479A1] w-12 h-12" /> },
    ],
  },
  {
    category: "Tools & Frameworks",
    color: "border-orange-500",
    skills: [
      { name: "Git", icon: <SiGit className="text-[#F05032] w-12 h-12" /> },
      { name: "AWS", icon: <FaAws className="text-[#232F3E] w-12 h-12" /> },
      { name: "Postman", icon: <SiPostman className="text-[#FF6C37] w-12 h-12" /> },
      { name: "Vercel", icon: <SiVercel className="text-black w-12 h-12" /> },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const SkillCard = ({ skill }: { skill: { name: string; icon: React.ReactNode } }) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{
        scale: 1.05,
        rotateY: 10,
        rotateX: -10,
        boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
      }}
      className="bg-white p-4 rounded-xl border border-black flex flex-col items-center justify-center gap-3 cursor-pointer shadow-sm relative overflow-hidden group h-32 w-full sm:w-36 lg:w-40"
      style={{ perspective: "1000px" }}
    >
      {/* Background Decorative Element */}
      <div className="absolute -bottom-5 -right-5 w-16 h-16 bg-gray-50 rounded-full group-hover:bg-gray-100 transition-colors duration-300"></div>
      
      {/* Skill Icon */}
      <motion.div
        className="z-10 drop-shadow-sm"
        whileHover={{
            y: [0, -6, 0], 
            transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
        }}
      >
        {skill.icon}
      </motion.div>
      
      {/* Skill Name */}
      <h3 className="text-sm font-semibold text-gray-900 z-10 text-center line-clamp-1">{skill.name}</h3>
    </motion.div>
  );
};

const Skill = () => {
  return (
    <motion.div
      className="flex flex-col items-center bg-white min-h-screen px-6 sm:px-12 lg:px-32 py-16 text-black"
      id="skills"
    >
      {/* Skill Typing Animation */}
      <div className="font-extrabold text-4xl sm:text-6xl mb-16 text-center h-20 text-black">
        <TypeAnimation
          sequence={[
            "Skills: Core Technologies", 1000,
            "Skills: Modern Tech Stack", 1000,
          ]}
          wrapper="span"
          speed={25}
          repeat={Infinity}
        />
      </div>

      {/* Main Container */}
      <div className="w-full max-w-7xl flex flex-col gap-12">
        {categorizedSkills.map((cat, catIndex) => (
          <motion.div
            key={catIndex}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="flex flex-col gap-6"
          >
            {/* Category Title */}
            <div className="flex items-center gap-3">
              <div className={`w-2 h-8 bg-black rounded-full`}></div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-950">
                {cat.category}
              </h2>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 place-items-center">
              {cat.skills.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skill;