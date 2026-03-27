import React from "react";
import { motion } from "framer-motion";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { FaGithub, FaBriefcase, FaLaptopCode } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const About = () => {

  const handleDownload = () => {
    const pdfUrl = '/assets/Resume.pdf';

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Gaurav_Soni_Resume.pdf'; 
    link.click();
  };

  return (
    <motion.div
      className="flex flex-col lg:flex-row justify-center items-center bg-white min-h-screen px-6 sm:px-12 lg:px-32 py-16 text-black"
      id="about" 
    >
      {/* About Me Text */}
      <motion.div
        initial={{ transform: "rotate(-90deg)", opacity: 0, x: -100 }}
        whileInView={{ transform: "rotate(-90deg)", opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        style={{ whiteSpace: "nowrap" }}
        className="hidden lg:block text-6xl md:text-8xl font-bold text-gray-900"
      >
        About Me
      </motion.div>

      {/* About Me Text for Small Screens */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="lg:hidden text-6xl md:text-7xl font-bold text-gray-900 mb-6"
      >
        About Me
      </motion.div>

      {/* About Content Section */}
      <div className="w-full lg:w-2/3 h-full flex flex-col gap-8">

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="flex justify-evenly mt-4 lg:justify-start lg:gap-9"
        >
          {/* Medal Style Stats */}
          {[
            { icon: <FaBriefcase />, value: "1+", label: "Years Exp.", bgColor: "bg-orange-500", textColor: "text-orange-600" },
            { icon: <FaGithub />, value: "450+", label: "Contributions", bgColor: "bg-gray-800", textColor: "text-gray-900" },
            { icon: <FaLaptopCode />, value: "5+", label: "Projects", bgColor: "bg-blue-500", textColor: "text-blue-700" },
            { icon: <SiLeetcode />, value: "70+", label: "LeetCode", bgColor: "bg-yellow-500", textColor: "text-yellow-600" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.2, ease: "easeOut" }}
              className="text-center flex flex-col items-center"
            >
              <div className={`w-16 h-16 ${item.bgColor} text-white text-3xl flex items-center justify-center rounded-full shadow-lg`}>
                {item.icon}
              </div>
              <h2 className={`text-3xl font-bold ${item.textColor} mt-3`}>{item.value}</h2>
              <p className="text-sm font-medium text-gray-600 mt-1">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-800 leading-relaxed text-left md:text-left"
        >
          <p className="mb-4">
            I’m <span className="font-bold">Gaurav Soni</span>, a passionate web developer and problem solver.
            Currently pursuing my B.Tech in Computer Science & Engineering at
            <span className="font-semibold"> Government Engineering College, Bilaspur</span>.
          </p>
          <p>
            I have worked on many real-world projects! 
            I love building scalable web applications, optimizing performance, and continuously improving my skills.
          </p>
        </motion.div>

        {/* Skills & Details */}
        <motion.ul
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="list-disc list-inside text-lg text-gray-700 space-y-2 text-left"
        >
          <li>💻 Frontend: React.js, Next.js, TypeScript, JavaScript, HTML, CSS, Tailwind CSS</li>
          <li>🗄️ Backend:  Node.js, Express.js, MongoDB, Cloud Firestore, PSQL, MySQL</li>
          <li>🎓 CGPA: <span className="font-semibold">8.33</span></li>
          <li>⚡ Interested in Scalable Architectures & Open Source</li>
        </motion.ul>

        {/* Download CV Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          className="w-48 mx-auto md:mx-0 text-center px-6 py-3 border-2 border-black text-black flex items-center justify-center gap-2 rounded-lg hover:bg-black hover:text-white duration-300"
          onClick={handleDownload}
        >
          Download CV <IoCloudDownloadOutline size={24} />
        </motion.button>

      </div>
    </motion.div>
  );
};

export default About;