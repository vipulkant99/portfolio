import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const ScrollAnimation = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -80 }} // 👈 comes from top
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="overflow-hidden" //
    >
      {children}
    </motion.div>
  );
};
