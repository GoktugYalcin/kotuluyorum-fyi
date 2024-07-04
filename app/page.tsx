import React from 'react'

import { Asset } from 'contentful'

import Navbar from '@/components/shared/Navbar'
import SummaryCard from '@/components/shared/SummaryCard'

import Contentful from '@/lib/contentful'

export default async function Home() {
  const posts = await Contentful.getPosts(0)

  return (
    <main className="flex min-h-screen flex-col items-center justify-start w-full overflow-x-hidden">
      <div className="lg:p-24 lg:pt-16 p-4 pt-8 px-1 w-full">
        <nav className="w-full sticky">
          <Navbar />
        </nav>
        <div className="w-full flex justify-center items-center lg:pt-24 pt-16 lg:text-5xl text-3xl lg:text-left text-center">
          <h1 className="lg:w-1/2 w-full lg:px-[initial] px-2 bg-gradient-to-r from-green-600 via-green-800 to-green-500 bg-clip-text text-transparent overflow-visible bg-center min-h-[150px]">
            İnternetteki herhangi bir ürün. Düşebileceği en acımasız yere düştü.
            Evet, burası!
          </h1>
        </div>
        <article className="w-full lg:pt-24 pt-16 px-2 lg:px-40 flex flex-wrap lg:justify-start justify-center gap-10">
          {posts.map((post) => (
            <SummaryCard
              title={post.fields.title}
              imageSrc={`https://${((post.fields.postimage as Asset).fields
                ?.file?.url as string)!.replace('//', '')}`}
              key={post.sys.id}
              summary={post.fields.midliner}
              postUrl={`/post/${post.sys.id}`}
              date={post.sys.updatedAt}
            />
          ))}
        </article>
      </div>
    </main>
  )
}
