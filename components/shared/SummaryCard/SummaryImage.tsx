import React, { Suspense } from 'react'

import { SummaryImageProps } from '@/interfaces/SummaryImageProps'
import Image from 'next/image'

const SummaryImage: React.FC<SummaryImageProps> = ({ src, alt }) => {
  return (
    <span className="flex justify-start items-center overflow-hidden rounded-lg">
      <Suspense
        fallback={
          <div className="h-72 w-full rounded dark:bg-gray-700 bg-gray-100 animate-pulse mb-4"></div>
        }
      >
        <Image
          src={src}
          alt={alt}
          width={450}
          height={10}
          fetchPriority={'low'}
          className={
            'mb-2 overflow-hidden group-hover:scale-110 group-hover:opacity-70 ease-in-out transition-all rounded-lg'
          }
        />
      </Suspense>
    </span>
  )
}

export default SummaryImage
