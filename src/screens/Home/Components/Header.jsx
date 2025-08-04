import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Header({ activeSection, className }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(() => window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItemClass = (section) =>
    `text-lg font-inter transition-all duration-200 ease-in-out hover:bg-white/10 hover:p-2 hover:rounded-lg w-auto ${
      activeSection === section
        ? "text-white font-bold"
        : "text-slate-400 hover:text-slate-100"
    }`;

  function onHeaderClick(sectionName) {
    return document
      .getElementById(sectionName)
      ?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${className} ${
        scrolled
          ? "bg-white/10 shadow backdrop-blur-md  rounded-4xl mx-36 my-6"
          : "bg-black shadow backdrop-blur-md "
      }`}
    >
      <div className="mx-auto px-4 py-3 flex justify-between items-center">
        <motion.img
          className="h-12 w-12 rounded-full m-0.5 cursor-pointer hover:scale-105"
          src="/profile_pic.jpg"
          alt="profilePic"
          onClick={() => onHeaderClick("hero")}
        />
        {/* <h1 className="text-2xl font-semibold text-slate-100 font-inter">
          Your Name
        </h1> */}
        <nav className="space-x-8">
          <button
            onClick={() => onHeaderClick("about")}
            className={navItemClass("about")}
          >
            About
          </button>
          {/* <a href="#education" className={navItemClass("education")}>
            Education
          </a> */}
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
        </nav>
      </div>
    </header>
  );
}
