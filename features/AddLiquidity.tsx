import { Button, Card, CardBody, Chip, Input } from '@nextui-org/react'
import React from 'react'

const inputClassNames = {
  input: [
    'bg-transparent data-[hover=true]:bg-transparent',
    'group-data-[has-value=true]:text-gray-50',
    'text-white',
    'text-xl',
    'px-3',
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

export const AddLiquidity = () => {
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
          <p className={'text-end text-xs text-[#6C6C8C]'}>Balance: 119,9928,989.12</p>
          <div className={'mt-4 space-y-4'}>
            <Input
              type="text"
              variant={'bordered'}
              radius={'sm'}
              placeholder="Enter amount"
              classNames={inputClassNames}
              endContent={
                <Button
                  startContent={<img src="/currency/usdc.png" alt="b4fwx" className={'h-[16px]'} />}
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
            <Input
              type="text"
              radius={'sm'}
              variant={'bordered'}
              placeholder="Enter amount"
              classNames={inputClassNames}
              endContent={
                <Button
                  startContent={<img src="/currency/usdc.png" alt="b4fwx" className={'h-[16px]'} />}
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
        </CardBody>
      </Card>
    </div>
  )
}
