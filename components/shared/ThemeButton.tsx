'use client'

import React from 'react'

import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from 'next-themes'

import MoonIcon from '@/components/icons/MoonIcon'
import SunIcon from '@/components/icons/SunIcon'

const ThemeButton = () => {
  const { theme, setTheme } = useTheme()
  return (
    <span
      className="ml-4 px-4 py-4 bg-gray-300 rounded-2xl hover:scale-110 text-[--card-text] transition-all cursor-pointer fixed right-16 top-[70px] z-[300] overflow-hidden active:scale-105 select-none hover:text-green-600"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <AnimatePresence>
        {theme === 'light' ? (
          <motion.span
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
          >
            <SunIcon size={20} />
          </motion.span>
        ) : (
          <motion.span
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
          >
            <MoonIcon size={20} />
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  )
}

export default ThemeButton
