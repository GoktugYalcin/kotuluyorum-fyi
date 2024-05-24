import { Asset } from "contentful";
export const Category = "category";
export interface Category {
  //Category
  /* Classical categories. */
  readonly name?: string;
}

export const Post = "post";
export interface Post {
  //Post
  /* This will be included the all content of blog posts. */
  readonly content: { content: any; data: any; nodeType: string };
  readonly midliner?: string;
  readonly postimage: Asset;
  readonly title: string;
  readonly booCount: number;
}
