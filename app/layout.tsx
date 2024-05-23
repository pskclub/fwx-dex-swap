import type { Metadata } from 'next'
import './globals.css'
import '@rainbow-me/rainbowkit/styles.css'
import { NextUIProvider } from '@nextui-org/react'
import { Providers } from '@/app/providers'
import { font } from '@/app/font'
import { Toaster } from 'react-hot-toast'

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
      <body className={font.className}>
        <NextUIProvider>
          <Toaster position={'top-center'} />
          <Providers>{children}</Providers>
        </NextUIProvider>
      </body>
    </html>
  )
}
