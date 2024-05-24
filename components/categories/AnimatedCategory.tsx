'use client'

import React from 'react'
import Luminance from '@/lib/luminance'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { randomColorGenerate } from '@/lib/randomColorGenerate'
import { AnimatedCategoryProps } from '@/interfaces/AnimatedCategoryProps'

const AnimatedCategory: React.FC<AnimatedCategoryProps> = ({ category }) => {
  const randomColor = randomColorGenerate()
  return (
    <motion.div
      initial={{ opacity: 0, y: -1 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.random() * (0.15 - 0.5) + 0.15 }}
    >
      <Link
        href={`/category/${category}`}
        className="px-4 py-3 rounded-xl transition-all categoryCard flex justify-center items-center gap-1 font-bold"
        style={{
          backgroundColor: randomColor,
          color: Luminance.decide(randomColor),
          transform: `rotate(${Math.random() * 30 - 20}deg)`,
          transition: 'all 100ms ease-in-out',
          zIndex: 2
        }}
      >
        <span className="text-xl">#</span>
        {category}
      </Link>
    </motion.div>
  )
}

export default AnimatedCategory
