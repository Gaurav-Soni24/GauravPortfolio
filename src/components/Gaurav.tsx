import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Home = () => {
  return (
    <div>
      <motion.div
        className="flex flex-col lg:flex-col justify-center items-center bg-white min-h-screen px-6 sm:px-12 lg:px-32 py-16 text-black w-full" id="Gaurav"
      >
        <div className="hidden lg:block">
          <motion.div
            initial={{ opacity: 0, x: 150, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}

            className="text-black absolute top-32 left-72">
            <motion.img
              animate={{ x: [0, 5, -5, 0], y: [0, -3, 3, 0] }} // Small shake motion
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} // Slow & smooth
              src='./assets/js.png' alt="JS" className="w-32 h-32 rotate-12" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 150, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}

            className="text-black absolute top-60 left-32">
            <motion.img
              animate={{ x: [0, -5, 5, 0], y: [0, 3, -3, 0] }} // Small shake motion
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} // Slow & smooth
              src='./assets/tailwind.png' alt="JS" className="w-32 h-32 -rotate-6" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 150, y: -50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}

            className="text-black absolute bottom-60 left-32">
            <motion.img
              animate={{ x: [0, -5, 5, 0], y: [0, 3, -3, 0] }} // Small shake motion
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} // Slow & smooth
              src='./assets/vercel.png' alt="JS" className="w-32 h-32 -rotate-3" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 150, y: -50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}

            className="text-black absolute bottom-32 left-72">
            <motion.img
              animate={{ x: [0, 5, -5, 0], y: [0, 3, -3, 0] }} // Small shake motion
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} // Slow & smooth
              src='./assets/firebase.png' alt="JS" className="w-36 h-36 -rotate-12" />
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: -150, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}

            className="text-black absolute top-32 right-72">
            <motion.img
              animate={{ x: [0, 5, -5, 0], y: [0, -3, 3, 0] }} // Small shake motion
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} // Slow & smooth
              src='./assets/mongo.png' alt="JS" className="w-32 h-32 -rotate-12" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -150, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}

            className="text-black absolute top-64 right-32">
            <motion.img
              animate={{ x: [0, -5, 5, 0], y: [0, 3, -3, 0] }} // Small shake motion
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} // Slow & smooth
              src='./assets/nodeJs.png' alt="JS" className="h-20 rotate-6" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -150, y: -50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}

            className="text-black absolute bottom-60 right-32">
            <motion.img
              animate={{ x: [0, 5, -5, 0], y: [0, -3, 3, 0] }} // Small shake motion
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} // Slow & smooth
              src='./assets/react.png' alt="JS" className="w-32 h-32 rotate-3" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -150, y: -50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}

            className="text-black absolute bottom-32 right-72">
            <motion.img
              animate={{ x: [0, -5, 5, 0], y: [0, 3, -3, 0] }} // Small shake motion
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} // Slow & smooth 
              src='./assets/express.png' alt="JS" className="w-56 rotate-12" />
          </motion.div>
        </div>

        {/* Social Icons Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}

          className="flex flex-row lg:flex-row justify-evenly items-center gap-4"
        >
          {[
            { url: "https://www.linkedin.com/in/gauravsoni24" },
            { url: "https://leetcode.com/u/_gauravsoni_11/" },
            { url: "https://github.com/Gaurav-Soni24" },
            { url: "https://www.instagram.com/_gaurav.soni_/" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}

            >
              <SocialIcon url={item.url} className="w-10 h-10 md:w-12 md:h-12" />
            </motion.div>
          ))}
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}

          className="bg-transparent w-full lg:w-3/4 py-12 sm:py-16 px-6 sm:px-12 lg:px-20 text-center lg:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}

            className="text-black font-bold text-4xl sm:text-5xl text-center"
          >
            Hi, I'm Gaurav Soni
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}

            className="text-gray-800 font-semibold text-2xl sm:text-3xl mt-3 text-center"
          >
            Computer Science & Engineering Student
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}

            className="text-gray-800 text-lg sm:text-xl mt-4 text-center"
          >
            Third-year undergraduate engineering student at Government
            Engineering College, Bilaspur.
          </motion.p>
        </motion.div>

        {/* Fixed "Know More" Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          className="px-6 py-3 border-2 border-black text-black flex items-center gap-2 rounded-lg hover:bg-black hover:text-white duration-300"
        >
          Know More <ArrowDown size={24} />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Home;
