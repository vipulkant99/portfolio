import { useEffect, useState } from "react";
import { ScrollAnimation } from "../ScrollAnimation";
import Header from "./Components/Header";
import AboutSection from "./sections/AboutSection";
import EducationSection from "./sections/EducationSection";
import HeroSection from "./sections/HeroSection";
import ProjectSection from "./sections/ProjectSection";
import TestimonialSection from "./sections/TestimonialSection";
import ContactSection from "./sections/ContactSection";
import { HiArrowNarrowUp } from "react-icons/hi";
import { useDarkMode } from "./hook/DarkModeContext";

function Home() {
  const [activeSection, setActiveSection] = useState("");
  const [currentProject, setCurrentProject] = useState(null);
  const { isDark } = useDarkMode();
  let isTop = activeSection !== "hero";

  useEffect(() => {
    const sections = ["hero", "about", "experience", "projects", "contact"];
    const observers = [];

    sections.forEach((id) => {
      console.log(id);
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            if (id === "hero") {
              setActiveSection("hero");
            } else {
              setActiveSection(id);
            }
          }
        },
        {
          threshold: 0.6,
        },
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <>
      <div
        className={`${
          currentProject
            ? "pointer-events-none overflow-hidden blur-sm select-none"
            : ""
        }`}
      ></div>
      <div className={isDark ? "dark" : ""}>
        <Header
          className={`${currentProject ? "hidden" : ""}`}
          activeSection={activeSection}
        />
        <div>
          <section
            id="hero"
            className="flex h-screen items-center justify-center bg-white dark:bg-black"
          >
            <HeroSection />
          </section>

          <section id="about">
            <AboutSection />
          </section>

          <section id="experience">
            <EducationSection />
          </section>

          <section id="projects" className="min-h-screen">
            <ProjectSection
              currentProject={currentProject}
              setCurrentProject={setCurrentProject}
            />
          </section>
          <section id="testimonial">
            <TestimonialSection />
          </section>
          <section id="contact">
            <ContactSection />
          </section>
          <div className="top-0 h-0.5 w-full bg-gradient-to-r from-neutral-900 via-cyan-400 to-neutral-900" />
          <div className="bg-neutral-100 p-2 text-xs text-slate-800 dark:bg-neutral-900 dark:text-gray-400">
            © Built from scratch using React & Tailwind by Vipul Kant
            Chaturvedi
          </div>
        </div>
        {isTop && (
          <div
            className="fixed right-6 bottom-6 z-50 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-neutral-900 p-1"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <HiArrowNarrowUp size={36} color="white" />
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
