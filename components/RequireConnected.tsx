import { Button, useDisclosure } from '@nextui-org/react'
import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { ConnectWalletModal } from '@/components/ConnectWalletModal'
import dynamic from 'next/dynamic'

const areEqual = (prevProps: any, nextProps: any) => {
  return prevProps.someValue === nextProps.someValue
}

const RequireConnectedLocal = React.memo(
  ({
    children,
  }: Readonly<{
    children?: React.ReactNode
  }>) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure()

    return (
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          authenticationStatus,
          mounted,
        }) => {
          // Note: If your app doesn't use authentication, you
          // can remove all 'authenticationStatus' checks
          const ready = mounted && authenticationStatus !== 'loading'
          const connected =
            ready &&
            account &&
            chain &&
            (!authenticationStatus || authenticationStatus === 'authenticated')

          return (
            <>
              <ConnectWalletModal isOpen={isOpen} onOpenChange={onOpenChange} />
              {(async () => {
                if (!connected || !ready) {
                  return (
                    <Button
                      onClick={onOpen}
                      className={'mt-4 text-xl font-semibold'}
                      isLoading={!ready}
                      color="primary"
                      radius={'sm'}
                      size={'lg'}
                      fullWidth
                    >
                      Connect Wallet
                    </Button>
                  )
                }

                if (chain.unsupported) {
                  return (
                    <Button
                      onClick={openChainModal}
                      color="danger"
                      radius={'sm'}
                      size={'lg'}
                      className={'mt-4 text-xl font-semibold'}
                      fullWidth
                    >
                      Wrong network
                    </Button>
                  )
                }

                return <div>{children}</div>
              })()}
            </>
          )
        }}
      </ConnectButton.Custom>
    )
  },
  areEqual
)

RequireConnectedLocal.displayName = 'RequireConnected'

export const RequireConnected = dynamic(async () => RequireConnectedLocal, {
  ssr: true,
  loading: () => (
    <Button
      className={'mt-4 text-xl font-semibold'}
      isLoading={true}
      color="primary"
      radius={'sm'}
      size={'lg'}
      fullWidth
    >
      Connect Wallet
    </Button>
  ),
})
