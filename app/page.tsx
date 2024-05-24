import Navbar from '@/components/shared/Navbar'
import SummaryCard from '@/components/home/SummaryCard'
import React from 'react'
import Link from 'next/link'
import Contentful from '@/lib/contentful'
import dayjs from 'dayjs'
import { Asset } from 'contentful'

export default async function Home() {
  const posts = await Contentful.getPosts(0)

  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <div className="p-24 pt-16">
        <nav className="w-full sticky">
          <Navbar />
        </nav>
        <div className="w-full flex justify-center items-center pt-24 text-5xl">
          <h1 className="w-1/2 bg-gradient-to-r from-green-600 via-green-800 to-green-500 bg-clip-text text-transparent overflow-visible bg-center min-h-[150px]">
            İnternetteki herhangi bir ürün. Düşebileceği en acımasız yere düştü.
            Evet, burası!
          </h1>
        </div>
        <article className="w-full pt-24 px-40 flex flex-wrap justify-start gap-10">
          {posts.map((post) => {
            return (
              <SummaryCard
                title={post.fields.title}
                imageSrc={`https://${((post.fields.postimage as Asset).fields
                  ?.file?.url as string)!.replace('//', '')}`}
                key={post.sys.id}
                summary={post.fields.midliner}
                postUrl={`/post/${post.sys.id}`}
                date={post.sys.updatedAt}
              />
            )
          })}
        </article>
      </div>
    </main>
  )
}
