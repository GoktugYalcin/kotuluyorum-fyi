import React from 'react'

import { SummaryImageProps } from '@/interfaces/SummaryImageProps'
import Image from 'next/image'

const SummaryImage: React.FC<SummaryImageProps> = ({ src }) => {
  return (
    <span className="flex justify-start items-center overflow-hidden rounded-lg">
      <Image
        src={src}
        alt={'iphone12'}
        width={450}
        height={10}
        fetchPriority={'low'}
        className={
          'mb-2 overflow-hidden group-hover:scale-110 group-hover:opacity-70 ease-in-out transition-all rounded-lg'
        }
      />
    </span>
  )
}

export default SummaryImage
