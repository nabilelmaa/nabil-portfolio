"use client";
import React from "react";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center"
      id="projects"
    >
      <h1 className="text-2xl lg:text-4xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        My Projects
      </h1>
      <p className="text-center text-xl font-semibold text-white">
        Check out my work
      </p>
      <p className="text-white py-10">
        I've worked on a variety of projects, from simple websites to complex
        web applications. Here are a few of my favorites.
      </p>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          videoSrc="/hrh-user.webm"
          title="Home repairs & handywork"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          techStack={[
            "Next.js",
            "Typescript",
            "Tailwind CSS",
            "Prisma",
            "MongoDB",
            "Cloudinary",
            "Shadcn UI",
          ]}
        />
        <ProjectCard
          videoSrc="/hrh-admin.webm"
          title="Admin dashboard for managing bookings"
          description="Rahioui is a fullstack web app that allows people to book cars in Ifrane city. It provides a friendly/intiuitive user interface to make it easier for clients."
          techStack={[
            "Next.js",
            "Typescript",
            "Tailwind CSS",
            "Prisma",
            "MongoDB",
            "Cloudinary",
            "Shadcn UI",
          ]}
        />
        <ProjectCard
          videoSrc="/car.webm"
          title="Car rental app"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          techStack={[
            "Next.js",
            "Typescript",
            "Tailwind CSS",
            "Prisma",
            "PostgreSQL",
          ]}
        />
      </div>
    </motion.div>
  );
};

export default Projects;
