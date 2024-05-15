import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react'
import React from 'react'
import Link from 'next/link'
import { Card } from '@nextui-org/card'

export default function Home() {
  return (
    <>
      <Navbar maxWidth={'2xl'} className={'mb-4 bg-foreground text-white'}>
        <NavbarBrand>
          <img src={'/logo.png'} className={'h-[15px]'} alt={'logo'} />
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Button
              endContent={
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00008 12.125L3.79175 6.91667L4.52091 6.1875L9.00008 10.6667L13.4792 6.1875L14.2084 6.91667L9.00008 12.125Z"
                    fill="#F4F4F6"
                  />
                </svg>
              }
              as={Link}
              color="secondary"
              href="#"
              radius={'full'}
              size={'sm'}
            >
              Avalanche Fuji
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" radius={'full'} size={'sm'}>
              Connect Wallet
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <div className={'mx-auto px-4 md:w-[480px]'}>
        <div className={'mb-6'}>
          <div className={'flex space-x-3'}>
            <Button radius={'full'} color="primary" size={'lg'}>
              Swap
            </Button>{' '}
            <Button radius={'full'} color="primary" size={'lg'}>
              Remove Liquidity
            </Button>{' '}
            <Button radius={'full'} color="primary" size={'lg'}>
              Swap
            </Button>
          </div>
        </div>
        <Card className={'border bg-foreground p-4'}>
          <Button radius={'sm'} fullWidth color="primary" size={'lg'}>
            Connect Wallet
          </Button>
        </Card>
      </div>
    </>
  )
}
