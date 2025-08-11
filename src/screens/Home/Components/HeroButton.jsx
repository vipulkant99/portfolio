import { motion } from "motion/react";
import { useDarkMode } from "../hook/useDarkMode";

function HeroButton({ className, children, onClick, disabled }) {
  const { isDark } = useDarkMode();
  return (
    <motion.button
      whileHover={
        !disabled
          ? {
              boxShadow: isDark
                ? "0px 20px 50px rgba(103, 232, 249, 0.3)"
                : "0px 20px 50px rgba(103, 232, 249, 1)",
              y: -20,
            }
          : {}
      }
      whileTap={{
        y: [0, 30],
      }}
      style={{
        translateZ: 100,
        willChange: "transform, opacity",
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      onClick={onClick}
      disabled={disabled}
      className={`group relative rounded-lg bg-black font-bold text-cyan-300 shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset] md:text-neutral-500 ${className}`}
    >
      <span
        className={`font-space-grotesk transition-colors duration-300 ${disabled ? "" : "group-hover:text-cyan-300"}`}
      >
        {children}
      </span>
      <span className="absolute inset-x-0 bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-cyan-300 to-transparent"></span>
      <span
        className={`absolute inset-x-0 bottom-px mx-auto h-[4px] w-full bg-gradient-to-r from-transparent via-cyan-300 to-transparent opacity-0 blur-sm transition-opacity duration-300 ${disabled ? "" : "group-hover:opacity-100"}`}
      ></span>
    </motion.button>
  );
}

export default HeroButton;
