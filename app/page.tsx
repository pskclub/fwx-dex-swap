import {
  Button,
  Card,
  CardBody,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Navbar maxWidth={'2xl'} className={'mb-4 bg-background text-white'}>
        <NavbarBrand>
          <Image
            src={'/logo.png'}
            className={'h-[15px]'}
            alt={'logo'}
            width={50.08}
            height={14.59}
          />
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem className="flex">
            <Button
              startContent={
                <svg
                  className={'-ml-1.5'}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_9394_13641)">
                    <path d="M19.3883 4.11694H4.57977V17.585H19.3883V4.11694Z" fill="white" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
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
              className={'font-semibold'}
            >
              <span className={'hidden md:flex'}>Avalanche Fuji</span>
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button
              className={'font-semibold'}
              as={Link}
              color="primary"
              href="#"
              radius={'full'}
              size={'sm'}
            >
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
        <Card className={'border border-[#242438] bg-background'}>
          <CardBody>
            <h1>fsdgsdfgsdfgsdf</h1>
            <Button radius={'sm'} fullWidth color="primary" size={'lg'}>
              Connect Wallet
            </Button>
          </CardBody>
        </Card>
      </div>
    </>
  )
}
