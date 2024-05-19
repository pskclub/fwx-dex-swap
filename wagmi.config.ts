import { defineConfig } from '@wagmi/cli'
import { react } from '@wagmi/cli/plugins'
import { abis } from '@/contract/abis'

export default defineConfig({
  out: 'generated.ts',
  contracts: Object.entries(abis).map(([contractName, abi]) => ({
    abi,
    name: contractName,
  })),
  plugins: [react({})],
})
