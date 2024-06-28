'use client'

import React from 'react'
import SunIcon from '@/components/icons/SunIcon'
import MoonIcon from '@/components/icons/MoonIcon'
import { useTheme } from 'next-themes'

const ThemeButton = () => {
  const { theme, setTheme } = useTheme()
  return (
    <span
      className="ml-4 px-4 py-4 bg-gray-300 rounded-2xl hover:scale-110 text-[--card-text] transition-all cursor-pointer absolute right-16 top-[70px] z-[300] overflow-hidden active:scale-105 select-none"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? <SunIcon size={20} /> : <MoonIcon size={20} />}
    </span>
  )
}

export default ThemeButton
