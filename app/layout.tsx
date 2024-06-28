import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/cn'
import GridBackground from '@/components/shared/GridBackground'
import React from 'react'
import Footer from '@/components/shared/Footer'
import ThemeButton from '@/components/shared/ThemeButton'
import { ThemeProvider } from 'next-themes'

const Space = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  creator: 'A. Göktuğ Yalçın',
  title: 'Kötülüyorum.fyi',
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
          <ThemeButton />
          <GridBackground
            width={20}
            height={20}
            x={-1}
            y={-1}
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
