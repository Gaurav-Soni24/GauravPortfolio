import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import CircularProgressBar from "./CircularProgressBar";
import "react-circular-progressbar/dist/styles.css";

const Skill = () => {
    const skills = [
        // Frontend
        { name: "React.js", value: 90, color: "#61DAFB", description: "A JavaScript library for building user interfaces.", image: "/assets/react.png" },
        { name: "Next.js", value: 85, color: "#000000", description: "The React Framework for production-grade applications.", image: "/assets/nextjs.png" },
        { name: "TypeScript", value: 85, color: "#3178C6", description: "A strongly typed programming language that builds on JavaScript.", image: "/assets/typescript.png" },
        { name: "JavaScript", value: 90, color: "#F7DF1E", description: "A versatile programming language for web development.", image: "/assets/js.png" },
        { name: "Tailwind CSS", value: 90, color: "#38BDF8", description: "A utility-first CSS framework for modern, rapid UI development.", image: "/assets/tailwind.png" },
        { name: "HTML5", value: 95, color: "#E34F26", description: "The standard markup language for Web pages.", image: "/assets/html.png" },
        { name: "CSS3", value: 90, color: "#1572B6", description: "Style sheet language used for describing the presentation of a document.", image: "/assets/css.png" },
        
        // Backend & Databases
        { name: "Node.js", value: 80, color: "#68A063", description: "A runtime environment for executing JavaScript outside the browser.", image: "/assets/nodejs.png" },
        { name: "Express.js", value: 80, color: "#444444", description: "A fast, unopinionated web framework for Node.js.", image: "/assets/express.png" },
        { name: "MongoDB", value: 80, color: "#4DB33D", description: "A scalable NoSQL database built for modern applications.", image: "/assets/mongo.png" },
        { name: "Firebase", value: 85, color: "#FFCA28", description: "A comprehensive platform to build web and mobile applications.", image: "/assets/firebase.png" },
        { name: "MySQL", value: 75, color: "#4479A1", description: "An open-source relational database management system.", image: "/assets/mysql.png" },
        
        // Tools & Cloud
        { name: "Git", value: 85, color: "#F05032", description: "A distributed version control system.", image: "/assets/git.png" },
        { name: "AWS", value: 70, color: "#FF9900", description: "Comprehensive and widely adopted cloud platform.", image: "/assets/aws.png" },
        { name: "Postman", value: 85, color: "#FF6C37", description: "An API platform for building and using APIs.", image: "/assets/postman.png" },
        { name: "Vercel", value: 80, color: "#000000", description: "A hosting and deployment platform for developers.", image: "/assets/vercel.png" },
    ];

    return (
        <motion.div
            className="flex flex-col items-center bg-white min-h-screen px-6 sm:px-12 lg:px-32 py-16 "
            id="skills"
        >
            {/* Skill Typing Animation */}
            <div className="text-black font-extrabold text-4xl sm:text-6xl mb-12 text-center h-20">
                <TypeAnimation
                    sequence={[
                        "Skills 🥇 React.js", 1000,
                        "Skills 🥇 Next.js", 1000,
                        "Skills 🥇 TypeScript", 1000,
                        "Skills 🥇 Node.js", 1000,
                        "Skills 🥇 Tailwind CSS", 1000,
                        "Skills 🥇 MongoDB", 1000,
                        "Skills 🥇 AWS", 1000,
                        "Skills 🥇 Firebase", 1000,
                    ]}
                    wrapper="span"
                    speed={25}
                    repeat={Infinity}
                />
            </div>

            {/* Skill Progress Circles */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 w-full max-w-screen-lg">
                {skills.map((skill, index) => (
                    <SkillCard key={index} skill={skill} />
                ))}
            </div>
        </motion.div>
    );
};

interface Skill {
    name: string;
    value: number;
    color: string;
    description: string;
    image: string;
}

const SkillCard = ({ skill }: { skill: Skill }) => { 
    const [hover, setHover] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex justify-center items-center group"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {/* Circular Progress Bar */}
            <div className={`transition-transform duration-300 ${hover ? "scale-110" : "scale-100"}`}>
                <CircularProgressBar
                    value={skill.value}
                    maxValue={100}
                    size={110}  
                    strokeWidth={10}
                    text={skill.name}
                    color={skill.color}
                    textSize="small"
                />
            </div>

            {/* Skill Info Card (Dynamically Positioned) */}
            <div
                className={`absolute bottom-[-110px] left-1/2 transform -translate-x-1/2 p-4 rounded-lg border transition-all duration-300 w-48 sm:w-56 z-10
                bg-gray-900 text-white shadow-lg shadow-gray-500/50
                ${hover ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-90 pointer-events-none"}`}
            >
                {/* Technology Image */}
                <div className="flex justify-center">
                    <img src={skill.image} alt={skill.name} className="bg-white w-14 mb-2 rounded-md shadow-md p-1" />
                </div>
                <h3 className="text-white font-bold text-lg text-center">{skill.name}</h3>
                <p className="text-gray-300 text-sm text-center">{skill.description}</p>
            </div>
        </motion.div>
    );
};

export default Skill;
