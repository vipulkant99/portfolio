import { motion } from "motion/react";

export const GlitchLoader = ({ text = "WELCOME TO MY PORTFOLIO..." }) => {
  return (
    <div className="relative overflow-hidden text-center break-words [perspective:1000px]">
      <motion.span
        animate={{
          skew: [0, -40, 0],
          scaleX: [1, 2, 1],
        }}
        transition={{
          duration: 0.05,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 2,
          ease: "linear",
          times: [0, 0.2, 0.5, 0.8, 1],
        }}
        className="font-space-grotesk relative z-20 inline-block text-4xl font-bold tracking-widest text-black sm:text-5xl md:text-6xl lg:text-7xl dark:text-white"
      >
        {text}
      </motion.span>
      <motion.span
        className="font-space-grotesk absolute inset-0 text-4xl tracking-widest text-[#00e571]/50 blur-[0.5px] sm:text-5xl md:text-6xl lg:text-7xl dark:text-[#00e571]"
        animate={{
          x: [-2, 4, -3, 1.5, -2],
          y: [-2, 4, -8, 1.5, -2],
          opacity: [0.3, 0.9, 0.4, 0.8, 0.3],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
          times: [0, 0.2, 0.5, 0.8, 1],
        }}
      >
        {text}
      </motion.span>
      <motion.span
        className="font-space-grotesk absolute inset-0 text-4xl tracking-widest text-[#8b00ff]/50 sm:text-5xl md:text-6xl lg:text-7xl dark:text-[#8b00ff]"
        animate={{
          x: [0, 1, -1.5, 1.5, -1, 0],
          y: [0, -1, 8, -0.5, 0],
          opacity: [0.4, 0.8, 0.3, 0.9, 0.4],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
          times: [0, 0.3, 0.6, 0.8, 1],
        }}
      >
        {text}
      </motion.span>
    </div>
  );
};
