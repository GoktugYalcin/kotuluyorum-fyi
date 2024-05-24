import { Blog } from "@/interfaces/BlogPostProps";

export interface ContentfulBlogInterface {
  type: "post";
  fields: Blog;
}
