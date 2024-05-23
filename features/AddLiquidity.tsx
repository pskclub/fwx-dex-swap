import { Button, Input } from '@nextui-org/react'
import React from 'react'
import { PlusIcon } from '@heroicons/react/16/solid'
import { CardMain } from '@/components/CardMain'
import { RequireConnected } from '@/components/RequireConnected'
import { StatusDetail } from '@/components/StatusDetail'
import { NumberHelper } from '@/utils/NumberHelper'
import { useMe } from '@/hooks/useMe'

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

export const AddLiquidity = () => {
  const me = useMe()

  return (
    <div className={'mt-4'}>
      <StatusDetail />
      <CardMain>
        <div className={'space-y-4'}>
          <div>
            <p className={'mb-2 text-end text-xs text-[#6C6C8C]'}>
              Balance: {NumberHelper.display(me.b4fwxBalance, me.b4fwxDecimals)}
            </p>
            <Input
              type="text"
              variant={'bordered'}
              radius={'sm'}
              placeholder="Enter amount"
              classNames={inputClassNames}
              endContent={
                <Button
                  startContent={
                    <img src="/currency/b4fwx.png" alt="b4fwx" className={'h-[12px]'} />
                  }
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
          </div>
          <div>
            <p className={'mb-2 text-end text-xs text-[#6C6C8C]'}>
              Balance: {NumberHelper.display(me.usdcBalance, me.usdcDecimals)}
            </p>
            <Input
              type="text"
              radius={'sm'}
              variant={'bordered'}
              placeholder="Enter amount"
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
                <p className={'mt-1 text-xs text-gray-400'}>$100</p>
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
                <p className={'mt-1 text-xs text-gray-400'}>$100</p>
              </div>
            </div>
          </div>
        </div>
        <RequireConnected>
          <Button
            className={'mt-4 text-xl font-semibold'}
            color={'primary'}
            radius={'sm'}
            size={'lg'}
            fullWidth
          >
            Approve B4FWX
          </Button>
          <Button
            className={'mt-4 text-xl font-semibold'}
            color={'primary'}
            radius={'sm'}
            size={'lg'}
            fullWidth
          >
            Approve USDC
          </Button>
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
          <Button
            className={'mt-4 text-xl font-semibold'}
            color={'primary'}
            isDisabled={true}
            radius={'sm'}
            size={'lg'}
            fullWidth
          >
            Not Enough USDC
          </Button>
          <Button
            className={'mt-4 text-xl font-semibold'}
            color={'primary'}
            isDisabled={true}
            radius={'sm'}
            size={'lg'}
            fullWidth
          >
            Not Enough B4FWX
          </Button>
          <Button
            className={'mt-4 text-xl font-semibold'}
            color={'primary'}
            isDisabled={true}
            radius={'sm'}
            size={'lg'}
            fullWidth
          >
            Add Liquidity
          </Button>
        </RequireConnected>
      </CardMain>
    </div>
  )
}
