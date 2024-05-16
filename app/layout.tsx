import type { Metadata } from 'next'
import './globals.css'
import { NextUIProvider } from '@nextui-org/react'
import localFont from 'next/font/local'
import { Faire } from '@/components/Faire'
import { QueryClient } from '@tanstack/react-query'
import { Providers } from '@/app/providers'
import { cookieToInitialState } from 'wagmi'
import { config } from '@/config'
import { headers } from 'next/headers'

const queryClient = new QueryClient()
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
  const initialState = cookieToInitialState(config, headers().get('cookie'))

  return (
    <html lang="en">
      <body className={myFont.className}>
        <div className={'fixed hidden size-full items-center justify-center md:flex'}>
          <Faire />
        </div>
        <NextUIProvider>
          <Providers initialState={initialState}>{children}</Providers>
        </NextUIProvider>
      </body>
    </html>
  )
}
