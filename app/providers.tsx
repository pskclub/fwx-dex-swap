'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { cookieStorage, createStorage, WagmiProvider } from 'wagmi'
import { getDefaultConfig, getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { bscTestnet } from 'viem/chains'

const { wallets } = getDefaultWallets()

export const config = getDefaultConfig({
  appName: 'FWX Dex',
  wallets: [...wallets],
  projectId: '57b485bae5faecdd345994aa2f00654b',
  chains: [bscTestnet],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
})

const queryClient = new QueryClient()

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
