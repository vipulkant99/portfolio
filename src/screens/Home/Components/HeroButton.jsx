import { motion } from "motion/react";

function HeroButton() {
  return (
    <motion.button
      whileHover={{
        // rotateX: 25,
        // rotateY: 20,
        boxShadow: "0px 20px 50px rgba(103, 232, 249, 0.3)",
        y: -20,
      }}
      whileTap={{
        y: [0, 30, 25],
      }}
      style={{
        translateZ: 100,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className=" group relative text-neutral-500 px-12 py-4 rounded-lg mt-16 bg-black font-bold text-4xl 
      shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]"
    >
      <span className="group-hover:text-cyan-300 transition-colors duration-300 text-3xl font-space-grotesk">
        Let's Explore
      </span>
      <span className="absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent h-px w-3/4 mx-auto"></span>
      <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent h-[4px] w-full mx-auto blur-sm"></span>
    </motion.button>
  );
}

export default HeroButton;
