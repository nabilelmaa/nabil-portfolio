"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

function Header() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideInFromTop}
      className="m-4 flex justify-center"
    >
      <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
        <div className="flex justify-between w-full h-auto border border-[#7042f861] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
          <button
            className="cursor-pointer hover:text-blue-200 focus:outline-none"
            onClick={() => scrollToSection("about-me")}
          >
            About me
          </button>
          <button
            className="cursor-pointer hover:text-blue-200 focus:outline-none"
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </button>
          <button
            className="cursor-pointer hover:text-blue-200 focus:outline-none"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </button>
          <button
            className="cursor-pointer hover:text-blue-200 focus:outline-none"
            onClick={() => scrollToSection("resume")}
          >
            Resume
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Header;