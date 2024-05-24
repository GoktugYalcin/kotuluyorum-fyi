import {
  ContentfulClientApi,
  createClient,
  EntrySkeletonType,
} from "contentful";
import { Post } from "@/contentfulTypes";
import { redirect } from "next/navigation";
import { ContentfulErrorData } from "contentful-sdk-core/dist/types/types";
import { ContentfulBlogInterface } from "@/interfaces/ContentfulBlogInterface";
import { Blog } from "@/interfaces/BlogPostProps";

class Contentful {
  instance: ContentfulClientApi<undefined>;
  skipPost: number;

  constructor() {
    this.skipPost = 0;
    this.instance = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
    });
  }

  async getPosts(skip: number) {
    const res = await this.instance.getEntries<EntrySkeletonType<Blog, "post">>(
      {
        skip,
        limit: 20,
        content_type: "post",
      },
    );
    return res.items || [];
  }

  async getPostById(postId: string) {
    try {
      const res =
        await this.instance.getEntry<EntrySkeletonType<Blog, "post">>(postId);
      return res;
    } catch (err) {
      return null;
    }
  }
}

export default new Contentful();
