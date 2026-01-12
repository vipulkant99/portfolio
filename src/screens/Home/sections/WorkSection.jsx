import { useState } from "react";
import { RiBriefcase2Fill } from "react-icons/ri";
import { motion } from "motion/react";

import HeroButton from "../Components/HeroButton";
import { WorkTimeline } from "../../../util/constants";
function WorkSection() {
  const [curretIndex, setCurrentIndex] = useState(null);

  function handleClick(item) {
    setCurrentIndex((index) => (item.index === index ? null : item.index));
  }
  return (
    <div id="experience">
      {/* Work Experience */}
      <div className="flex flex-wrap items-center justify-center gap-2 text-center">
        {/* div Education */}
        <RiBriefcase2Fill className="h-16 w-16 text-indigo-600 sm:h-20 sm:w-20 dark:text-indigo-400" />
        <h1 className="font-space-grotesk text-center text-3xl tracking-normal text-slate-800 sm:text-4xl sm:tracking-wide md:text-5xl lg:text-6xl dark:text-slate-100">
          Work Experience
        </h1>
      </div>
      {WorkTimeline.map((item, index) => {
        return (
          <div
            key={index}
            className="relative mt-16 mb-10 ml-4 flex flex-col items-start md:flex md:flex-row"
          >
            <div className="mb-4 text-3xl font-semibold text-slate-800 md:absolute md:-top-1 md:-left-40 md:mb-0 md:w-24 md:text-right md:text-3xl dark:text-stone-200">
              {item.start}
            </div>
            <div className="absolute top-2 -left-12 h-4 w-4 rounded-full bg-indigo-600" />
            <motion.div
              whileHover={{
                y: -10,
              }}
              className="w-full max-w-3xl rounded-2xl border border-neutral-800 px-8 py-4 pl-6 hover:shadow-md hover:shadow-neutral-800/50 dark:border-neutral-100 dark:hover:shadow-neutral-100/50"
            >
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
                <h3 className="m-0 text-3xl font-bold tracking-wide text-indigo-600 dark:text-indigo-400">
                  {item.title}
                </h3>
                <span className="text-base text-slate-600 dark:text-gray-400 whitespace-nowrap">
                  {item.time}
                </span>
              </div>
              <div className="my-4 flex items-center justify-between gap-4">
                <span className="text-lg font-semibold text-slate-800 dark:text-stone-300">
                  {item.company}
                </span>
                <HeroButton
                  className="flex h-10 items-center justify-center px-4 text-lg whitespace-nowrap"
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
