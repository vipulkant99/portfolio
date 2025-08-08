import { useState } from "react";
import { RiBriefcase2Fill } from "react-icons/ri";
import { motion } from "motion/react";

import HeroButton from "../Components/HeroButton";
import { WorkTimeline } from "../../../util/constants";
import { useDarkMode } from "../hook/useDarkMode";

function WorkSection() {
  const [curretIndex, setCurrentIndex] = useState(null);
  const { isDark } = useDarkMode();

  function handleClick(item) {
    setCurrentIndex((index) => (item.index === index ? null : item.index));
  }
  return (
    <div id="experience">
      {/* Work Experience */}
      <div className="flex flex-wrap items-center justify-center gap-4 text-center">
        {/* div Education */}
        <RiBriefcase2Fill size={64} color={isDark ? "white" : "black"} />
        <h1 className="font-space-grotesk text-6xl tracking-wide text-slate-800 underline dark:text-slate-300">
          Work Experience
        </h1>
      </div>
      {WorkTimeline.map((item, index) => {
        return (
          <div
            key={index}
            className="relative mt-16 mb-10 ml-4 flex flex-col items-start md:flex md:flex-row"
          >
            <div className="mb-4 text-3xl font-semibold text-slate-800 md:absolute md:-top-1 md:-left-30 md:mb-0 md:w-12 md:text-right md:text-3xl dark:text-stone-200">
              {item.start}
            </div>
            <div className="absolute top-1.5 -left-12 h-3 w-3 rounded-full bg-[#4f46e5]" />
            <motion.div
              whileHover={{
                y: -10,
              }}
              className="w-full max-w-3xl rounded-2xl border border-neutral-800 px-8 py-4 pl-6 hover:shadow-md hover:shadow-neutral-800/50 dark:border-neutral-100 dark:hover:shadow-neutral-100/50"
            >
              <h3 className="m-0 text-3xl font-bold tracking-wide text-slate-800 dark:text-stone-300">
                {item.title}
              </h3>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="my-1 text-base text-slate-800 dark:text-gray-200">
                  {item.company}, {item.time}
                </p>
                <HeroButton
                  className="px-4 py-2 text-lg"
                  onClick={() => handleClick(item)}
                >
                  {curretIndex === item.index ? "Show Less" : "Show More"}
                </HeroButton>
              </div>
              {curretIndex === item.index && (
                <span>
                  <div className="mt-8 border border-gray-100" />
                  <ul className="mt-6 list-inside list-disc space-y-2 text-slate-800 dark:text-slate-200">
                    {item.content.map((desc) => {
                      return <li>{desc}</li>;
                    })}
                  </ul>
                </span>
              )}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

export default WorkSection;
