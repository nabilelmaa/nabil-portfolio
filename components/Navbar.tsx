"use client";

import { motion, AnimatePresence } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";

const navItems = [
  { id: "about-me", label: "About me" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "find-me", label: "Find Me" },
  { id: "resume", label: "Resume" },
];

function Header() {
  const pathname = usePathname();
  const isResumePage = pathname === "/resume";
  const [activeSection, setActiveSection] = useState("about-me");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isResumePage) {
      const handleScroll = () => {
        const sections = navItems
          .map((item) => document.getElementById(item.id))
          .filter((el): el is HTMLElement => el !== null);
        const scrollPosition = window.scrollY + 100;

        for (let i = sections.length - 1; i >= 0; i--) {
          if (sections[i].offsetTop <= scrollPosition) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isResumePage]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <motion.header
        initial="hidden"
        animate="visible"
        variants={slideInFromTop}
        className="fixed top-0 left-0 right-0 z-50 bg-opacity-80 backdrop-blur-md"
      >
        <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center mr-2">
              <span className="text-white text-xl font-bold">N</span>
            </div>
          </div>
          {!isResumePage &&
            (isMobile ? (
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none md:hidden"
              >
                <Image
                  src={isMenuOpen ? "/close.svg" : "/menu.svg"}
                  alt={isMenuOpen ? "Close menu" : "Open menu"}
                  width={24}
                  height={24}
                />
              </button>
            ) : (
              <ul className="hidden md:flex space-x-6">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      className={`text-gray-200 hover:text-white focus:outline-none transition-colors duration-200 ${
                        activeSection === item.id
                          ? "border-b-2 border-cyan-500"
                          : ""
                      }`}
                      onClick={() => scrollToSection(item.id)}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            ))}
        </nav>
      </motion.header>

      <AnimatePresence>
        {!isResumePage && isMobile && isMenuOpen && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "25%" }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-x-0 bottom-0 z-40 bg-gray-900 bg-opacity-95 backdrop-blur-md rounded-t-3xl md:hidden"
          >
            <nav className="max-w-4xl mx-auto px-4 py-8">
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      className={`w-full text-left text-lg py-2 px-4 rounded-lg transition-colors duration-200 focus:outline-none ${
                        activeSection === item.id
                          ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white"
                          : "text-gray-200 hover:bg-gray-800"
                      }`}
                      onClick={() => scrollToSection(item.id)}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
