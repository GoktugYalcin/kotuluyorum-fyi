import React from 'react'
import { PostImprintProps } from '@/interfaces/PostImprintProps'
import { randomColorGenerate } from '@/lib/randomColorGenerate'
import Link from 'next/link'

const PostTags: React.FC<PostImprintProps> = ({ tags }) => {
  return (
    <div className="flex justify-start items-center gap-2">
      {tags?.map((tag, index) => (
        <Link
          key={index}
          className="hover:font-bold transition-all"
          style={{
            color: randomColorGenerate()
          }}
          href={`/category/${tag.sys.id}`}
        >
          #{tag.sys.id}
        </Link>
      ))}
    </div>
  )
}

export default PostTags
