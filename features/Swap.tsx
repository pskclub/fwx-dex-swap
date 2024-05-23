import React from 'react'
import { Button, Chip, Input } from '@nextui-org/react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'
import { CardMain } from '@/components/CardMain'
import { useWatchAccount } from '@/hooks/useWatchAccount'
import { RequireConnected } from '@/components/RequireConnected'
import { useMe } from '@/hooks/useMe'
import { NumberUtil } from '@/utils/NumberUtil'

const inputClassNames = {
  label:
    'text-gray-200 ring-0 shadow-none font-medium text-sm group-data-[filled-within=true]:text-gray-200 mb-6',
  input: [
    'bg-transparent data-[hover=true]:bg-transparent',
    'group-data-[has-value=true]:text-gray-50',
    'text-white',
    'font-semibold',
    'text-2xl',
    'placeholder:text-gray-400',
  ],
  innerWrapper: 'bg-transparent',
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
  const [expand, setExpand] = React.useState(false)
  const account = useWatchAccount()
  const me = useMe()

  return (
    <CardMain>
      <div>
        <div className={'flex items-center justify-between'}>
          <p className={'text-sm text-gray-200'}>You pay</p>
          {account.isConnected && (
            <p className={'text-xs text-white'}>
              <span className={'text-gray-400'}>Balance:</span>{' '}
              {NumberUtil.display(me.b4fwxBalance, me.b4fwxDecimals)}
            </p>
          )}
        </div>
        <Input
          type="text"
          placeholder="0.00"
          classNames={inputClassNames}
          endContent={
            <Button
              startContent={<img src="/currency/b4fwx.png" alt="b4fwx" className={'h-[12px]'} />}
              radius={'full'}
              size={'sm'}
              className={
                'border-1.5 border-[#242438] bg-background text-gray-50 hover:bg-primary/10 hover:text-[#BD6CFF]'
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
        <div className={'flex items-center justify-between'}>
          <p className={'text-sm text-gray-200'}>You Receive</p>
          {account.isConnected && (
            <p className={'text-xs text-white'}>
              <span className={'text-gray-400'}>Balance:</span>{' '}
              {NumberUtil.display(me.usdcBalance, me.usdcDecimals)}
            </p>
          )}
        </div>
        <Input
          type="text"
          placeholder="0.00"
          classNames={inputClassNames}
          endContent={
            <Button
              startContent={<img src="/currency/usdc.png" alt="b4fwx" className={'h-[12px]'} />}
              radius={'full'}
              size={'sm'}
              className={
                'border-1.5 border-[#242438] bg-background text-gray-50 hover:bg-primary/10 hover:text-[#BD6CFF]'
              }
            >
              USDC
            </Button>
          }
        />
      </div>
      <div className={'mt-4 rounded-[12px] border border-divider'}>
        <div
          onClick={() => {
            setExpand(!expand)
          }}
          className={
            'flex cursor-pointer select-none items-center justify-between p-3 text-xs text-gray-300'
          }
        >
          <div className={'flex items-center'}>
            {!expand ? (
              <>
                <p>Max. Slippage</p>
                <Chip className={'ml-2'} size={'sm'} radius={'sm'} color={'secondary'}>
                  1%
                </Chip>
              </>
            ) : (
              <p className={'text-xs text-gray-50'}>1 B4FWX = 0.00000007970 USDC</p>
            )}
          </div>
          <div className={'flex items-center'}>
            <svg
              className={'mr-2 size-[16px]'}
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 0C2.01377 0 1.54745 0.193154 1.20364 0.536971C0.859821 0.880788 0.666667 1.3471 0.666667 1.83333V11.6667H0.5C0.367392 11.6667 0.240215 11.7193 0.146447 11.8131C0.0526784 11.9069 0 12.0341 0 12.1667C0 12.2993 0.0526784 12.4265 0.146447 12.5202C0.240215 12.614 0.367392 12.6667 0.5 12.6667H9.5C9.63261 12.6667 9.75979 12.614 9.85355 12.5202C9.94732 12.4265 10 12.2993 10 12.1667C10 12.0341 9.94732 11.9069 9.85355 11.8131C9.75979 11.7193 9.63261 11.6667 9.5 11.6667H9.33333V10.4647C9.61234 10.6081 9.92352 10.6774 10.237 10.6659C10.5505 10.6544 10.8558 10.5625 11.1236 10.3991C11.3913 10.2356 11.6126 10.006 11.766 9.73244C11.9195 9.45884 12.0001 9.15038 12 8.83667V4.94467C12 4.54799 11.8713 4.16201 11.6333 3.84467L10.9 2.86667C10.8204 2.76058 10.702 2.69045 10.5707 2.67169C10.4394 2.65294 10.3061 2.6871 10.2 2.76667C10.0939 2.84623 10.0238 2.96468 10.005 3.09596C9.98627 3.22723 10.0204 3.36058 10.1 3.46667L10.8333 4.44467C10.9413 4.58867 11 4.76467 11 4.94467V8.83667C11 8.94566 10.9785 9.05359 10.9368 9.15429C10.8951 9.25499 10.834 9.34649 10.7569 9.42356C10.6798 9.50064 10.5883 9.56178 10.4876 9.60349C10.3869 9.6452 10.279 9.66667 10.17 9.66667C10.061 9.66667 9.95307 9.6452 9.85237 9.60349C9.75167 9.56178 9.66017 9.50064 9.5831 9.42356C9.50603 9.34649 9.44489 9.25499 9.40318 9.15429C9.36147 9.05359 9.34 8.94566 9.34 8.83667V7.66667C9.33994 7.63964 9.33771 7.61267 9.33333 7.586V1.83333C9.33333 1.59258 9.28591 1.35418 9.19378 1.13175C9.10165 0.909317 8.9666 0.707212 8.79636 0.536971C8.62612 0.36673 8.42402 0.231688 8.20159 0.139554C7.97916 0.0474206 7.74076 0 7.5 0H2.5ZM2.66667 2.5C2.66667 2.36739 2.71935 2.24021 2.81311 2.14645C2.90688 2.05268 3.03406 2 3.16667 2H6.83333C6.96594 2 7.09312 2.05268 7.18689 2.14645C7.28065 2.24021 7.33333 2.36739 7.33333 2.5V4.83333C7.33333 4.96594 7.28065 5.09312 7.18689 5.18689C7.09312 5.28065 6.96594 5.33333 6.83333 5.33333H3.16667C3.03406 5.33333 2.90688 5.28065 2.81311 5.18689C2.71935 5.09312 2.66667 4.96594 2.66667 4.83333V2.5Z"
                fill="#A7A7BB"
              />
            </svg>

            <p>$0.03</p>
            {expand ? (
              <ChevronUpIcon className={'ml-2 size-[20px]'} />
            ) : (
              <ChevronDownIcon className={'ml-2 size-[20px]'} />
            )}
          </div>
        </div>
        {expand && (
          <div className={'space-y-2 px-3 pb-3'}>
            <div className={'flex items-center justify-between'}>
              <p className={'text-xs text-gray-300'}>Max. Slippage</p>
              <Chip size={'sm'} radius={'sm'} color={'secondary'}>
                1%
              </Chip>
            </div>
            <div className={'flex items-center justify-between'}>
              <p className={'text-xs text-gray-300'}>Expected Output</p>
              <p className={'text-sm text-gray-50'}>0.05 USDC</p>
            </div>
            <div className={'flex items-center justify-between'}>
              <p className={'text-xs text-gray-300'}>Minimum Received</p>
              <p className={'text-sm text-gray-50'}>0.0498 USDC</p>
            </div>
            <div className={'flex items-center justify-between'}>
              <p className={'text-xs text-gray-300'}>Price Impact</p>
              <p className={'text-sm text-gray-50'}>0.01%</p>
            </div>
            <div className={'flex items-center justify-between'}>
              <p className={'text-xs text-gray-300'}>Fee</p>
              <p className={'text-sm text-gray-50'}>$0.6249</p>
            </div>
          </div>
        )}
      </div>
      <RequireConnected>
        <Button
          className={'mt-4 text-xl font-semibold'}
          color={'primary'}
          radius={'sm'}
          size={'lg'}
          fullWidth
        >
          Swap
        </Button>
      </RequireConnected>
    </CardMain>
  )
}
