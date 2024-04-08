"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";

function Skills() {
  const logos = [
    "/node-js.png",
    "/express.png",
    "/js.png",
    "/ts.png",
    "/react.png",
    "/next.png",
    "/tailwind.png",
    "/postger.png",
    "/docker.png",
    "/mongo.png",
    "/git.png",
    "/github.png",
    "/java.png",
    "/spring.png",
    "/python.png",
    "/c.png",
  ];

  return (
    <section id="skills">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInFromLeft(0.5)}
        className="flex flex-col items-center justify-center py-10 px-4 sm:py-16"
      >
        <h1 className="text-2xl lg:text-4xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          My Skills
        </h1>
        <div className="grid grid-cols-3 md:grid-cols-8 lg:grid-cols-8 gap-12">
          {logos.map((src, index) => (
            <motion.div
              key={index}
              className="cursor-pointer flex items-center justify-center hover:scale-110"
              whileHover={{ rotate: 90, scale: 0.8 }}
            >
              <motion.img
                src={src}
                alt={`Logo ${index}`}
                width={100}
                height={100}
                className="rounded-md"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
