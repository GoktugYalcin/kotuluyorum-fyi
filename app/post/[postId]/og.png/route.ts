import { ImageResponse } from 'next/og'

import { generateOgImage } from '@/components/postPage/OGImage'

import contentful from '@/lib/contentful'

export async function generateStaticParams() {
  const posts = await contentful.getPosts(0)
  return posts.map((post) => ({
    postId: post.sys.id
  }))
}

export async function GET(
  req: Request,
  { params }: { params: { postId: string } }
) {
  const post = await contentful.getPostById(params.postId)
  return new ImageResponse(generateOgImage(post?.fields.title as string))
}
