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
    <div className="w-full min-h-screen flex flex-col items-center justify-start">
      <SharedLinkBanner additionalTitle={'Kategoriler'} />
      <div className="lg:w-3/5 w-full min-h-screen lg:pt-48 pt-14 lg:px-0 pb-12 lg:pb-0 px-2 flex flex-col items-center gap-12">
        <AnimatedHeader />
        <div className="flex flex-wrap justify-center items-center gap-1 w-full">
          {shuffleArray(categories).map(({ title, id }, index) => {
            return <AnimatedCategory category={title} id={id} key={index} />
          })}
        </div>
      </div>
    </div>
  )
}
