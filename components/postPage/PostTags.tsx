import React from 'react'
import { PostImprintProps } from '@/interfaces/PostImprintProps'
import Link from 'next/link'
import { RandomGenerator } from '@/lib/RandomGenerator'

const PostTags: React.FC<PostImprintProps> = ({ tags }) => {
  const random = new RandomGenerator()
  return (
    <div className="flex justify-start items-center gap-2">
      {tags?.map((tag, index) => (
        <Link
          key={index}
          className="hover:font-bold transition-all"
          style={{
            color: random.colorGenerate()
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
