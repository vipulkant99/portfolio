import { useEffect, useState } from "react";
import { ScrollAnimation } from "../ScrollAnimation";
import Header from "./Components/Header";
import AboutSection from "./sections/AboutSection";
import EducationSection from "./sections/EducationSection";
import HeroSection from "./sections/HeroSection";
import ProjectSection from "./sections/ProjectSection";
import TestimonialSection from "./sections/TestimonialSection";
import ContactSection from "./sections/ContactSection";

function Home() {
  const [activeSection, setActiveSection] = useState("");
  const [currentProject, setCurrentProject] = useState(null);

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
              setActiveSection("");
            } else {
              setActiveSection(id);
            }
          }
        },
        {
          threshold: 0.6,
        }
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
            ? "blur-sm pointer-events-none select-none overflow-hidden"
            : ""
        }`}
      ></div>
      <Header
        className={`${currentProject ? "hidden" : ""}`}
        activeSection={activeSection}
      />
      <div>
        <section
          id="hero"
          className="bg-black h-screen flex items-center justify-center"
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
        <div className="w-full h-0.5 top-0 bg-gradient-to-r from-neutral-900 via-cyan-400 to-neutral-900" />
        <div className="text-gray-400 bg-neutral-900 p-2 text-xs">
          © Built from scratch using React & Tailwind by Vipul Kant Chaturvedi
        </div>
      </div>
    </>
  );
}

export default Home;
