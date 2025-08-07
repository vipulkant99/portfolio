import React from "react";
import { motion } from "framer-motion";

export default function BackgroundGradient({
  children,
  className = "",
  containerClassName = "",
  animate = true,
}) {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    },
  };

  return (
    <div
      className={`group relative p-[2px] sm:p-[4px] md:p-[6px] ${containerClassName}`}
    >
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : false}
        animate={animate ? "animate" : false}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{ backgroundSize: animate ? "400% 400%" : undefined }}
        className="absolute inset-0 z-[1] rounded-3xl bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)] opacity-60 blur-xl transition duration-500 will-change-transform group-hover:opacity-100"
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : false}
        animate={animate ? "animate" : false}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{ backgroundSize: animate ? "400% 400%" : undefined }}
        className="absolute inset-0 z-[1] rounded-3xl bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)] will-change-transform"
      />

      <div className={`relative z-10 ${className}`}>{children}</div>
    </div>
  );
}
