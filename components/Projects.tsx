"use client";
import React from "react";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center"
      id="projects"
    >
      <h1 className="text-3xl lg:text-4xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        My Projects
      </h1>
      <p className="text-center text-xl font-semibold text-white">
        Check out my work
      </p>
      <p className="px-10 text-gray-300 py-10">
        I've worked on a variety of projects, from simple websites to complex
        web applications. Here are a few of my favorites.
      </p>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          videoSrc="/project1.JPG"
          title="Home repairs & handywork"
          description="For the Client View, I implemented a streamlined interface where users can explore and book various services effortlessly. Key features include a service catalog with filtering options, booking management with status updates, and user profile editing, all designed with a focus on user experience. The interface supports English and French, ensuring accessibility for a broader audience."
          techStack={[
            "Next.js",
            "Typescript",
            "Tailwind CSS",
            "Prisma",
            "MongoDB",
            "Cloudinary",
            "Shadcn UI",
          ]}
          websiteLink="https://ifranex.vercel.app/en"
        />
        <ProjectCard
          videoSrc="/project2.JPG"
          title="Admin dashboard for managing bookings"
          description="The Admin view offers a streamlined interface for efficiently managing the platform. Admins can easily oversee bookings, with options to view, filter, and update appointment statuses, including confirming or canceling bookings. User management is straightforward, allowing admins to view account details and delete accounts when needed. Service management features enable adding, editing, or removing services. The analytics dashboard provides insights into user metrics and booking statistics. With a responsive design, the admin interface remains accessible and functional across all devices, ensuring convenient management from anywhere. The platform supports both English and French languages, catering to a diverse user base."
          techStack={[
            "Next.js",
            "Typescript",
            "Tailwind CSS",
            "Prisma",
            "MongoDB",
            "Cloudinary",
            "Shadcn UI",
          ]}
          websiteLink="https://ifranex.vercel.app/en/admin/dashboard"
        />
        <ProjectCard
          videoSrc="/project3.JPG"
          title="Car rental app"
          description="Rahioui is a user-friendly platform designed for seamless car booking experiences. Users can browse through a variety of available vehicles, filter by preferences such as type and price, and easily make bookings. "
          techStack={[
            "Next.js",
            "Typescript",
            "Tailwind CSS",
            "Prisma",
            "PostgreSQL",
          ]}
          websiteLink="https://rahioui-cars.vercel.app/"
        />
      </div>
    </motion.div>
  );
};

export default Projects;
