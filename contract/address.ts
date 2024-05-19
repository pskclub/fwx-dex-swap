import { bscTestnet } from 'viem/chains'

export const addresses: Record<
  number,
  {
    pancakeFactory: `0x${string}`
    pancakeRouter: `0x${string}`
  }
> = {
  [bscTestnet.id]: {
    pancakeFactory: '0x6725F303b657a9451d8BA641348b6761A6CC7a17',
    pancakeRouter: '0xD99D1c33F9fC3444f8101754aBC46c52416550D1',
  },
}
