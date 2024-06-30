import type { Blog } from '@/interfaces/BlogPostProps'
import {
  ContentfulClientApi,
  EntrySkeletonType,
  createClient
} from 'contentful'

import { env } from '@/lib/env.mjs'

class Contentful {
  instance: ContentfulClientApi<undefined>
  skipPost: number

  constructor() {
    this.skipPost = 0
    this.instance = createClient({
      space: env.CONTENTFUL_SPACE_ID,
      accessToken: env.CONTENTFUL_DELIVERY_TOKEN
    })
  }

  async getPosts(skip: number) {
    const res = await this.instance.getEntries<EntrySkeletonType<Blog, 'post'>>(
      {
        skip,
        limit: 20,
        content_type: 'post'
      }
    )
    return res.items || []
  }

  async getPostById(postId: string) {
    try {
      const res =
        await this.instance.getEntry<EntrySkeletonType<Blog, 'post'>>(postId)
      return res
    } catch (err) {
      return null
    }
  }

  async getCategories() {
    const res = await this.instance.getTags({})
    return res.items.map((tag) => ({ title: tag.name, id: tag.sys.id }))
  }

  async getPostsByTag(tag: string) {
    const res = await this.instance.getEntries<EntrySkeletonType<Blog, 'post'>>(
      {
        skip: 0,
        limit: 20,
        content_type: 'post',
        // @ts-ignore @TODO: Investigate this situation
        'metadata.tags.sys.id[in]': tag
      }
    )
    return res.items || []
  }
}

export default new Contentful()
