import React from "react";
import dayjs from "dayjs";
import { PostImprintProps } from "@/interfaces/PostImprintProps";

const PostDate: React.FC<PostImprintProps> = ({ date }) => {
  return (
    <h3 className="text-xl text-green-600">
      {dayjs(date).format("DD.MM.YYYY")}
    </h3>
  );
};

export default PostDate;
