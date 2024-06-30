import React from 'react'

import { PostImprintProps } from '@/interfaces/PostImprintProps'

const PostMidliner: React.FC<PostImprintProps> = ({ midliner }) => {
  return <h2 className="text-2xl">{midliner}</h2>
}

export default PostMidliner
