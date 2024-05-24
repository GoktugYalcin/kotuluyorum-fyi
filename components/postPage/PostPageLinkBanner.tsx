"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const PostPageLinkBanner = () => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        stiffness: 260,
        damping: 20,
      }}
    >
      <Link
        href="/"
        className="fixed top-16 left-16 text-2xl font-bold bg-gray-200 px-4 py-2 rounded-xl transition-all hover:bg-gray-300 hover:scale-110"
      >
        Kötülüyorum.fyi
      </Link>
    </motion.span>
  );
};

export default PostPageLinkBanner;
