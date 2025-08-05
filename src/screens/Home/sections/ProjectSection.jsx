import { IoRocketOutline } from "react-icons/io5";
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import HeroButton from "../Components/HeroButton";
import { ScrollAnimation } from "../../ScrollAnimation";
import { projectDetails } from "../../../util/constants";
import SingleProject from "../Components/SingleProject";
import { useOutsideClick } from "../hook/useOutsideClick";
import { useDarkMode } from "../hook/DarkModeContext";

function ProjectSection({ currentProject, setCurrentProject }) {
  const ref = useRef(null);
  const { isDark } = useDarkMode();
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
  }, [currentProject, setCurrentProject]);

  useOutsideClick(ref, () => setCurrentProject(null));

  return (
    <>
      <AnimatePresence>
        {currentProject && typeof currentProject === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-10 h-full w-full bg-black/20"
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
        className="relative flex flex-col overflow-hidden bg-white dark:bg-black"
      >
        <ScrollAnimation>
          <div className="mx-16 mt-28 flex items-center justify-center gap-8">
            <IoRocketOutline size={64} color={isDark ? "white" : "black"} />
            <h1 className="font-space-grotesk text-6xl tracking-wide text-slate-800 underline dark:text-slate-300">
              Projects
            </h1>
          </div>
          <div className="mt-20 grid grid-cols-3 gap-2">
            {projectDetails.map((project) => {
              return (
                <div
                  onClick={() => setCurrentProject(project)}
                  className="group mx-16 mb-12 flex w-sm cursor-pointer flex-col items-start justify-start hover:rounded-xl hover:shadow-md hover:shadow-neutral-800/50 dark:hover:shadow-neutral-400/50"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-48 w-dvh rounded-xl object-fill transition duration-300 transform-3d group-hover:scale-102 group-hover:scale-3d"
                  />
                  <div className="flex flex-grow flex-col pt-4">
                    <h3 className="font-space-grotesk text-2xl font-bold text-black group-hover:ml-4 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="pt-2 text-xs text-slate-800 group-hover:mb-4 group-hover:ml-4 dark:text-neutral-400">
                      {project.info}
                    </p>
                  </div>
                  <div className="mt-auto pt-4">
                    <HeroButton
                      onClick={() => setCurrentProject(project)}
                      className="mt-auto cursor-pointer px-4 py-2 text-lg group-hover:mb-4 group-hover:ml-4"
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
