import React from 'react'
import { Button } from '@nextui-org/react'

export const Swap = () => {
  return (
    <div>
      <Button
        className={'text-xl font-semibold'}
        color={'primary'}
        radius={'sm'}
        size={'lg'}
        fullWidth
      >
        Connect Wallet
      </Button>
    </div>
  )
}
