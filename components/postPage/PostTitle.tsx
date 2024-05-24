import React from "react";
import { BlogPostTitleProps } from "@/interfaces/BlogPostTitleProps";

const PostTitle: React.FC<BlogPostTitleProps> = ({ title }) => {
  return <h1 className="text-6xl font-bold mb-8">{title}</h1>;
};

export default PostTitle;
