import React from 'react'

import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import PostImprint from '@/components/postPage/PostImprint'
import PostTitle from '@/components/postPage/PostTitle'
import AnimatedDiv from '@/components/shared/AnimatedDiv'
import SharedLinkBanner from '@/components/shared/SharedLinkBanner'
import ThemeButton from '@/components/shared/ThemeButton'

import contentful from '@/lib/contentful'

type PageProps = {
  params: { postId: string }
}

export async function generateStaticParams() {
  const posts = await contentful.getPosts(0)
  return posts.map((post) => ({
    postId: post.sys.id,
    openGraph: {
      images: `/post/${post.sys.id}/og.png`
    }
  }))
}

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const post = await contentful.getPostById(params.postId)
  if (!post) return {}

  return {
    title: `Kötülüyorum.fyi${post.fields.title ? ' - ' + post.fields.title : ''}`,
    description: post.fields.midliner ?? '',
    openGraph: {
      images: `/post/${post.sys.id}/og.png`
    }
  }
}

export default async function PostPage({ params }: PageProps) {
  const post = await contentful.getPostById(params.postId)
  if (!post) {
    notFound()
  }

  const parsedContentToMarkdown = documentToHtmlString(post.fields.content, {
    renderMark: {
      [MARKS.BOLD]: (text) => `<b>${text}</b>`,
      [MARKS.ITALIC]: (text) => `<i>${text}</i>`
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node) => {
        const value = (node.content[0] as any).value
        const uri = node.data.uri

        return `
            <a style="font-weight: bolder;text-decoration: underline"
            href="${uri}"
            target="_blank"
          >
            ${value}
          </a>`
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) =>
        `<img alt="asset" class="w-full max-w-full h-auto" src="https:${node.data.target.fields.file.url}" />`,
      [BLOCKS.HEADING_1]: (node, next) => `<h1>${next(node.content)}</h1>`
    },
    preserveWhitespace: true
  }).replaceAll('&#39;', "'")

  return (
    <>
      <SharedLinkBanner additionalTitle={'İnceleme'} />
      <AnimatedDiv
        customClasses="w-full min-h-screen flex-col justify-start items-center px-2 lg:px-8 py-16 lg:py-32"
        transition={200}
      >
        <div className="w-full max-w-3xl mx-auto">
          <PostTitle title={post.fields.title} />
          <PostImprint
            date={post.sys.updatedAt}
            midliner={post.fields.midliner}
            tags={post.metadata.tags}
          />
          <div
            className="mt-6 flex flex-col gap-2 justify-center items-start lg:text-md text-sm flex-wrap break-words"
            dangerouslySetInnerHTML={{ __html: parsedContentToMarkdown }}
          ></div>
        </div>
      </AnimatedDiv>
    </>
  )
}
