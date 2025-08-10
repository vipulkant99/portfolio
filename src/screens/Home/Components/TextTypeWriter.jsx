import { motion, stagger, useAnimate, useInView } from "motion/react";
import { useEffect } from "react";

export const TypewriterEffectSmooth = ({ words }) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });
  const renderWords = () => {
    return (
      <div>
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <span
                  key={`char-${index}`}
                  className="text-3xl tracking-wide text-neutral-800 text-shadow-lg text-shadow-white/20 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl dark:text-white"
                  //word.className
                >
                  {char}
                </span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div
      className="my-6 flex flex-wrap items-baseline-last justify-center"
      //className
    >
      <motion.div
        className="overflow-hidden pb-2"
        initial={{
          width: "0%",
        }}
        whileInView={{
          width: "fit-content",
        }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
        }}
      >
        <div
          className="font-bold"
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {renderWords()}
        </div>
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,

          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="block h-8 w-[3px] rounded-sm bg-cyan-300 sm:h-10 md:h-20"
        // className="block h-24 w-[4px] rounded-sm bg-cyan-300"
        //cursorClassName
      ></motion.span>
    </div>
  );
};
