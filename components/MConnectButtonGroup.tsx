import { WalletButton } from '@rainbow-me/rainbowkit'
import classNames from 'classnames'
import React from 'react'

export const MConnectButtonGroup = ({ onSuccess }: { onSuccess?: () => void }) => {
  const onConnect = async (ready: boolean, connect: () => Promise<void>) => {
    if (ready) {
      await connect()
      onSuccess?.()
    }
  }

  return (
    <>
      <WalletButton.Custom wallet="metamask">
        {({ ready, connect }) => {
          return (
            <div
              className={classNames('cursor-pointer', {
                'opacity-50': !ready,
              })}
              onClick={async () => onConnect(ready, connect)}
            >
              <img src={'/metamask.png'} alt={'rainbow'} className={'mx-auto w-[64px]'} />
              <p className={'mt-2 text-sm font-medium'}>Metamask</p>
            </div>
          )
        }}
      </WalletButton.Custom>
      <WalletButton.Custom wallet="rainbow">
        {({ ready, connect }) => {
          return (
            <div
              className={classNames('cursor-pointer', {
                'opacity-50': !ready,
              })}
              onClick={async () => onConnect(ready, connect)}
            >
              <img src={'/rainbow.png'} alt={'rainbow'} className={'mx-auto w-[64px]'} />
              <p className={'mt-2 text-sm font-medium'}>Rainbow</p>
            </div>
          )
        }}
      </WalletButton.Custom>
      <WalletButton.Custom wallet="coinbase">
        {({ ready, connect }) => {
          return (
            <div
              className={classNames('cursor-pointer', {
                'opacity-50': !ready,
              })}
              onClick={async () => onConnect(ready, connect)}
            >
              <img src={'/coinbase.png'} alt={'coinbase'} className={'mx-auto w-[64px]'} />
              <p className={'mt-2 text-sm font-medium'}>Coinbase</p>
            </div>
          )
        }}
      </WalletButton.Custom>
    </>
  )
}
