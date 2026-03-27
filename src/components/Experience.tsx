import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const experiences = [
  {
    role: "React Developer Intern",
    company: "7 Seers",
    date: "Jul 2025 – Present",
    location: "Remote",
    details: [
      "Developed responsive web applications using React.js, translating high-fidelity UI/UX designs into pixel-perfect components, enhancing user retention by 15%",
      "Streamlined legacy codebases across 3 internal projects through extensive debugging and refactoring, improving overall system performance by 20%",
      "Managed version control via Git, conducted peer code reviews, and orchestrated seamless deployments to live production environments"
    ],
  },
  {
    role: "ReactJS Intern",
    company: "Medius AI",
    date: "March 2025 – Oct 2025",
    location: "Remote",
    details: [
      "Built scalable web solutions utilizing React.js and Next.js, focusing heavily on component reusability to achieve 25% faster render times",
      "Integrated robust RESTful APIs and external data pipelines to power dynamic, real-time frontend experiences, reducing data latency by 15%",
      "Partnered with backend engineers and product designers to deliver seamless user journeys and highly interactive interfaces"
    ],
  },
];

const Experience = () => {
  return (
    <div className="flex flex-col items-center py-16 px-6 sm:px-12 lg:px-32 bg-white" id="experience">
      <motion.h2 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl lg:text-6xl font-bold text-center text-black mb-12"
      >
        My Experience
      </motion.h2>

      <div className="relative w-full max-w-4xl">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-[2px] bg-black h-full"></div>

        {/* Experience Items */}
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
            className={`relative flex flex-col md:flex-row items-center w-full mb-12 ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
          >
            {/* Dot Indicator */}
            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-5 h-5 bg-black rounded-full border-4 border-white z-10"></div>

            {/* Content Box */}
            <div className={`w-full pl-12 md:pl-0 md:w-[45%] ${index % 2 === 0 ? "md:mr-auto md:text-left" : "md:ml-auto md:text-left"}`}>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-black hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <FaBriefcase className="text-blue-700 text-xl" />
                  <h3 className="text-2xl font-bold text-black">{exp.role}</h3>
                </div>
                
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{exp.company}</h4>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-black/70 text-sm mb-4">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt /> {exp.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt /> {exp.location}
                  </div>
                </div>

                <ul className="list-disc list-inside text-gray-700 text-sm space-y-2">
                  {exp.details.map((point, i) => (
                    <li key={i} className="leading-relaxed">{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
