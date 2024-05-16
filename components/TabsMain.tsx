'use client'

import { Button, Card, CardBody } from '@nextui-org/react'
import React from 'react'
import classNames from 'classnames'
import { Swap } from '@/features/Swap'
import { AddLiquidity } from '@/features/AddLiquidity'
import { RemoveLiquidity } from '@/features/RemoveLiquidity'

export const TabsMain = () => {
  const [activeTab, setActiveTab] = React.useState('swap')

  return (
    <>
      <div className={'space-x-2'}>
        <Button
          onClick={() => {
            setActiveTab('swap')
          }}
          radius={'full'}
          color="primary"
          size={'lg'}
          className={classNames('font-medium', {
            'bg-primary/10 text-[#BD6CFF]': activeTab === 'swap',
            'bg-background text-gray-400 border-1.5 border-[#242438] hover:bg-primary/10 hover:text-[#BD6CFF]':
              activeTab !== 'swap',
          })}
        >
          Swap
        </Button>
        <Button
          onClick={() => {
            setActiveTab('add')
          }}
          radius={'full'}
          color="primary"
          size={'lg'}
          className={classNames('font-medium', {
            'bg-primary/10 text-[#BD6CFF]': activeTab === 'add',
            'bg-background text-gray-400 border-1.5 border-[#242438] hover:bg-primary/10 hover:text-[#BD6CFF]':
              activeTab !== 'add',
          })}
        >
          Add<span className={'hidden md:flex'}>Liquidity</span>
          <span className={'md:hidden'}>Liq.</span>
        </Button>
        <Button
          onClick={() => {
            setActiveTab('remove')
          }}
          radius={'full'}
          color="primary"
          size={'lg'}
          className={classNames('font-medium', {
            'bg-primary/10 text-[#BD6CFF]': activeTab === 'remove',
            'bg-background text-gray-400 border-1.5 border-[#242438] hover:bg-primary/10 hover:text-[#BD6CFF]':
              activeTab !== 'remove',
          })}
        >
          Remove<span className={'hidden  md:flex'}>Liquidity</span>
          <span className={'md:hidden'}>Liq.</span>
        </Button>
      </div>
      <Card className={'mt-4 rounded-[20px] border-1.5 border-[#242438] bg-background'}>
        <CardBody>
          {activeTab === 'swap' && <Swap />}
          {activeTab === 'add' && <AddLiquidity />}
          {activeTab === 'remove' && <RemoveLiquidity />}
        </CardBody>
      </Card>
    </>
  )
}
