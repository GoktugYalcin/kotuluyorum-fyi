import React from 'react'

import clsx from 'clsx'
import Link from 'next/link'

import ThemeButton from '@/components/shared/ThemeButton'

export default async function Navbar() {
  const titleClasses = clsx(
    'text-2xl font-bold px-6 py-4 rounded-2xl bg-gray-300'
  )
  const navClasses = clsx(
    'cursor-pointer hover:bg-gradient-to-r from-gray-500 to-gray-400 bg-clip-text nowrap lg:hover:text-xl hover:text-[17px] lg:text-md text-sm hover:font-bold transition-all'
  )

  return (
    <div className="w-full flex items-center justify-between lg:px-72 lg:flex-row flex-col lg:gap-0 gap-3">
      <div className="lg:block flex justify-center items-center gap-5">
        <div className={titleClasses}>
          <Link
            href="/"
            className="bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 text-transparent"
          >
            Kötülüyorum.fyi
          </Link>
        </div>
        <ThemeButton />
      </div>
      <div className="flex justify-center items-center">
        <ul className="lg:w-[initial] w-full inline-flex lg:gap-9 gap-3 lg:justify-center justify-between items-center lg:px-6 px-4 lg:py-4 py-4 rounded-2xl bg-gray-300 text-[--card-text]">
          <li className={navClasses}>Anasayfa</li>
          <li className={navClasses}>Ayın en çok kötüleneni</li>
          <Link className={navClasses} href={'/category'}>
            Kategoriler
          </Link>
        </ul>
      </div>
    </div>
  )
}
