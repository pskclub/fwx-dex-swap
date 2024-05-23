import { Button, Divider, Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/react'
import { MConnectButtonGroup } from '@/components/MConnectButtonGroup'
import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { type useDisclosure } from '@nextui-org/use-disclosure'

export const ConnectWalletModal = ({
  isOpen,
  onOpenChange,
}: Pick<ReturnType<typeof useDisclosure>, 'isOpen' | 'onOpenChange'>) => {
  return (
    <>
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
            <div>
              <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                classNames={{
                  base: [
                    'flex',
                    'flex-col',
                    'relative',
                    'bg-secondary',
                    'z-50',
                    'w-full',
                    'box-border',
                    'outline-none',
                    'mx-1',
                    'my-1',
                    'sm:mx-6',
                    'sm:my-16',
                  ],
                  closeButton: [
                    'absolute',
                    'appearance-none',
                    'outline-none',
                    'select-none',
                    'top-1',
                    'right-1',
                    'rtl:left-1',
                    'rtl:right-[unset]',
                    'p-2',
                    'text-foreground',
                    'rounded-full',
                    'bg-transparent',
                    'hover:bg-transparent',
                    'active:bg-transparent',
                    '[&>svg]:w-[24px] [&>svg]:h-[24px]',
                  ],
                }}
              >
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col gap-1">Connect Wallet</ModalHeader>
                      <ModalBody className={'py-6'}>
                        <div className={'flex items-center justify-between text-center'}>
                          <MConnectButtonGroup onSuccess={onOpenChange} />
                        </div>
                        <Divider />
                        <div className={'text-center'}>
                          <p className={'font-bold'}>What is wallet</p>
                          <p className={'mt-3 text-sm text-gray-400'}>
                            What is wallet What is walletWhat is wallet What is walletWhat is wallet
                            What is wallet
                          </p>
                        </div>
                        <div className={'flex space-x-3'}>
                          <Button
                            radius={'sm'}
                            fullWidth
                            color={'secondary'}
                            className={'bg-[#373751]'}
                          >
                            Get wallet
                          </Button>
                          <Button
                            radius={'sm'}
                            fullWidth
                            color={'secondary'}
                            className={'bg-[#373751]'}
                          >
                            Learn more
                          </Button>
                        </div>
                      </ModalBody>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </div>
          )
        }}
      </ConnectButton.Custom>
    </>
  )
}
