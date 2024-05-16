import { http, createConfig, createStorage, cookieStorage } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'

export const config = createConfig({
  chains: [mainnet, sepolia],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  // connectors: [metaMask(), coinbaseWallet({})],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})
