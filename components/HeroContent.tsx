"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import Image from "next/image";
import { IconCloudDemo } from "./IconCloudDemo";

const HeroContent = () => {
  return (
    <section id="about-me">
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row items-center justify-center px-6 sm:px-10 md:px-16 lg:px-20 w-full z-20"
      >
        <div className="flex flex-col gap-6 mt-6 text-center md:text-left text-white max-w-[600px] w-full">
          <motion.div
            variants={slideInFromLeft(0.8)}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold"
          >
            <span>
              👋 Welcome to
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                Nabil's{" "}
              </span>
              Portfolio. Enjoy exploring!
            </span>
          </motion.div>
          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-base sm:text-lg lg:text-xl text-gray-400"
          >
            I'm a Full Stack Software Engineer with experience in Web, Mobile,
            and Software development. Check out my projects and skills.
          </motion.p>
        </div>

        <motion.div
          variants={slideInFromRight(1)}
          className="w-full h-auto md:h-full flex justify-center items-center mt-10 md:mt-0"
        >
          <IconCloudDemo />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroContent;
