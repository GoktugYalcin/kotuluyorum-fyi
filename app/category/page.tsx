import React from 'react'

import contentful from '@/lib/contentful'
import { shuffleArray } from '@/lib/shuffleArray'

import SharedLinkBanner from '@/components/shared/SharedLinkBanner'
import AnimatedHeader from '@/components/categories/AnimatedHeader'
import AnimatedCategory from '@/components/categories/AnimatedCategory'

export default async function CategoriesHome() {
  const categories = await contentful.getCategories()
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <SharedLinkBanner additionalTitle={'Kategoriler'} />
      <div className="w-3/5 min-h-screen pt-48 flex items-center justify-start flex-col gap-24">
        <AnimatedHeader />
        <div className="flex flex-wrap justify-center items-center gap-y-1 w-2/3">
          {shuffleArray(categories).map((cat, index) => {
            return <AnimatedCategory category={cat} key={index} />
          })}
        </div>
      </div>
    </div>
  )
}
