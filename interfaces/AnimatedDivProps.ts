import React from "react";

export type AnimatedDivProps = {
  customClasses?: React.ComponentProps<"div">["className"];
  transition?: number;
  children: React.ReactNode;
};
