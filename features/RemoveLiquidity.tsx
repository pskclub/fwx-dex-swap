import { Button, Card, CardBody, Chip, Input } from '@nextui-org/react'
import { PlusIcon } from '@heroicons/react/16/solid'
import React from 'react'

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
  return (
    <div className={'mt-4'}>
      <div className={'flex gap-3'}>
        <Chip size={'md'} radius={'sm'} color={'secondary'} className={'w-full max-w-full'}>
          Liquidity $1,678,432
        </Chip>
        <Chip size={'md'} radius={'sm'} color={'secondary'} className={'w-full max-w-full'}>
          APR (24h) 189.96%
        </Chip>
      </div>
      <div className={'mt-4 flex space-x-3'}>
        <Chip size={'sm'} radius={'sm'} color={'secondary'}>
          Liquidity $1,678,432
        </Chip>
        <Chip size={'sm'} radius={'sm'} color={'secondary'}>
          1 B4FWX = 0.00000007970 USDC
        </Chip>
      </div>
      <Card className={'mt-4 rounded-[20px] border-1.5 border-[#242438] bg-background'}>
        <CardBody className={'px-3 py-4'}>
          <div className={'space-y-4'}>
            <div>
              <div className={'mb-2 flex items-center justify-between'}>
                <p className={'text-gray-50'}>Percentage to withdraw</p>
                <p className={'text-end text-xs text-[#6C6C8C]'}>Balance: 119,9928,989.12</p>
              </div>
              <Input
                type="text"
                variant={'bordered'}
                radius={'sm'}
                placeholder="Enter amount"
                classNames={inputClassNames}
                endContent={
                  <Button
                    startContent={
                      <img src="/currency/b4fwx.png" alt="b4fwx" className={'h-[16px]'} />
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
          </div>
          <div className={'mt-4'}>
            <p className={'text-sm text-gray-50'}>Deposit Balance</p>
            <div className={'mt-3 flex items-center space-x-2'}>
              <div
                className={
                  'flex flex-1 cursor-pointer items-center justify-between rounded-[12px] border border-divider p-3 text-xs text-gray-300'
                }
              >
                100,000 B4FWX
              </div>
              <PlusIcon className={'size-[24px]'} />
              <div
                className={
                  'flex flex-1 cursor-pointer items-center justify-between rounded-[12px] border border-divider p-3 text-xs text-gray-300'
                }
              >
                100,000 B4FWX
              </div>
            </div>
          </div>
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
        </CardBody>
      </Card>
    </div>
  )
}
