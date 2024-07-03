import React from 'react'

import { Metadata } from 'next'

import AnimatedCategory from '@/components/categories/AnimatedCategory'
import AnimatedHeader from '@/components/categories/AnimatedHeader'
import SharedLinkBanner from '@/components/shared/SharedLinkBanner'

import contentful from '@/lib/contentful'
import { shuffleArray } from '@/lib/shuffleArray'

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === 'development'
      ? 'https://localhost:3000'
      : 'https://goktugyalcin.github.io/kotuluyorum-fyi'
  ),
  title: 'Kötülüyorum.fyi - Kategoriler',
  description:
    'Eleştiri yazılarını bu sayfadan kategorileyerek istediğiniz düzende bulabilirsiniz.'
}

export default async function CategoriesHome() {
  const categories = await contentful.getCategories()
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <SharedLinkBanner additionalTitle={'Kategoriler'} />
      <div className="w-3/5 min-h-screen pt-48 flex items-center justify-start flex-col gap-24">
        <AnimatedHeader />
        <div className="flex flex-wrap justify-center items-center gap-y-1 w-2/3">
          {shuffleArray(categories).map(({ title, id }, index) => {
            return <AnimatedCategory category={title} id={id} key={index} />
          })}
        </div>
      </div>
    </div>
  )
}
