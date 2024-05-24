import React from 'react'
import { PostImprintProps } from '@/interfaces/PostImprintProps'
import PostMidliner from '@/components/postPage/PostMidliner'
import PostDate from '@/components/postPage/PostDate'
import PostTags from '@/components/postPage/PostTags'

const PostImprint: React.FC<PostImprintProps> = ({ midliner, date, tags }) => {
  return (
    <div className="flex flex-col mb-8 gap-2">
      <PostMidliner midliner={midliner} />
      <PostDate date={date} />
      <PostTags tags={tags} />
    </div>
  )
}

export default PostImprint
