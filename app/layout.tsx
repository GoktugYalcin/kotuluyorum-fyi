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
  metadataBase: new URL(
    process.env.NODE_ENV === 'development'
      ? 'https://localhost:3000'
      : 'https://kotuluyorum.fyi'
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
          <ThemeButton />
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
