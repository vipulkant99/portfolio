import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { ScrollAnimation } from "../../ScrollAnimation";
import { testimonialData } from "../../../util/constants";

import { motion } from "motion/react";
import { useDarkMode } from "../hook/useDarkMode";

function TestimonialSection() {
  const { isDark } = useDarkMode();

  return (
    <div
      id="testimonial"
      className="relative flex flex-col overflow-hidden bg-white dark:bg-black"
    >
      <ScrollAnimation>
        <div className="mx-4 mt-28 flex flex-wrap items-center justify-center gap-4 text-slate-300 sm:mx-8 sm:mt-24 sm:gap-8 lg:mx-16">
          <HiOutlineChatBubbleLeftRight
            size={64}
            color={isDark ? "white" : "black"}
          />
          <h1 className="font-space-grotesk text-6xl tracking-wide text-slate-800 underline dark:text-slate-300">
            Testimonials
          </h1>
        </div>
        <div className="mt-10 mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((data) => (
            <motion.div
              whileHover={{
                y: -10,
              }}
              className="group relative mx-8 my-6 flex flex-col items-start justify-start hover:z-10 hover:rounded-xl hover:shadow-md hover:shadow-neutral-800/50 dark:hover:shadow-neutral-400/50"
            >
              <h4 className="font-inter text-md ml-4 font-light text-slate-800 dark:text-white">
                {data.info}
              </h4>
              <div className="mt-auto ml-4 flex items-start pt-4">
                <img
                  src={data.img}
                  alt={data.name}
                  className="h-12 w-12 rounded-full object-contain sm:h-14 sm:w-14"
                />
                <div className="flex w-auto flex-grow flex-col items-start justify-center">
                  <div className="flex flex-nowrap items-center gap-2 overflow-hidden">
                    <h3 className="font-space-grotesk ml-4 text-2xl font-bold text-slate-800 dark:text-white">
                      {data.name}
                    </h3>
                    <a
                      href={data.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mr-2 shrink-0"
                    >
                      <img
                        src="/socials/linkedin.svg"
                        alt={data.name}
                        className="ml-2 h-8 w-8 cursor-pointer rounded-full object-contain"
                      />
                    </a>
                  </div>
                  <p className="text-md font-inter mb-4 ml-4 pt-1 text-neutral-400">
                    {data.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default TestimonialSection;
