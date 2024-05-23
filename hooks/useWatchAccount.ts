import React from 'react'
import { watchAccount } from '@wagmi/core'
import { config } from '@/app/providers'
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'data' implicitly has an 'any' type.
import { type GetAccountReturnType } from '@wagmi/core/src/actions/getAccount'

export const useWatchAccount = () => {
  const [account, setAccount] = React.useState<GetAccountReturnType>({})

  watchAccount(config, {
    onChange(data) {
      setAccount(data)
    },
  })

  return account
}
