import React from 'react'

import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Space_Grotesk } from 'next/font/google'

import Footer from '@/components/shared/Footer'
import GridBackground from '@/components/shared/GridBackground'
import ThemeButton from '@/components/shared/ThemeButton'

import './globals.css'

import { cn } from '@/lib/cn'

const Space = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === 'development'
      ? 'https://localhost:3000'
      : 'https://goktugyalcin.github.io/kotuluyorum-fyi'
  ),
  creator: 'A. Göktuğ Yalçın',
  title: 'Kötülüyorum.fyi - Ana Sayfa',
  description: 'Neden bir ürün tamamen iyi olsun ki?'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={Space.className}>
        <ThemeProvider>
          <GridBackground
            width={30}
            height={30}
            x={-10}
            y={-10}
            className={cn(
              '[mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)] '
            )}
          />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
