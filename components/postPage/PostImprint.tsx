import React from "react";
import { PostImprintProps } from "@/interfaces/PostImprintProps";
import PostMidliner from "@/components/postPage/PostMidliner";
import PostDate from "@/components/postPage/PostDate";

const PostImprint: React.FC<PostImprintProps> = ({ midliner, date }) => {
  return (
    <div className="flex flex-col mb-8 gap-2">
      <PostMidliner midliner={midliner} />
      <PostDate date={date} />
    </div>
  );
};

export default PostImprint;
