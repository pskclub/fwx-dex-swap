import React from 'react'
import { Button, Input } from '@nextui-org/react'

const inputClassNames = {
  label:
    'text-gray-200 ring-0 shadow-none font-medium text-sm group-data-[filled-within=true]:text-gray-200',
  input: [
    'bg-transparent data-[hover=true]:bg-transparent',
    'group-data-[has-value=true]:text-gray-50',
    'text-white',
    'font-semibold',
    'text-2xl',
    'placeholder:text-gray-400',
  ],
  innerWrapper: 'bg-transparent mt-6',
  inputWrapper: [
    'px-0',
    'shadow-none',
    'bg-transparent',
    'data-[hover=true]:bg-transparent',
    'hover:bg-transparent',
    'group-data-[focus=true]:bg-transparent',
    '!cursor-text',
  ],
}

export const Swap = () => {
  return (
    <div>
      <div>
        <Input
          type="text"
          label="You Pay"
          placeholder="0.00"
          classNames={inputClassNames}
          endContent={
            <Button
              startContent={<img src="/currency/b4fwx.png" alt="b4fwx" className={'h-[16px]'} />}
              radius={'full'}
              size={'sm'}
              className={
                'border-1.5 border-[#242438] bg-background text-gray-400 hover:bg-primary/10 hover:text-[#BD6CFF]'
              }
            >
              B4FWX
            </Button>
          }
        />
        <div className="relative my-2 flex items-center">
          <div className="grow border-t border-divider"></div>
          <span className="mx-4 shrink text-gray-50">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.03055 12.9695C8.10029 13.0391 8.15561 13.1218 8.19335 13.2129C8.23109 13.3039 8.25052 13.4015 8.25052 13.5001C8.25052 13.5987 8.23109 13.6963 8.19335 13.7873C8.15561 13.8784 8.10029 13.9611 8.03055 14.0307L5.03055 17.0307C4.9609 17.1005 4.87818 17.1558 4.78713 17.1935C4.69609 17.2313 4.59849 17.2507 4.49993 17.2507C4.40137 17.2507 4.30377 17.2313 4.21272 17.1935C4.12168 17.1558 4.03896 17.1005 3.9693 17.0307L0.969304 14.0307C0.899621 13.961 0.844346 13.8783 0.806634 13.7873C0.768922 13.6962 0.749512 13.5986 0.749512 13.5001C0.749512 13.4016 0.768922 13.304 0.806634 13.2129C0.844346 13.1219 0.899621 13.0392 0.969304 12.9695C1.11003 12.8287 1.30091 12.7497 1.49993 12.7497C1.59847 12.7497 1.69606 12.7691 1.7871 12.8068C1.87815 12.8445 1.96087 12.8998 2.03055 12.9695L3.74993 14.6898V1.5001C3.74993 1.30119 3.82895 1.11042 3.9696 0.969772C4.11025 0.82912 4.30102 0.750102 4.49993 0.750102C4.69884 0.750102 4.88961 0.82912 5.03026 0.969772C5.17091 1.11042 5.24993 1.30119 5.24993 1.5001V14.6898L6.9693 12.9695C7.03896 12.8997 7.12168 12.8444 7.21272 12.8067C7.30377 12.7689 7.40137 12.7495 7.49993 12.7495C7.59849 12.7495 7.69609 12.7689 7.78713 12.8067C7.87818 12.8444 7.9609 12.8997 8.03055 12.9695ZM17.0306 3.96948L14.0306 0.969477C13.9609 0.899744 13.8782 0.844425 13.7871 0.806682C13.6961 0.768939 13.5985 0.749512 13.4999 0.749512C13.4014 0.749512 13.3038 0.768939 13.2127 0.806682C13.1217 0.844425 13.039 0.899744 12.9693 0.969477L9.9693 3.96948C9.82857 4.11021 9.74951 4.30108 9.74951 4.5001C9.74951 4.69912 9.82857 4.89 9.9693 5.03073C10.11 5.17146 10.3009 5.25052 10.4999 5.25052C10.699 5.25052 10.8898 5.17146 11.0306 5.03073L12.7499 3.31041V16.5001C12.7499 16.699 12.8289 16.8898 12.9696 17.0304C13.1103 17.1711 13.301 17.2501 13.4999 17.2501C13.6988 17.2501 13.8896 17.1711 14.0303 17.0304C14.1709 16.8898 14.2499 16.699 14.2499 16.5001V3.31041L15.9693 5.03073C16.11 5.17146 16.3009 5.25052 16.4999 5.25052C16.699 5.25052 16.8898 5.17146 17.0306 5.03073C17.1713 4.89 17.2503 4.69912 17.2503 4.5001C17.2503 4.30108 17.1713 4.11021 17.0306 3.96948Z"
                fill="#F4F4F6"
              />
            </svg>
          </span>
          <div className="grow border-t border-divider"></div>
        </div>
        <Input
          type="text"
          label="You Receive"
          placeholder="0.00"
          classNames={inputClassNames}
          endContent={
            <Button
              startContent={<img src="/currency/usdc.png" alt="b4fwx" className={'h-[16px]'} />}
              radius={'full'}
              size={'sm'}
              className={
                'border-1.5 border-[#242438] bg-background text-gray-400 hover:bg-primary/10 hover:text-[#BD6CFF]'
              }
            >
              B4FWX
            </Button>
          }
        />
      </div>
      <Button
        className={'mt-4 text-xl font-semibold'}
        color={'primary'}
        radius={'sm'}
        size={'lg'}
        fullWidth
      >
        Connect Wallet
      </Button>
      <Button
        className={'mt-4 text-xl font-semibold'}
        color={'primary'}
        radius={'sm'}
        size={'lg'}
        fullWidth
      >
        Swap
      </Button>
    </div>
  )
}
