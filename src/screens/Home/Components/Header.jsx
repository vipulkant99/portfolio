import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../hook/DarkModeContext";
import { HiMenu, HiOutlineMoon, HiOutlineSun, HiX } from "react-icons/hi";

export default function Header({ activeSection, className }) {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const { isDark, toggleDarkMode } = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(() => window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItemClass = (section) =>
    `text-base font-inter transition-all duration-200 ease-in-out hover:bg-black dark:hover:bg-white/10 hover:p-2 hover:rounded-lg w-auto ${
      activeSection === section
        ? "dark:text-white text-black font-bold"
        : "dark:text-slate-400 dark:hover:text-slate-100 text-neutral-900 hover:text-slate-100"
    }`;

  function onHeaderClick(sectionName) {
    return document
      .getElementById(sectionName)
      ?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 px-4 transition-all duration-300 ${className} ${
        scrolled
          ? "mx-2 my-2 rounded-4xl bg-white/10 shadow backdrop-blur-md sm:mx-12 sm:my-4"
          : "bg-white shadow backdrop-blur-md dark:bg-black"
      }`}
    >
      <div className="mx-auto flex items-center justify-between px-4 py-3">
        <motion.img
          className="m-0.5 h-12 w-12 cursor-pointer rounded-full hover:scale-105"
          src="/profile_pic.jpg"
          alt="profilePic"
          onClick={() => navigate("/")}
        />
        {/* <h1 className="text-2xl font-semibold text-slate-100 font-inter">
          Your Name
        </h1> */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <HiX size={24} className={isDark ? "text-white" : "text-black"} />
            ) : (
              <HiMenu
                size={24}
                className={isDark ? "text-white" : "text-black"}
              />
            )}
          </button>
        </div>

        <nav className="hidden items-center space-x-8 md:flex">
          <button onClick={toggleDarkMode}>
            {isDark ? (
              <HiOutlineSun color="white" size={20} />
            ) : (
              <HiOutlineMoon color="black" size={20} />
            )}
          </button>
          {["about", "experience", "projects", "testimonial", "contact"].map(
            (section) => (
              <button
                key={section}
                onClick={() => onHeaderClick(section)}
                className={navItemClass(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ),
          )}
        </nav>

        {menuOpen && (
          <div className="absolute top-full left-0 flex w-full flex-col space-y-4 bg-white p-4 shadow-md md:hidden dark:bg-black">
            <button onClick={toggleDarkMode} className="self-end">
              {isDark ? (
                <HiOutlineSun color="white" size={20} />
              ) : (
                <HiOutlineMoon color="black" size={20} />
              )}
            </button>
            {["about", "experience", "projects", "testimonial", "contact"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => {
                    onHeaderClick(section);
                    setMenuOpen(false);
                  }}
                  className={navItemClass(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ),
            )}
          </div>
        )}

        {/* <nav className="space-x-8">
          <button onClick={toggleDarkMode}>
            {isDark ? (
              <HiOutlineSun color="white" size={20} />
            ) : (
              <HiOutlineMoon color="black" size={20} />
            )}
          </button>
          <button
            onClick={() => onHeaderClick("about")}
            className={navItemClass("about")}
          >
            About
          </button>
          <button
            onClick={() => onHeaderClick("experience")}
            className={navItemClass("experience")}
          >
            Experience
          </button>
          <button
            onClick={() => onHeaderClick("projects")}
            className={navItemClass("projects")}
          >
            Projects
          </button>
          <button
            onClick={() => onHeaderClick("testimonial")}
            className={navItemClass("testimonial")}
          >
            Testimonials
          </button>
          <button
            onClick={() => onHeaderClick("contact")}
            className={navItemClass("contact")}
          >
            Contact
          </button>
        </nav> */}
      </div>
    </header>
  );
}
