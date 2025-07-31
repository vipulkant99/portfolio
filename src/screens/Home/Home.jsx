import { useEffect, useState } from "react";
import { ScrollAnimation } from "../ScrollAnimation";
import Header from "./Components/Header";
import AboutSection from "./sections/AboutSection";
import EducationSection from "./sections/EducationSection";
import HeroSection from "./sections/HeroSection";

function Home() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = [
      "hero",
      "about",
      "education",
      "experience",
      "projects",
      "contact",
    ];
    const observers = [];

    sections.forEach((id) => {
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
      <Header activeSection={activeSection} />
      <div>
        <section
          id="hero"
          className="bg-black h-screen flex items-center justify-center"
        >
          <HeroSection />
        </section>

        <ScrollAnimation>
          <section id="about">
            <AboutSection />
          </section>
        </ScrollAnimation>

        <ScrollAnimation>
          <section id="education">
            <EducationSection />
          </section>
        </ScrollAnimation>
      </div>
    </>
  );
}

export default Home;
