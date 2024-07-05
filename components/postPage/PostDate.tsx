import React from 'react'

import { PostImprintProps } from '@/interfaces/PostImprintProps'
import dayjs from 'dayjs'

const PostDate: React.FC<PostImprintProps> = ({ date }) => {
  return (
    <h3 className="lg:text-xl text-lg text-[--post-date-color]">
      {dayjs(date).format('DD.MM.YYYY')}
    </h3>
  )
}

export default PostDate
