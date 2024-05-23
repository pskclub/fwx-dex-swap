import { useReadContracts } from 'wagmi'
import { erc20Abi } from 'abitype/abis'
import { B4FWX_ADDRESS, USDC_ADDRESS } from '@/constants/address'
import { useWatchAccount } from '@/hooks/useWatchAccount'
import { useEffect } from 'react'
import { useReadPancakeFactoryGetPair } from '@/generated'
import { addresses } from '@/contract/address'

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

  const getPairQuery = useReadPancakeFactoryGetPair(
    account.chainId && {
      address: addresses[account.chainId].pancakeFactory,
      args: [B4FWX_ADDRESS, USDC_ADDRESS],
    }
  )

  const liquidityQuery = useReadContracts(
    getPairQuery.isSuccess
      ? {
          contracts: [
            {
              abi: erc20Abi,
              functionName: 'balanceOf',
              address: B4FWX_ADDRESS,
              args: [getPairQuery.data],
            },
            {
              abi: erc20Abi,
              functionName: 'balanceOf',
              address: USDC_ADDRESS,
              args: [getPairQuery.data],
            },
          ],
          allowFailure: false,
          query: {
            enabled: query.isSuccess && getPairQuery.isSuccess,
            select: ([b4fwx, usdc]) => {
              return {
                b4fwxLiqBalance: b4fwx,
                usdcLiqBalance: usdc,
              }
            },
          },
        }
      : undefined
  )

  useEffect(() => {
    console.log(query)
  }, [query])

  return {
    b4fwxBalance: query.isSuccess ? query.data[0] : 0n,
    b4fwxSymbol: query.isSuccess ? query.data[1] : null,
    b4fwxDecimals: query.isSuccess ? query.data[2] : 18,
    b4fwxLiquidity: liquidityQuery.isSuccess ? liquidityQuery.data.b4fwxLiqBalance : 0n,
    usdcBalance: query.isSuccess ? query.data[3] : 0n,
    usdcSymbol: query.isSuccess ? query.data[4] : null,
    usdcDecimals: query.isSuccess ? query.data[5] : 18,
    usdcLiquidity: liquidityQuery.isSuccess ? liquidityQuery.data.usdcLiqBalance : 0n,
  }
}
