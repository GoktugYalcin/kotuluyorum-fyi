'use client'

import React from 'react'

import { AnimatedCategoryProps } from '@/interfaces/AnimatedCategoryProps'
import { motion } from 'framer-motion'
import Link from 'next/link'

import { RandomGenerator } from '@/lib/RandomGenerator'
import Luminance from '@/lib/luminance'

const AnimatedCategory: React.FC<AnimatedCategoryProps> = ({
  category,
  id
}) => {
  const random = new RandomGenerator()
  const randomColor = random.colorGenerate()
  return (
    <motion.div
      initial={{ opacity: 0, y: -1 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.random() * (0.15 - 0.5) + 0.15 }}
    >
      <Link
        href={`/category/${id}`}
        className="lg:px-4 px-2 lg:py-3 py-1 rounded-xl transition-all categoryCard flex justify-center items-center gap-1 font-bold relative"
        style={{
          backgroundColor: randomColor,
          color: Luminance.decide(randomColor),
          transform: `rotate(${Math.random() * 30 - 20}deg)`,
          transition: 'all 100ms ease-in-out',
          zIndex: random.numberGenerate(0, 10)
        }}
      >
        <span className="text-3xl">#</span>
        {category}
      </Link>
    </motion.div>
  )
}

export default AnimatedCategory
