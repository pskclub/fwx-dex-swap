import { useReadContracts } from 'wagmi'
import { erc20Abi } from 'abitype/abis'
import { B4FWX_ADDRESS, USDC_ADDRESS } from '@/constants/address'
import { useWatchAccount } from '@/hooks/useWatchAccount'
import { useEffect } from 'react'

export const useMe = () => {
  const account = useWatchAccount()
  const query = useReadContracts({
    contracts: [
      {
        abi: erc20Abi,
        functionName: 'balanceOf',
        address: B4FWX_ADDRESS,
        args: [account.address],
      },
      {
        abi: erc20Abi,
        functionName: 'symbol',
        address: B4FWX_ADDRESS,
      },
      {
        abi: erc20Abi,
        functionName: 'decimals',
        address: B4FWX_ADDRESS,
      },
      {
        abi: erc20Abi,
        functionName: 'balanceOf',
        address: USDC_ADDRESS,
        args: [account.address],
      },
      {
        abi: erc20Abi,
        functionName: 'symbol',
        address: USDC_ADDRESS,
      },
      {
        abi: erc20Abi,
        functionName: 'decimals',
        address: USDC_ADDRESS,
      },
    ],
    allowFailure: false,

    query: {
      staleTime: Infinity,
    },
  })

  useEffect(() => {
    console.log(query)
  }, [query])

  return {
    b4fwxBalance: query.isSuccess ? query.data[0] : 0n,
    b4fwxSymbol: query.isSuccess ? query.data[1] : null,
    b4fwxDecimals: query.isSuccess ? query.data[2] : 18,
    usdcBalance: query.isSuccess ? query.data[3] : 0n,
    usdcSymbol: query.isSuccess ? query.data[4] : null,
    usdcDecimals: query.isSuccess ? query.data[5] : 18,
  }
}
