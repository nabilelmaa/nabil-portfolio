"use client";
import React from "react";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center py-10 sm:py-16"
      id="projects"
    >
      <h1 className="text-3xl lg:text-4xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        My Projects
      </h1>
      <p className="text-center text-xl font-semibold dark:text-white">
        Check out my work
      </p>
      <p className="px-10 dark:text-gray-300 py-10 text-center">
        I've worked on a variety of projects, from simple websites to complex
        web applications. Here are a few of my favorites.
      </p>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          imageSrc="/project1.png"
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
          imageSrc="/project2.png"
          title="Admin dashboard for managing bookings"
          description="The Admin view offers a streamlined interface for efficiently managing the platform. Admins can easily oversee bookings, with options to view, filter, and update appointment statuses, including confirming or canceling bookings. User management is straightforward, allowing admins to view account details and delete accounts when needed. Service management features enable adding, editing, or removing services. The analytics dashboard provides insights into user metrics and booking statistics. With a responsive design, the admin interface remains accessible and functional across all devices, ensuring convenient management from anywhere. The platform supports both English and French languages, catering to a diverse user base. To access the admin view, please send me a direct message. I'll provide you with a 6-digit authentication code required for secure access."
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
          imageSrc="/Capture.png"
          title="Collabease"
          description="Collabease is a collaborative task management application designed to streamline teamwork and enhance productivity. It enables users to create and
                       manage tasks, track progress, and communicate effectively within teams. With features such as user authentication, real-time notifications, and role based access. Collabease facilitates efficient project management."
          techStack={[
            "React.js",
            "Vite",
            "Typescript",
            "Tailwind CSS",
            "Shadcn UI",
            "Sping Boot",
            "Data JPA",
            "PostgreSQL",
            "Websockets",
          ]}
          websiteLink=""
        />
      </div>
    </motion.div>
  );
};

export default Projects;
