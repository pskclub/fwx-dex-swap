import { Button, Chip, Input } from '@nextui-org/react'
import { ArrowDownIcon, PlusIcon } from '@heroicons/react/16/solid'
import React from 'react'
import { CardMain } from '@/components/CardMain'
import { RequireConnected } from '@/components/RequireConnected'
import { StatusDetail } from '@/components/StatusDetail'
import { useMe } from '@/hooks/useMe'
import { NumberHelper } from '@/utils/NumberHelper'

const inputClassNames = {
  input: [
    'bg-transparent data-[hover=true]:bg-transparent',
    'group-data-[has-value=true]:text-gray-50',
    'text-white',
    'text-md',
    'placeholder:text-gray-400',
  ],
  innerWrapper: 'bg-transparent',
  inputWrapper: [
    'border-1 border-divider data-[hover=true]:border-divider',
    'group-data-[focus=true]:border-divider',
    'shadow-none',
    'py-2',
    'h-12',
    'bg-transparent',
    'data-[hover=true]:bg-transparent',
    'hover:bg-transparent',
    'group-data-[focus=true]:bg-transparent',
    '!cursor-text',
  ],
}

export const RemoveLiquidity = () => {
  const [percentage, setPercentage] = React.useState('0')
  const me = useMe()

  return (
    <div className={'mt-4'}>
      <StatusDetail />
      <CardMain>
        <div className={'space-y-4'}>
          <div>
            <div className={'mb-2 flex items-center justify-between'}>
              <p className={'text-gray-50'}>Percentage to withdraw</p>
              <p className={'text-end text-xs text-[#6C6C8C]'}>
                Balance: {NumberHelper.display(me.b4fwxBalance, me.b4fwxDecimals)}
              </p>
            </div>
            <Input
              type="text"
              variant={'bordered'}
              radius={'sm'}
              placeholder="Enter amount"
              classNames={inputClassNames}
              value={percentage}
            />
            <div className={'mt-4 flex space-x-2'}>
              <Chip
                onClick={() => {
                  setPercentage('25')
                }}
                size={'lg'}
                radius={'full'}
                color={'secondary'}
                className={'w-full max-w-full cursor-pointer text-center'}
              >
                25%
              </Chip>
              <Chip
                onClick={() => {
                  setPercentage('50')
                }}
                size={'lg'}
                radius={'full'}
                color={'secondary'}
                className={'w-full max-w-full cursor-pointer text-center'}
              >
                50%
              </Chip>
              <Chip
                onClick={() => {
                  setPercentage('75')
                }}
                size={'lg'}
                radius={'full'}
                color={'secondary'}
                className={'w-full max-w-full cursor-pointer text-center'}
              >
                75%
              </Chip>
              <Chip
                onClick={() => {
                  setPercentage('100')
                }}
                size={'lg'}
                radius={'full'}
                color={'secondary'}
                className={'w-full max-w-full cursor-pointer text-center'}
              >
                100%
              </Chip>
            </div>
          </div>
        </div>
        <ArrowDownIcon className={'mx-auto my-4 size-[16px]'} />
        <div
          className={
            'space-y-2 rounded-[12px] border-1.5 border-[#242438] bg-background p-3 text-sm'
          }
        >
          <div className={'flex items-center justify-between'}>
            <p>50,000</p>
            <p>B4FWX</p>
          </div>
          <div className={'flex items-center justify-between'}>
            <p>50,000</p>
            <p>USDC</p>
          </div>
        </div>
        <div className={'mt-4'}>
          <p className={'text-sm text-gray-50'}>Deposit Balance</p>
          <div className={'mt-3 flex flex-col items-center space-x-2 md:flex-row'}>
            <div
              className={
                'mb-3 flex w-full flex-1 cursor-pointer items-center rounded-[12px] border border-divider p-3 text-xs text-gray-300 md:mb-0 md:justify-center md:space-x-3'
              }
            >
              <img src="/currency/b4fwx.png" alt="b4fwx" className={'mr-3 h-[32px] md:mr-0'} />
              <div>
                <p className={'text-sm font-medium'}>
                  100,000 <span className={'text-gray-400'}>B4FWX</span>
                </p>
                <p className={'mt-1 text-xs text-gray-400'}>$200</p>
              </div>
            </div>
            <PlusIcon className={'hidden size-[24px] md:flex'} />
            <div
              className={
                'mb-3 flex w-full flex-1 cursor-pointer items-center rounded-[12px] border border-divider p-3 text-xs text-gray-300 md:mb-0 md:justify-center md:space-x-3'
              }
            >
              <img src="/currency/usdc.png" alt="b4fwx" className={'mr-3 h-[32px] md:mr-0'} />
              <div>
                <p className={'text-sm font-medium'}>
                  100,000 <span className={'text-gray-400'}>USDC</span>
                </p>
                <p className={'mt-1 text-xs text-gray-400'}>$200</p>
              </div>
            </div>
          </div>
        </div>
        <RequireConnected>
          <Button
            className={'mt-4 text-xl font-semibold'}
            color={'primary'}
            isDisabled={true}
            radius={'sm'}
            size={'lg'}
            fullWidth
          >
            Enter Amount
          </Button>
        </RequireConnected>
      </CardMain>
    </div>
  )
}
