import React from 'react'
import contentful from '@/lib/contentful'
import { redirect } from 'next/navigation'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import AnimatedDiv from '@/components/shared/AnimatedDiv'
import SharedLinkBanner from '@/components/shared/SharedLinkBanner'
import PostTitle from '@/components/postPage/PostTitle'
import PostImprint from '@/components/postPage/PostImprint'

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
