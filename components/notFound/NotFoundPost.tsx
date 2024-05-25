'use client'

import React from 'react'
import Lottie from 'lottie-react'
import EmptyCategoryAnim from '@/assets/lotties/EmptyCategoryAnim.json'

const NotFoundPost: React.FC<{}> = () => {
  return (
    <Lottie
      animationData={EmptyCategoryAnim}
      style={{
        width: 500
      }}
      autoPlay
      loop
    />
  )
}

export default NotFoundPost
