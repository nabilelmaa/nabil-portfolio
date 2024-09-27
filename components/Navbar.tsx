"use client";

import { motion, AnimatePresence } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes"; // Import useTheme for theme switching

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

  const { theme, setTheme, resolvedTheme } = useTheme();

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
        className="fixed top-0 left-0 right-0 z-50  bg-opacity-80 backdrop-blur-md custom-cursor-auto dark:bg-[#030014] bg-white"
      >
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
            />

            <svg
              className="swap-off h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            <svg
              className="swap-on h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

          {!isResumePage &&
            (isMobile ? (
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none md:hidden"
              >
                <Image
                  src={
                    isMenuOpen
                      ? resolvedTheme === "dark"
                        ? "/close-light.svg"
                        : "/close-dark.svg"
                      : resolvedTheme === "dark"
                      ? "/menu-light.svg"
                      : "/menu-dark.svg"
                  }
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
                      className={`custom-cursor-pointer light:text-gray-200 dark:hover:text-white hover:text-gray-400 focus:outline-none transition-colors duration-200 ${
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
            className="fixed inset-x-0 bottom-0 z-40 dark:bg-gray-900 bg-gray-100 bg-opacity-95 backdrop-blur-md rounded-t-3xl md:hidden"
          >
            <nav className="max-w-4xl mx-auto px-4 py-8">
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      className={`w-full text-left text-lg py-2 px-4 rounded-lg transition-colors duration-200 focus:outline-none ${
                        activeSection === item.id
                          ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white"
                          : "dark:text-gray-200 hover:bg-gray-800"
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
