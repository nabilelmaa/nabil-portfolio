"use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { slideInFromLeft } from "@/utils/motion";

// function Skills() {
//   const logos = [
//     "/node-js.png",
//     "/express.png",
//     "/js.png",
//     "/ts.png",
//     "/react.png",
//     "/next.png",
//     "/tailwind.png",
//     "/postger.png",
//     "/docker.png",
//     "/mongo.png",
//     "/git.png",
//     "/github.png",
//     "/java.png",
//     "/spring.png",
//     "/python.png",
//     "/c.png",
//   ];

//   return (
//     <section id="skills">
//       <motion.div
//         initial="hidden"
//         animate="visible"
//         variants={slideInFromLeft(0.5)}
//         className="flex flex-col items-center justify-center py-10 px-4 sm:py-16"
//       >
//         <h1 className="text-2xl lg:text-4xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
//           My Skills
//         </h1>
//         <div className="grid grid-cols-3 md:grid-cols-8 lg:grid-cols-8 gap-12">
//           {logos.map((src, index) => (
//             <motion.div
//               key={index}
//               className="cursor-pointer flex items-center justify-center hover:scale-110"
//               whileHover={{ rotate: 90, scale: 0.8 }}
//             >
//               <motion.img
//                 src={src}
//                 alt={`Logo ${index}`}
//                 width={100}
//                 height={100}
//                 className="rounded-md"
//               />
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// }

// export default Skills;
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

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
  }, []);

  return (
    <section id="skills">
      <div className="flex flex-col items-center justify-center py-10 px-4 sm:py-16">
        <h1 className="text-2xl lg:text-4xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          My Skills
        </h1>
        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-14">
{logos.map((src, index) => (
  <div
    key={index}
    className={`logo-container logo-${index} cursor-pointer flex items-center justify-center hover:scale-110`}
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

// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// function Skills() {
//   const logos = [
//     "/node-js.png",
//     "/express.png",
//     "/js.png",
//     "/ts.png",
//     "/react.png",
//     "/next.png",
//     "/tailwind.png",
//     "/postger.png",
//     "/docker.png",
//     "/mongo.png",
//     "/git.png",
//     "/github.png",
//     "/java.png",
//     "/spring.png",
//     "/python.png",
//     "/c.png",
//   ];

//   const skillsRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const tl = gsap.timeline({ paused: true });
//     tl.from(".logo-container", {
//       opacity: 0,
//       y: 50,
//       stagger: 0.2,
//       onComplete: () => {
//         console.log("Logos animated successfully");
//       },
//     });

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           console.log("Intersection observer entry:", entry);
//           if (entry.isIntersecting) {
//             console.log("Skills section is visible");
//             console.log("Skills section reference:", skillsRef.current); // Check the current reference
//             tl.play(); // Try triggering animation
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );

//     if (skillsRef.current) {
//       observer.observe(skillsRef.current);
//     }

//     return () => {
//       observer.disconnect();
//     };
//   }, [skillsRef]); // Add skillsRef as a dependency

//   // Output skillsRef.current to console to inspect its value
//   console.log("Current skillsRef:", skillsRef.current);

//   return (
//     <section id="skills" ref={skillsRef}>
//       <div className="flex flex-col items-center justify-center py-10 px-4 sm:py-16">
//         <h1 className="text-2xl lg:text-4xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
//           My Skills
//         </h1>
//         <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-14">
//           {logos.map((src, index) => (
//             <div
//               key={index}
//               className={`logo-container logo-${index} cursor-pointer flex items-center justify-center hover:scale-110`}
//             >
//               <img src={src} alt={`Logo ${index}`} className="rounded-md" />

//             </div>
            
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Skills;
