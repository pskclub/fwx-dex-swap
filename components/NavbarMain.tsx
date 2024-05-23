'use client'

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  useDisclosure,
} from '@nextui-org/react'
import Image from 'next/image'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { disconnect, getAccount } from '@wagmi/core'
import { CopyIcon } from '@/components/icons/CopyIcon'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { config } from '@/app/providers'
import { ConnectWalletModal } from '@/components/ConnectWalletModal'
import { StringHelper } from '@/utils/StringHelper'

export const NavbarMain = () => {
  const { connector } = getAccount(config)
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const {
    isOpen: isDisconnectOpen,
    onOpen: disconnectOnOpen,
    onOpenChange: onOpenChangeDisconnect,
  } = useDisclosure()

  const onDisconnect = async () => {
    await disconnect(config, { connector })
    onOpenChangeDisconnect()
  }

  const onCopyAddress = (address: string) => {
    StringHelper.copy(address)
  }

  return (
    <Navbar
      maxWidth={'2xl'}
      className={'mb-4 border-b border-[#242438] bg-background text-white md:border-0'}
    >
      <ConnectWalletModal isOpen={isOpen} onOpenChange={onOpenChange} />
      <NavbarBrand>
        <Image src={'/logo.png'} className={'h-[15px]'} alt={'logo'} width={50.08} height={14.59} />
      </NavbarBrand>
      <NavbarContent justify="end" className={'gap-2 md:gap-3'}>
        <NavbarItem>
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
                <div className={'flex items-center'}>
                  {(() => {
                    if (!connected || !ready) {
                      return (
                        <Button
                          onClick={onOpen}
                          className={'font-medium'}
                          isLoading={!ready}
                          color="primary"
                          radius={'full'}
                          size={'sm'}
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
                          radius={'full'}
                          size={'sm'}
                          className={'font-medium'}
                          endContent={<ChevronDownIcon className={'size-[16px]'} />}
                        >
                          Wrong network
                        </Button>
                      )
                    }

                    return (
                      <>
                        <Modal
                          isOpen={isDisconnectOpen}
                          onOpenChange={onOpenChangeDisconnect}
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
                                <ModalBody className={'py-6'}>
                                  <div className={'my-4'}>
                                    <p className={'text-center font-medium'}>
                                      {account.displayName}
                                    </p>
                                    <p className={'text-center text-sm font-medium'}>
                                      {account.displayBalance ? account.displayBalance : ''}
                                    </p>
                                  </div>
                                  <div className={'flex space-x-3'}>
                                    <Button
                                      onClick={() => {
                                        onCopyAddress(account.address)
                                      }}
                                      startContent={<CopyIcon />}
                                      radius={'sm'}
                                      fullWidth
                                      color={'secondary'}
                                      className={
                                        'h-auto flex-col border border-divider bg-secondary py-4'
                                      }
                                    >
                                      Copy Address
                                    </Button>
                                    <Button
                                      startContent={
                                        <svg
                                          width="25"
                                          height="24"
                                          viewBox="0 0 25 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M11 20.25C11 20.4489 10.921 20.6397 10.7803 20.7803C10.6397 20.921 10.4489 21 10.25 21H5C4.60218 21 4.22064 20.842 3.93934 20.5607C3.65804 20.2794 3.5 19.8978 3.5 19.5V4.5C3.5 4.10218 3.65804 3.72064 3.93934 3.43934C4.22064 3.15804 4.60218 3 5 3H10.25C10.4489 3 10.6397 3.07902 10.7803 3.21967C10.921 3.36032 11 3.55109 11 3.75C11 3.94891 10.921 4.13968 10.7803 4.28033C10.6397 4.42098 10.4489 4.5 10.25 4.5H5V19.5H10.25C10.4489 19.5 10.6397 19.579 10.7803 19.7197C10.921 19.8603 11 20.0511 11 20.25ZM21.2806 11.4694L17.5306 7.71937C17.3899 7.57864 17.199 7.49958 17 7.49958C16.801 7.49958 16.6101 7.57864 16.4694 7.71937C16.3286 7.86011 16.2496 8.05098 16.2496 8.25C16.2496 8.44902 16.3286 8.63989 16.4694 8.78063L18.9397 11.25H10.25C10.0511 11.25 9.86032 11.329 9.71967 11.4697C9.57902 11.6103 9.5 11.8011 9.5 12C9.5 12.1989 9.57902 12.3897 9.71967 12.5303C9.86032 12.671 10.0511 12.75 10.25 12.75H18.9397L16.4694 15.2194C16.3286 15.3601 16.2496 15.551 16.2496 15.75C16.2496 15.949 16.3286 16.1399 16.4694 16.2806C16.6101 16.4214 16.801 16.5004 17 16.5004C17.199 16.5004 17.3899 16.4214 17.5306 16.2806L21.2806 12.5306C21.3504 12.461 21.4057 12.3783 21.4434 12.2872C21.4812 12.1962 21.5006 12.0986 21.5006 12C21.5006 11.9014 21.4812 11.8038 21.4434 11.7128C21.4057 11.6217 21.3504 11.539 21.2806 11.4694Z"
                                            fill="#F4F4F6"
                                          />
                                        </svg>
                                      }
                                      radius={'sm'}
                                      fullWidth
                                      color={'secondary'}
                                      className={
                                        'h-auto flex-col border border-divider bg-secondary py-4'
                                      }
                                      onClick={onDisconnect}
                                    >
                                      Disconnect
                                    </Button>
                                  </div>
                                </ModalBody>
                              </>
                            )}
                          </ModalContent>
                        </Modal>
                        <Button
                          onClick={openChainModal}
                          startContent={
                            chain.iconUrl && (
                              <img
                                alt={chain.name ?? 'Chain icon'}
                                src={chain.iconUrl}
                                className={'size-[22px]'}
                              />
                            )
                          }
                          endContent={<ChevronDownIcon className={'size-[16px]'} />}
                          color="secondary"
                          radius={'full'}
                          size={'sm'}
                          className={'mr-2 px-2 font-medium'}
                        >
                          <span className={'hidden md:flex'}>{chain.name}</span>
                        </Button>
                        <Button
                          onClick={disconnectOnOpen}
                          className={'bg-[#373751] font-medium '}
                          color="primary"
                          href="#"
                          radius={'full'}
                          size={'sm'}
                        >
                          {account.displayName}
                        </Button>
                      </>
                    )
                  })()}
                </div>
              )
            }}
          </ConnectButton.Custom>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
