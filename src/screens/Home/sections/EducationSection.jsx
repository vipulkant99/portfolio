import { BsPersonCircle } from "react-icons/bs";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { MdOutlineCastForEducation } from "react-icons/md";
import { RiBriefcase2Fill } from "react-icons/ri";
import { motion } from "motion/react";

import WorkSection from "./WorkSection";
import { EducationTimeline } from "../../../util/constants";
import { ScrollAnimation } from "../../ScrollAnimation";
import { useDarkMode } from "../hook/DarkModeContext";

function EducationSection() {
  const { isDark } = useDarkMode();

  return (
    <div
      id="education"
      className="relative flex flex-col overflow-hidden bg-white dark:bg-black"
    >
      <ScrollAnimation>
        <div className="mt-28 mb-8 flex flex-col items-center justify-center gap-8">
          <div className="relative border-l-2 border-gray-800 pl-6 dark:border-gray-300">
            {/*timeline line*/}
            <div className="flex items-center justify-center gap-8">
              {/* div Education */}
              <HiOutlineAcademicCap
                size={64}
                color={isDark ? "white" : "black"}
              />
              <h1 className="font-space-grotesk text-6xl tracking-wide text-slate-800 underline dark:text-slate-300">
                Education
              </h1>
            </div>
            {EducationTimeline.map((item) => {
              return (
                <div className="relative mt-16 mb-10 ml-4 flex items-start">
                  <div className="absolute -top-2 -left-30 w-12 text-right text-3xl font-semibold text-slate-800 dark:text-stone-200">
                    {item.start}
                  </div>
                  <div className="absolute top-1.5 -left-12 h-3 w-3 rounded-full bg-[#4f46e5]" />
                  <motion.div
                    whileHover={{
                      y: -10,
                    }}
                    className="w-screen max-w-[800px] rounded-2xl border border-neutral-700 px-8 py-4 pl-6 hover:shadow-md hover:shadow-neutral-800/50 dark:border-neutral-100 dark:hover:shadow-neutral-100/50"
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
