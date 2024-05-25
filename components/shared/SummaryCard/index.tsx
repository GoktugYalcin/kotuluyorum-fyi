'use client'

import React from 'react'
import SummaryImage from '@/components/shared/SummaryCard/SummaryImage'
import { SummaryCardProps } from '@/interfaces/SummaryCardProps'
import { DM_Sans } from 'next/font/google'
import clsx from 'clsx'
import dayjs from 'dayjs'
import Link from 'next/link'
import { motion } from 'framer-motion'

const dmSans = DM_Sans({ subsets: ['latin'] })

const SummaryCard: React.FC<SummaryCardProps> = ({
  title,
  summary,
  imageSrc,
  postUrl,
  date
}) => {
  const timeLabel = clsx(dmSans.className, 'text-green-600 -mt-1 mb-1')
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        stiffness: 260,
        damping: 20
      }}
    >
      <Link
        href={postUrl}
        target="_blank"
        className="flex flex-col w-96 p-8 bg-gradient-to-br from-gray-200 to-gray-100 rounded-xl gap-2 group"
      >
        <SummaryImage src={imageSrc} />
        <div className="flex flex-col justify-start gap-1">
          <span className="font-bold text-lg">{title}</span>
          <span className={timeLabel}>{dayjs(date).format('D.MM.YYYY')}</span>
          <span className="italic">{summary}</span>
        </div>
      </Link>
    </motion.span>
  )
}

export default SummaryCard
