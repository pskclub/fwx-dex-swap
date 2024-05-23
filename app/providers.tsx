'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import {
  darkTheme,
  getDefaultConfig,
  getDefaultWallets,
  RainbowKitProvider,
  type Theme,
} from '@rainbow-me/rainbowkit'
import { avalanche, avalancheFuji } from 'viem/chains'
import merge from 'lodash.merge'
import { font } from '@/app/font'

const { wallets } = getDefaultWallets()

export const config = getDefaultConfig({
  appName: 'FWX Dex',
  wallets: [...wallets],
  projectId: '57b485bae5faecdd345994aa2f00654b',
  chains: [avalancheFuji, avalanche],
  ssr: true,
})

const queryClient = new QueryClient()

const myTheme = merge(darkTheme(), {
  colors: {
    accentColor: '#9D4EDD',
    modalBackground: '#242438',
    modalBorder: 'transparent',
    closeButtonBackground: 'transparent',
    actionButtonBorder: 'transparent',
    closeButton: 'white',
  },
  radii: {
    modal: '20px',
  },
  fonts: {
    body: font.style.fontFamily,
  },
} as Theme)

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider locale="en-US" theme={myTheme}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
