import React from 'react'

import { BlogPostTitleProps } from '@/interfaces/BlogPostTitleProps'
import { Space_Grotesk } from 'next/font/google'

const Space = Space_Grotesk({ subsets: ['latin'] })

const PostTitle: React.FC<BlogPostTitleProps> = ({ title }) => {
  return (
    <h1 className={Space.className + ' lg:text-6xl text-3xl font-bold mb-8'}>
      {title}
    </h1>
  )
}

export default PostTitle
