"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useTheme } from "next-themes"; 

function Skills() {
  const { theme } = useTheme(); 

  const logos = [
    "/node-js.png",
    "/express.png",
    "/js.png",
    "/ts.png",
    "/react.png",
    "/next.png",
    "/tailwind.png",
    "/postger.png",
    "/mongo.png",
    "/docker.png",
    "/prisma.png",
    "/git.png",
    theme === "dark" ? "/github-light.png" : "/github-dark.png", 
    "/java.png",
    "/spring.png",
    "/python.png",
    "/c.png",
    "/figma1.png",
  ];

  useEffect(() => {
    gsap.registerPlugin(MotionPathPlugin);

    const tl = gsap.timeline({
      defaults: { duration: 0.5, ease: "power3.out" },
    });

    logos.forEach((src, index) => {
      const logo = `.logo-${index}`;

      tl.fromTo(
        logo,
        { rotation: 0, x: -100 },
        { rotation: 360, x: 0 },
        `+=${index * 0.0}`
      );
    });
  }, [logos]);

  return (
    <section id="skills">
      <div className="flex flex-col items-center justify-center py-10 px-4 sm:py-16">
        <h1 className="text-3xl lg:text-4xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          My Skills
        </h1>
        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-14">
          {logos.map((src, index) => (
            <div
              key={index}
              className={`custom-cursor-pointer logo-container logo-${index} cursor-pointer flex items-center justify-center hover:scale-110`}
            >
              <img src={src} alt={`Logo ${index}`} className="rounded-md" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
