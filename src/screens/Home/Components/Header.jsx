import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(() => window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration- ${
        scrolled
          ? "bg-white/10 shadow backdrop-blur-md  rounded-4xl mx-36 my-6"
          : "bg-black shadow backdrop-blur-md "
      }`}
    >
      <div className="mx-auto px-4 py-3 flex justify-between items-center">
        <motion.img
          className="h-12 w-12 rounded-full m-0.5"
          src="/profile_pic.jpg"
          alt="profilePic"
        />
        {/* <h1 className="text-2xl font-semibold text-slate-100 font-inter">
          Your Name
        </h1> */}
        <nav className="space-x-8">
          <a
            href="#about"
            className="text-lg text-slate-400 hover:text-slate-100 font-inter"
          >
            About
          </a>
          <a
            href="#education"
            className="text-lg text-slate-400 hover:text-slate-100 font-inter"
          >
            Education
          </a>
          <a
            href="#experience"
            className="text-lg text-slate-400 hover:text-slate-100 font-inter"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="text-lg text-slate-400 hover:text-slate-100 font-inter"
          >
            Projects
          </a>
          <a
            href="#"
            className="text-lg text-slate-400 hover:text-slate-100 font-inter"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
