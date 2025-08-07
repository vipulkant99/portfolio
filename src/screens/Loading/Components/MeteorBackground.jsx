import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Meteors = ({ number = 20 }) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [regenKey, setRegenKey] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setRegenKey((k) => k + 1);
    };
    handleResize(); // set initial width
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const meteors = new Array(number).fill(true);

  return (
    <motion.div
      className={`pointer-events-none absolute inset-0 h-full w-full`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {meteors.map((_, idx) => {
        const left = Math.random() * windowWidth;
        const delay = Math.random() * 5;
        const duration = Math.floor(Math.random() * 5 + 5); // 5-10s

        return (
          <span
            key={`meteor-${regenKey}-${idx}`}
            className={`animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10] before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-1/2 before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']`}
            style={{
              top: "-40px",
              left: `${left}px`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          />
        );
      })}
    </motion.div>
  );
};
