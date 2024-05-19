import type { Metadata } from 'next'
import './globals.css'
import '@rainbow-me/rainbowkit/styles.css'
import { NextUIProvider } from '@nextui-org/react'
import localFont from 'next/font/local'
import { Providers } from '@/app/providers'

const myFont = localFont({
  display: 'swap',
  src: [
    {
      path: './fonts/BasierCircle-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/BasierCircle-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/BasierCircle-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/BasierCircle-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
})

export const metadata: Metadata = {
  title: 'FWX - Real Yield and Decentralized Derivatives Platform',
  description:
    'FWX: A Decentralized Derivatives Platform on EVM chains, enabling users to predict price moves or hedge risks via its cutting-edge protocol.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <NextUIProvider>
          <Providers>{children}</Providers>
        </NextUIProvider>
      </body>
    </html>
  )
}
