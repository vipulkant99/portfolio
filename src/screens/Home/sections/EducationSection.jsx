import { BsPersonCircle } from "react-icons/bs";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { MdOutlineCastForEducation } from "react-icons/md";
import { RiBriefcase2Fill } from "react-icons/ri";
import { motion } from "motion/react";

import WorkSection from "./WorkSection";
import { EducationTimeline } from "../../../util/constants";
import { ScrollAnimation } from "../../ScrollAnimation";
import { useDarkMode } from "../hook/useDarkMode";

function EducationSection() {
  const { isDark } = useDarkMode();

  return (
    <div
      id="education"
      className="relative flex flex-col overflow-hidden bg-white dark:bg-black"
    >
      <ScrollAnimation>
        <div className="mt-28 mb-8 flex flex-col items-center justify-center gap-8 px-4 sm:px-8 md:px-16">
          <div className="relative border-l-2 border-gray-800 pl-6 dark:border-gray-300">
            {/*timeline line*/}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {/* div Education */}
              <HiOutlineAcademicCap className="h-16 w-16 text-black sm:h-20 sm:w-20 dark:text-white" />
              <h1 className="font-space-grotesk text-center text-3xl tracking-normal text-slate-800 underline sm:text-4xl sm:tracking-wide md:text-5xl lg:text-6xl dark:text-slate-300">
                Education
              </h1>
            </div>
            {EducationTimeline.map((item, index) => {
              return (
                <div
                  key={index}
                  className="relative mt-16 mb-10 ml-4 flex flex-col items-start md:flex md:flex-row"
                >
                  <div className="mb-4 text-3xl font-semibold text-slate-800 md:absolute md:-top-1 md:-left-30 md:mb-0 md:w-12 md:text-right md:text-3xl dark:text-stone-200">
                    {item.start}
                  </div>
                  <div className="absolute top-2 -left-12 h-4 w-4 rounded-full bg-indigo-600" />
                  <motion.div
                    whileHover={{
                      y: -10,
                    }}
                    className="w-full max-w-3xl rounded-2xl border border-neutral-700 px-8 py-4 pl-6 hover:shadow-md hover:shadow-neutral-800/50 dark:border-neutral-100 dark:hover:shadow-neutral-100/50"
                  >
                    <h3 className="m-0 text-3xl font-bold tracking-wide text-slate-800 dark:text-stone-300">
                      {item.degree}
                    </h3>
                    <p className="my-1 text-base text-slate-800 dark:text-gray-200">
                      GLA Univerity, {item.time}
                    </p>
                  </motion.div>
                </div>
              );
            })}
            <WorkSection />
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default EducationSection;
