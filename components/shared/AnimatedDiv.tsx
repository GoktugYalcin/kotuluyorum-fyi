"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatedDivProps } from "@/interfaces/AnimatedDivProps";

const AnimatedDiv: React.FC<AnimatedDivProps> = ({
  children,
  customClasses = "",
}) => {
  return (
    <motion.div
      className={customClasses}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        stiffness: 260,
        damping: 20,
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;
