import Link from 'next/link'

import NotFoundAnim from '@/components/notFound/NotFoundAnim'

export default async function NotFound() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col">
      <div>
        <NotFoundAnim />
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <span>
          Aradığınız içerik bulunamadı. Eve dönerek yeni alternatifler
          bakabilirsiniz :(
        </span>
        <Link
          href="/"
          className="px-4 py-2 bg-gradient-to-t from-green-800 to-green-700 text-white rounded "
        >
          Eve dön!
        </Link>
      </div>
    </div>
  )
}
