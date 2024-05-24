"use client";

import React from "react";
import Lottie from "lottie-react";
import WalkingAnim from "@/assets/lotties/WalkingAnim.json";

const NotFoundAnim: React.FC<{}> = () => {
  return (
    <Lottie
      animationData={WalkingAnim}
      style={{
        width: 500,
      }}
      autoPlay
      loop
    />
  );
};

export default NotFoundAnim;
