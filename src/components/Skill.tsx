import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import CircularProgressBar from "./CircularProgressBar";
import "react-circular-progressbar/dist/styles.css";

const Skill = () => {
    const skills = [
        { name: "React JS", value: 85, color: "#61DAFB", description: "A JavaScript library for building user interfaces.", image: "/assets/react.png" },
        { name: "Node JS", value: 75, color: "#68A063", description: "A runtime environment for executing JavaScript outside the browser.", image: "/assets/nodejs.png" },
        { name: "Express JS", value: 70, color: "#444", description: "A fast, unopinionated web framework for Node.js.", image: "/assets/express.png" },
        { name: "MongoDB", value: 78, color: "#4DB33D", description: "A NoSQL database built for modern applications.", image: "/assets/mongo.png" },
        { name: "Firebase", value: 82, color: "#FFCA28", description: "A platform to build web and mobile applications quickly.", image: "/assets/firebase.png" },
        { name: "Vercel", value: 78, color: "#000", description: "A hosting and deployment platform for developers.", image: "/assets/vercel.png" },
        { name: "TailwindCSS", value: 85, color: "#38BDF8", description: "A utility-first CSS framework for modern designs.", image: "/assets/tailwind.png" },
        { name: "JavaScript", value: 90, color: "#F7DF1E", description: "A versatile programming language for web development.", image: "/assets/js.png" },
    ];

    return (
        <motion.div
            className="flex flex-col items-center bg-white min-h-screen px-6 sm:px-12 lg:px-32 py-16"
            id="Skill"
        >
            {/* Skill Typing Animation */}
            <div className="text-black font-extrabold text-4xl sm:text-6xl mb-12 text-center">
                <TypeAnimation
                    sequence={[
                        "Skills 🥇 ReactJS", 1000,
                        "Skills 🥇 NodeJS", 1000,
                        "Skills 🥇 ExpressJS", 1000,
                        "Skills 🥇 MongoDB", 1000,
                        "Skills 🥇 Firebase", 1000,
                        "Skills 🥇 Vercel", 1000,
                        "Skills 🥇 TailwindCSS", 1000,
                        "Skills 🥇 JavaScript", 1000,
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
                className={`absolute  bottom-[-110px] left-1/2 transform -translate-x-1/2 p-4 rounded-lg border transition-all duration-300 w-48 sm:w-56 z-10
                bg-gray-900 text-white shadow-lg shadow-gray-500/50
                ${hover ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-90 pointer-events-none"}`}
            >
                {/* Technology Image */}
                <div className="flex justify-center">
                    <img src={skill.image} alt={skill.name} className="bg-white w-14 mb-2 rounded-md shadow-md" />
                </div>
                <h3 className="text-white font-bold text-lg text-center">{skill.name}</h3>
                <p className="text-gray-300 text-sm text-center">{skill.description}</p>
            </div>
        </motion.div>
    );
};

export default Skill;
