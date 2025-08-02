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
      <div className="flex gap-8 items-center justify-center">
        {/* div Education */}
        <RiBriefcase2Fill size={64} color="white" />
        <h1 className="text-6xl underline text-slate-300  font-space-grotesk tracking-wide">
          Work Experience
        </h1>
      </div>
      {WorkTimeline.map((item) => {
        return (
          <div className="relative mb-10 ml-4 flex items-start mt-16">
            <div className="absolute -left-30 -top-2 text-3xl text-right w-12 font-semibold text-stone-200">
              {item.start}
            </div>
            <div className="absolute w-3 h-3 bg-[#4f46e5] rounded-full -left-12 top-1.5" />
            <motion.div
              whileHover={{
                y: -10,
              }}
              className="pl-6 border border-neutral-100 py-4 px-8 rounded-2xl max-w-[800px] w-screen hover:shadow-lg hover:shadow-neutral-100/50"
            >
              <h3 className="m-0 text-3xl tracking-wide font-bold text-stone-300">
                {item.title}
              </h3>
              <div className="flex items-center justify-between">
                <p className="my-1 text-lg text-gray-200">
                  {item.company}, {item.time}
                </p>
                <HeroButton
                  className="px-4 py-2 text-lg"
                  onClick={() => handleClick(item)}
                >
                  {curretIndex === item.index ? "Show Less" : "Show More"}
                </HeroButton>
                {/* <button
                  className="bg-cyan-300 text-stone-900 rounded-full "
                  onClick={() => handleClick(item)}
                >
                  
                </button> */}
              </div>
              {curretIndex === item.index && (
                <span>
                  <div className="border border-gray-100 mt-8" />
                  <ul className="list-disc list-inside text-slate-200 space-y-2 mt-8">
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
