'use client'

import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  useDisclosure,
} from '@nextui-org/react'
import Image from 'next/image'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import React from 'react'
import { useAccount, useConnect } from 'wagmi'
import { config } from '@/config'
import { disconnect, getAccount, injected } from '@wagmi/core'
import truncateEthAddress from 'truncate-eth-address'
import { CopyIcon } from '@/components/icons/CopyIcon'
import { WalletButton } from '@rainbow-me/rainbowkit'
import classNames from 'classnames'

export const NavbarMain = () => {
  const account = useAccount()
  const { connector } = getAccount(config)
  const { connect } = useConnect({
    config,
  })

  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const {
    isOpen: isDisconnectOpen,
    onOpen: disconnectOnOpen,
    onOpenChange: onOpenChangeDisconnect,
  } = useDisclosure()

  const onConnect = () => {
    connect(
      { connector: injected() },
      {
        onSuccess: () => {
          onOpenChange()
        },
      }
    )
  }

  const onDisconnect = async () => {
    await disconnect(config, { connector })
    onOpenChangeDisconnect()
  }

  const onCopyAddress = () => {
    navigator.clipboard.writeText(account.address || '')
  }

  return (
    <Navbar
      maxWidth={'2xl'}
      className={'mb-4 border-b border-[#242438] bg-background text-white md:border-0'}
    >
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
                  <WalletButton.Custom wallet="metamask">
                    {({ ready, connect }) => {
                      return (
                        <div
                          className={classNames('cursor-pointer', {
                            'opacity-50': !ready,
                          })}
                          onClick={() => {
                            ready && connect()
                          }}
                        >
                          <img
                            src={'/metamask.png'}
                            alt={'rainbow'}
                            className={'mx-auto w-[64px]'}
                          />
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
                          onClick={() => {
                            ready && connect()
                          }}
                        >
                          <img
                            src={'/rainbow.png'}
                            alt={'rainbow'}
                            className={'mx-auto w-[64px]'}
                          />
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
                          onClick={() => {
                            ready && connect()
                          }}
                        >
                          <img
                            src={'/coinbase.png'}
                            alt={'coinbase'}
                            className={'mx-auto w-[64px]'}
                          />
                          <p className={'mt-2 text-sm font-medium'}>Coinbase</p>
                        </div>
                      )
                    }}
                  </WalletButton.Custom>
                </div>
                <Divider />
                <div className={'text-center'}>
                  <p className={'font-bold'}>What is wallet</p>
                  <p className={'mt-3 text-sm text-gray-400'}>
                    What is wallet What is walletWhat is wallet What is walletWhat is wallet What is
                    wallet
                  </p>
                </div>
                <div className={'flex space-x-3'}>
                  <Button radius={'sm'} fullWidth color={'secondary'} className={'bg-[#373751]'}>
                    Get wallet
                  </Button>
                  <Button radius={'sm'} fullWidth color={'secondary'} className={'bg-[#373751]'}>
                    Learn more
                  </Button>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
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
                    {truncateEthAddress(account.address || '')}
                  </p>
                  <p className={'text-center text-sm font-medium'}>$12,023.02</p>
                </div>
                <div className={'flex space-x-3'}>
                  <Button
                    onClick={onCopyAddress}
                    startContent={<CopyIcon />}
                    radius={'sm'}
                    fullWidth
                    color={'secondary'}
                    className={'h-auto flex-col border border-divider bg-secondary py-4'}
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
                    className={'h-auto flex-col border border-divider bg-secondary py-4'}
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
      <NavbarBrand>
        <Image src={'/logo.png'} className={'h-[15px]'} alt={'logo'} width={50.08} height={14.59} />
      </NavbarBrand>
      <NavbarContent justify="end" className={'gap-2 md:gap-3'}>
        <NavbarItem className="flex">
          <Button
            startContent={
              <svg
                className={'-ml-1.5 size-[24px]'}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_9394_13641)">
                  <path d="M19.3883 4.11694H4.57977V17.585H19.3883V4.11694Z" fill="white" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23.976 11.9999C23.976 18.6186 18.6107 23.984 11.992 23.984C5.3734 23.984 0.00796509 18.6186 0.00796509 11.9999C0.00796509 5.38131 5.3734 0.0158691 11.992 0.0158691C18.6107 0.0158691 23.976 5.38131 23.976 11.9999ZM8.59607 16.769H6.27031C5.78159 16.769 5.54019 16.769 5.393 16.6748C5.23401 16.5717 5.13686 16.401 5.12509 16.2125C5.11625 16.0389 5.23697 15.8269 5.47837 15.4029L11.221 5.28079C11.4653 4.85096 11.589 4.63604 11.745 4.55656C11.9128 4.47119 12.113 4.47119 12.2808 4.55656C12.4369 4.63604 12.5605 4.85096 12.8048 5.28079L13.9854 7.3416L13.9914 7.35211C14.2553 7.81324 14.3892 8.04708 14.4476 8.2925C14.5124 8.56041 14.5124 8.84303 14.4476 9.11094C14.3887 9.35824 14.2563 9.59377 13.9883 10.0619L10.9719 15.3941L10.9641 15.4078C10.6984 15.8727 10.5638 16.1083 10.3772 16.2861C10.1741 16.4804 9.92972 16.6217 9.66181 16.7013C9.41745 16.769 9.14367 16.769 8.59607 16.769ZM14.4694 16.769H17.802C18.2936 16.769 18.5409 16.769 18.6882 16.6719C18.8472 16.5688 18.9472 16.3951 18.9562 16.2068C18.9646 16.0387 18.8465 15.835 18.6151 15.4357C18.6072 15.4221 18.5992 15.4082 18.5911 15.3942L16.9217 12.5385L16.9028 12.5063C16.6682 12.1097 16.5498 11.9093 16.3977 11.8319C16.23 11.7465 16.0326 11.7465 15.8649 11.8319C15.7118 11.9114 15.5881 12.1204 15.3438 12.5414L13.6804 15.3971L13.6747 15.4069C13.4312 15.8273 13.3095 16.0373 13.3183 16.2096C13.3301 16.3981 13.4272 16.5717 13.5862 16.6748C13.7305 16.769 13.9778 16.769 14.4694 16.769Z"
                    fill="#E84142"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_9394_13641">
                    <rect width="23.984" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            }
            endContent={<ChevronDownIcon />}
            as={Link}
            color="secondary"
            href="#"
            radius={'full'}
            size={'sm'}
            className={'font-medium'}
          >
            <span className={'hidden md:flex'}>PskCluB</span>
          </Button>
        </NavbarItem>
        <NavbarItem>
          {account.isConnected ? (
            <Button
              onClick={disconnectOnOpen}
              className={'bg-[#373751] font-medium '}
              as={Link}
              color="primary"
              href="#"
              radius={'full'}
              size={'sm'}
            >
              {truncateEthAddress(account.address || '')}
            </Button>
          ) : (
            <Button
              onClick={onOpen}
              className={'font-medium'}
              as={Link}
              color="primary"
              href="#"
              radius={'full'}
              size={'sm'}
            >
              Connect Wallet
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
