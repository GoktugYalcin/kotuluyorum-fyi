'use client'

import React from 'react'

import { motion } from 'framer-motion'
import Link from 'next/link'

const SharedLinkBanner: React.FC<{ additionalTitle?: string }> = ({
  additionalTitle
}) => {
  return (
    <motion.span
      className="lg:absolute sticky w-full lg:ml-0 ml-4 lg:inline flex justify-start items-center lg:top-16 top-3 lg:left-16 z-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        stiffness: 260,
        damping: 20
      }}
    >
      <Link
        href="/"
        className="lg:text-2xl text-lg font-bold bg-gray-200 lg:px-4 px-3 py-2 rounded-xl transition-all hover:bg-gray-300 hover:scale-110 text-[--card-text]"
      >
        Kötülüyorum.fyi
        {!!additionalTitle && ' - '}
        {!!additionalTitle && (
          <span className={'font-light'}>{additionalTitle}</span>
        )}
      </Link>
    </motion.span>
  )
}

export default SharedLinkBanner
