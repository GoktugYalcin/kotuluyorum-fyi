import { Asset } from 'contentful'
import Link from 'next/link'

import NotFoundPost from '@/components/notFound/NotFoundPost'
import SharedLinkBanner from '@/components/shared/SharedLinkBanner'
import SummaryCard from '@/components/shared/SummaryCard'

import contentful from '@/lib/contentful'

export const revalidate = 1

export async function generateStaticParams() {
  const posts = await contentful.getCategories()
  return posts.map((post) => ({
    categoryId: post.id
  }))
}

export default async function CategoryListPage({
  params
}: {
  params: { categoryId: string }
}) {
  const postsByCategory = await contentful.getPostsByTag(params.categoryId)
  return (
    <>
      <SharedLinkBanner additionalTitle={params.categoryId} />
      <div className="w-full pt-48 min-h-screen px-52 flex justify-start items-start gap-24 flex-wrap">
        {postsByCategory.length ? (
          postsByCategory.map((post) => {
            const { fields, sys } = post
            const { postimage, midliner, title } = fields
            return (
              <SummaryCard
                title={title}
                imageSrc={`https://${((postimage as Asset).fields?.file
                  ?.url as string)!.replace('//', '')}`}
                key={sys.id}
                summary={midliner}
                postUrl={`/post/${sys.id}`}
                date={sys.updatedAt}
              />
            )
          })
        ) : (
          <div className="flex flex-col justify-between w-full items-center">
            <NotFoundPost />
            <div className="flex flex-col justify-center items-center gap-4">
              <span>
                Aradığınız kategoride içerik bulunamadı. Eve dönerek yeni
                alternatifler bakabilirsiniz :(
              </span>
              <Link
                href="/"
                className="px-4 py-2 bg-gradient-to-t from-green-800 to-green-700 text-white rounded "
              >
                Eve dön!
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
