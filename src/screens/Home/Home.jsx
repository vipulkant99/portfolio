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
import FooterSection from "./sections/FooterSection";
import SocialGridSection from "./sections/SocialGridSection";
import { useDarkMode } from "./hook/useDarkMode";

function Home() {
  const [activeSection, setActiveSection] = useState("");
  const [currentProject, setCurrentProject] = useState(null);
  const { isDark } = useDarkMode();
  let isTop = activeSection !== "hero";

  useEffect(() => {
    const sections = ["hero", "about", "experience", "projects", "contact"];
    const observers = [];

    sections.forEach((id) => {
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
          threshold: window.innerWidth < 640 ? 0.3 : 0.6,
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
      <div className={isDark ? "dark bg-white dark:bg-black" : ""}>
        <Header
          className={`${currentProject ? "hidden" : ""}`}
          activeSection={activeSection}
        />
        <div>
          <section
            id="hero"
            className="flex min-h-screen items-center justify-center bg-white sm:h-screen dark:bg-black"
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
            <SocialGridSection />
          </section>

          {/* <section id="contact">
            <ContactSection />
          </section> */}
          {isTop && (
            <div
              className="fixed right-6 bottom-6 z-[9999] flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-neutral-900 p-1 sm:h-16 sm:w-16"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <HiArrowNarrowUp size={36} color="white" />
            </div>
          )}
          <div className="top-0 z-0 h-0.5 w-full bg-gradient-to-r from-neutral-900 via-cyan-400 to-neutral-900" />
          <FooterSection />
        </div>
      </div>
    </>
  );
}

export default Home;
