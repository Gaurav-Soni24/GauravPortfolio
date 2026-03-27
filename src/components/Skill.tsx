import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const categorizedSkills = [
  {
    category: "Frontend Developers",
    color: "border-blue-500",
    skills: [
      { name: "React.js", image: "/assets/react.png" },
      { name: "Next.js", image: "/assets/nextjs.png" },
      { name: "TypeScript", image: "/assets/typescript.png" },
      { name: "JavaScript", image: "/assets/js.png" },
      { name: "Tailwind CSS", image: "/assets/tailwind.png" },
      { name: "HTML5", image: "/assets/html.png" },
      { name: "CSS3", image: "/assets/css.png" },
    ],
  },
  {
    category: "Backend & Databases",
    color: "border-green-600",
    skills: [
      { name: "Node.js", image: "/assets/nodejs.png" },
      { name: "Express.js", image: "/assets/express.png" },
      { name: "MongoDB", image: "/assets/mongo.png" },
      { name: "Cloud Firestore", image: "/assets/firebase.png" },
      { name: "MySQL", image: "/assets/mysql.png" },
    ],
  },
  {
    category: "Tools & Frameworks",
    color: "border-orange-500",
    skills: [
      { name: "Git", image: "/assets/git.png" },
      { name: "AWS", image: "/assets/aws.png" },
      { name: "Postman", image: "/assets/postman.png" },
      { name: "Firebase", image: "/assets/firebase.png" },
      { name: "Vercel", image: "/assets/vercel.png" },
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

const SkillCard = ({ skill }: { skill: { name: string; image: string } }) => {
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
      style={{ perspective: "1000px" }} // Necessary for 3D tilt effect
    >
      {/* Background Decorative Element */}
      <div className="absolute -bottom-5 -right-5 w-16 h-16 bg-gray-100 rounded-full group-hover:bg-gray-200 transition-colors duration-300"></div>
      
      {/* Skill Icon */}
      <motion.img
        src={skill.image}
        alt={skill.name}
        className="w-16 h-16 object-contain z-10 p-1 bg-white rounded-md"
        whileHover={{
            y: [0, -8, 0], // Gentle float up and down
            transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
        }}
      />
      
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
      <div className="font-extrabold text-4xl sm:text-6xl mb-16 text-center h-20 text-blue-700">
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
