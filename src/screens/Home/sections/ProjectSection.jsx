import { IoRocketOutline } from "react-icons/io5";
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import HeroButton from "../Components/HeroButton";
import { ScrollAnimation } from "../../ScrollAnimation";
import { projectDetails } from "../../../util/constants";
import SingleProject from "../Components/SingleProject";
import { useOutsideClick } from "../hook/useOutsideClick";

function ProjectSection({ currentProject, setCurrentProject }) {
  const ref = useRef(null);
  //const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setCurrentProject(false);
      }
    }

    if (currentProject && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [currentProject]);

  useOutsideClick(ref, () => setCurrentProject(null));

  return (
    <>
      <AnimatePresence>
        {currentProject && typeof currentProject === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {currentProject && typeof currentProject === "object" && (
          <SingleProject
            ref={ref}
            currentProject={currentProject}
            onClick={() => setCurrentProject(null)}
          />
        )}
      </AnimatePresence>
      <div
        id="projects"
        className="relative bg-black overflow-hidden flex flex-col"
      >
        <ScrollAnimation>
          <div className="text-slate-300 flex gap-8 items-center justify-center mx-16 mt-28">
            <IoRocketOutline size={64} color="#fff" />
            <h1 className="text-6xl underline text-slate-300  font-space-grotesk tracking-wide">
              Projects
            </h1>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-20">
            {projectDetails.map((project) => {
              return (
                <div
                  onClick={() => setCurrentProject(project)}
                  className="group w-sm mb-12 flex flex-col items-start justify-start hover:shadow-lg hover:shadow-neutral-400/50 hover:rounded-xl mx-16 cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-fill transform-3d transition duration-300 group-hover:scale-102 group-hover:scale-3d rounded-xl h-48 w-dvh"
                  />
                  <div className="flex flex-col flex-grow pt-4">
                    <h3 className="group-hover:ml-4 text-white font-bold font-space-grotesk text-2xl">
                      {project.title}
                    </h3>
                    <p className="text-neutral-400 pt-2 text-xs group-hover:ml-4 group-hover:mb-4 ">
                      {project.info}
                    </p>
                  </div>
                  <div className="mt-auto pt-4">
                    <HeroButton
                      onClick={() => setCurrentProject(project)}
                      className="px-4 py-2 text-lg mt-auto group-hover:ml-4 group-hover:mb-4 cursor-pointer"
                    >
                      Show More
                    </HeroButton>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollAnimation>
      </div>
    </>
  );
}

export default ProjectSection;
