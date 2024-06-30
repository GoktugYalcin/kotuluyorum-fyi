import React from 'react'

import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'

import PostImprint from '@/components/postPage/PostImprint'
import PostTitle from '@/components/postPage/PostTitle'
import AnimatedDiv from '@/components/shared/AnimatedDiv'
import SharedLinkBanner from '@/components/shared/SharedLinkBanner'

import contentful from '@/lib/contentful'

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const post = await contentful.getPostById(params.postId)

  return {
    title: `Kötülüyorum.fyi${post?.fields?.title ? ' - ' + post.fields.title : ''}`,
    description: post?.fields?.midliner ?? ''
  }
}

export default async function PostPage({
  params
}: {
  params: { postId: string }
}) {
  const post = await contentful.getPostById(params.postId)
  if (!post) {
    redirect('/404')
  }

  const parsedContentToMarkdown = documentToHtmlString(post.fields.content, {
    renderMark: {
      [MARKS.BOLD]: (text) => `<b>${text}</b>`,
      [MARKS.ITALIC]: (text) => `<i>${text}</i>`
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node) => {
        // @ts-ignore
        let value = node.content[0].value // This 'value' prop is not implemented already??
        let uri = node.data.uri

        return `<a
            style="font-weight: bolder;text-decoration: underline"
            href="${uri}"
            target="_blank"
          >
            ${value}
          </a>`
      },
      [BLOCKS.EMBEDDED_ASSET]: (node, next) =>
        `<img src="https:${node.data.target.fields.file.url}" />`,
      [BLOCKS.HEADING_1]: (node, next) => `<h1>${next(node.content)}</h1>`
    },
    preserveWhitespace: true
  }).replaceAll('&#39;', "'")

  return (
    <>
      <SharedLinkBanner additionalTitle={'İnceleme'} />
      <AnimatedDiv
        customClasses="w-full min-h-screen flex-col justify-center items-center px-[500px] py-32"
        transition={200}
      >
        <PostTitle title={post.fields.title} />
        <PostImprint
          date={post.sys.updatedAt}
          midliner={post.fields.midliner}
          tags={post.metadata.tags}
        />
        <div
          className="mt-6 flex flex-col gap-2 justify-start items-start text-md"
          dangerouslySetInnerHTML={{ __html: parsedContentToMarkdown }}
        ></div>
      </AnimatedDiv>
    </>
  )
}
