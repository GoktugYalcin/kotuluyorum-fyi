import {
  ContentfulClientApi,
  createClient,
  EntrySkeletonType,
  TagCollection,
} from "contentful";

import type { Blog } from "@/interfaces/BlogPostProps";
import { CategoryProps } from "@/interfaces/CategoryProps";

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

  async getCategories() {
    const res = await this.instance.getTags({});
    return res.items.map((tag) => tag.name);
  }
}

export default new Contentful();
