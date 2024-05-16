'use client'

import { Button } from '@nextui-org/react'
import React from 'react'
import classNames from 'classnames'
import { Swap } from '@/features/Swap'
import { AddLiquidity } from '@/features/AddLiquidity'
import { RemoveLiquidity } from '@/features/RemoveLiquidity'

const defaultClassName =
  'bg-background text-gray-400 border-1.5 border-[#242438] hover:bg-primary/10 hover:text-[#BD6CFF]'

const activeClassName = 'bg-primary/10 text-[#BD6CFF]'

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
          className={classNames('font-medium px-5', {
            [activeClassName]: activeTab === 'swap',
            [defaultClassName]: activeTab !== 'swap',
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
          className={classNames('font-medium px-5', {
            [activeClassName]: activeTab === 'add',
            [defaultClassName]: activeTab !== 'add',
          })}
        >
          Add
          <span className={'hidden md:flex'}>Liquidity</span>
          <span className={'md:hidden'}>Liq.</span>
        </Button>
        <Button
          onClick={() => {
            setActiveTab('remove')
          }}
          radius={'full'}
          color="primary"
          size={'lg'}
          className={classNames('font-medium px-5', {
            [activeClassName]: activeTab === 'remove',
            [defaultClassName]: activeTab !== 'remove',
          })}
        >
          Remove
          <span className={'hidden  md:flex'}>Liquidity</span>
          <span className={'md:hidden'}>Liq.</span>
        </Button>
      </div>

      {activeTab === 'swap' && <Swap />}
      {activeTab === 'add' && <AddLiquidity />}
      {activeTab === 'remove' && <RemoveLiquidity />}
    </>
  )
}
