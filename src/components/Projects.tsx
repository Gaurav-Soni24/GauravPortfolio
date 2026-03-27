import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    image: "./assets/projects/AirWatch.png",
    name: "AirWatch",
    description: "An interactive dashboard for regional air quality monitoring with real-time data visualization.",
    features: [
      "Intuitive UI with real-time regional air quality monitoring",
      "Slashed page load times by 35% using optimized data fetching",
      "Boosted user engagement by 40% via interactive map integrations",
    ],
    techStack: ["Next.js", "TypeScript", "Cloud Firestore", "Tailwind CSS"],
    liveLink: "https://air-watch-seven.vercel.app/dashboard",
    repoLink: "https://github.com/Gaurav-Soni24/AirWatch",
    owner: "Gaurav Soni",
  },
  {
    image: "/assets/projects/Quizify.png",
    name: "Quizify",
    description: "A full-stack, dynamic quiz platform supporting seamless creation and live participation.",
    features: [
      "Client-side anti-cheating mechanism reducing unauthorized attempts by 30%",
      "Real-time state updates improving system performance by 40%",
      "Comprehensive result tracking and live participation"
    ],
    techStack: ["VanillaJS", "Node.js", "Express.js", "Firebase", "Bootstrap"],
    liveLink: "https://lnkd.in/d3y-d7aT",
    repoLink: "https://github.com/Gaurav-Soni24/quizify-frontend",
    owner: "Gaurav Soni"
  },
  {
    image: "/assets/projects/Portfolio.png",
    name: "My Portfolio",
    description: "A visually compelling, highly responsive personal portfolio showcasing technical projects.",
    features: [
      "Designed and developed using Next.js, TSX, and Tailwind CSS",
      "Effectively showcases technical capabilities and projects",
      "Drove a 60% increase in engagement and 40% rise in profile views"
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Web3Forms"],
    liveLink: "https://gaurav-portfolio-rho.vercel.app/",
    repoLink: "https://github.com/Gaurav-Soni24/GauravPortfolio",
    owner: "Gaurav Soni"
  },
  {
    image: "/assets/projects/NotesON.png",
    name: "NotesON",
    description: "A dynamic web application for managing handwritten notes with an intuitive user experience.",
    features: [
      "Real-time data handling with MongoDB",
      "Responsive and user-friendly design",
      "Optimized performance with Next.js"
    ],
    techStack: ["ReactJS", "NextJS", "MongoDB", "JSX"],
    liveLink: "https://notes-on.vercel.app/",
    repoLink: "https://github.com/Gaurav-Soni24/noteson", 
    owner: "Gaurav Soni"
  },
  {
    image: "/assets/projects/TextUtils.png",
    name: "TextUtils",
    description: "An Front-End Project to edit text automatically.",
    features: [
      "Text to Uppercase, Lowercase, Capitalize, Clear",
      "Copy text to clipboard",
      "Dark mode"
    ],
    techStack: ["React", "Tailwind CSS"],
    liveLink: "https://gaurav-soni24.github.io/TextUtils/",
    repoLink: "https://github.com/Gaurav-Soni24/TextUtils",
    owner: "Gaurav Soni",
  },
  {
    image: "/assets/projects/DrawingBoard.png",
    name: "Drawing Board",
    description: "A simple and interactive drawing board application using HTML5 Canvas.",
    features: [
      "Draw with different colors and brush sizes",
      "Erase and clear the board",
      "Responsive design for all devices"
    ],
    techStack: ["HTML", "CSS", "JavaScript", "Canvas"],
    liveLink: "https://gaurav-soni24.github.io/DrawBoard/",
    repoLink: "https://github.com/Gaurav-Soni24/DrawBoard",
    owner: "Gaurav Soni"
  }
];

const Projects = () => {
  return (
    <motion.div
      className="flex flex-col justify-center items-center min-h-screen px-4 sm:px-6 lg:px-32 py-16 text-black bg-white" 
      id="projects"
    >
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6">Projects</motion.h1>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        navigation
        className="w-full max-w-6xl"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="border-2 border-black rounded-xl flex flex-col items-center text-center shadow-lg w-full h-[500px] bg-white p-4"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h2 className="text-2xl font-bold mt-4">{project.name}</h2>
              <p className="text-gray-800 my-2 text-sm line-clamp-2">{project.description}</p>

              <div className="text-sm text-gray-900 w-full mt-2 flex-grow">
                <strong className="block text-left mb-1">Features:</strong>
                <ul className="list-disc text-left ml-6 text-gray-700 text-xs space-y-1">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="text-sm text-gray-900 mt-2 w-full text-left">
                <strong>Tech Stack:</strong> <span className="text-xs text-gray-700">{project.techStack.join(", ")}</span>
              </div>

              <div className="flex gap-4 mt-4 w-full justify-center">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-black text-black hover:bg-black hover:text-white transition duration-200 rounded-lg text-sm"
                >
                  Live Demo
                </a>
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-black text-black hover:bg-black hover:text-white transition duration-200 rounded-lg text-sm"
                >
                  Repo
                </a>
              </div>

            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default Projects;
