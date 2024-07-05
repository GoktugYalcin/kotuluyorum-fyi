import React from 'react'

import { PostImprintProps } from '@/interfaces/PostImprintProps'

const PostMidliner: React.FC<PostImprintProps> = ({ midliner }) => {
  return <h2 className="lg:text-2xl text-xl">{midliner}</h2>
}

export default PostMidliner
