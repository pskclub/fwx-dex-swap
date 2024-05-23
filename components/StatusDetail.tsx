import { Chip, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react'
import { CopyIcon } from '@/components/icons/CopyIcon'
import { OutIcon } from '@/components/icons/OutIcon'
import React from 'react'
import { useWatchAccount } from '@/hooks/useWatchAccount'
import truncateEthAddress from 'truncate-eth-address'
import { StringHelper } from '@/utils/StringHelper'
import { useMe } from '@/hooks/useMe'
import { NumberHelper } from '@/utils/NumberHelper'

export const StatusDetail = () => {
  const account = useWatchAccount()
  const me = useMe()
  const [toggle, setToggle] = React.useState(false)

  return (
    <>
      <div className={'flex gap-3'}>
        <Chip size={'md'} radius={'md'} color={'secondary'} className={'w-full max-w-full'}>
          <span className={'text-sm text-gray-400'}>Liquidity</span>{' '}
          <span className={'font-semibold'}>
            ${NumberHelper.display(me.b4fwxLiquidity, me.b4fwxDecimals)}
          </span>
        </Chip>
        <Chip size={'md'} radius={'md'} color={'secondary'} className={'w-full max-w-full'}>
          <span className={'text-sm text-gray-400'}>APR (24h)</span>{' '}
          <span className={'font-semibold'}>189.96%</span>
        </Chip>
      </div>
      <div className={'mt-4 flex space-x-3 text-gray-50'}>
        <Chip
          size={'sm'}
          radius={'full'}
          color={'secondary'}
          title={account.address || ''}
          className={'cursor-pointer'}
          classNames={{
            content: 'flex flex-row text-xs items-center',
          }}
        >
          {truncateEthAddress(account.address || '')}
          <Popover
            placement="top"
            offset={10}
            showArrow
            color={'secondary'}
            radius={'sm'}
            classNames={{
              content: 'bg-[#4F4F70]',
              arrow: 'bg-[#4F4F70]',
            }}
          >
            <PopoverTrigger>
              <div
                onClick={() => {
                  StringHelper.copy(account.address)
                }}
                title={'Copy'}
              >
                <CopyIcon className={'ml-1 size-[14px] cursor-pointer text-gray-50'} />
              </div>
            </PopoverTrigger>
            <PopoverContent>
              <div className="px-1 py-2">
                <div className="text-xs">Copied</div>
              </div>
            </PopoverContent>
          </Popover>
          <a
            target={'_blank'}
            href={StringHelper.genExplorerLink(account.chainId, account.address)}
            title={StringHelper.genExplorerLink(account.chainId, account.address)}
          >
            <OutIcon className={'ml-1 size-[14px] cursor-pointer text-gray-50'} />
          </a>
        </Chip>
        <Chip
          size={'sm'}
          radius={'full'}
          color={'secondary'}
          className={'cursor-pointer text-xs'}
          onClick={() => {
            setToggle(!toggle)
          }}
        >
          {!toggle ? (
            <p>
              {NumberHelper.display(me.b4fwxUSDCIn, me.b4fwxDecimals)} B4FWX ={' '}
              {NumberHelper.display(me.b4fwxUSDCOut, me.usdcDecimals)} USDC
            </p>
          ) : (
            <p>
              {NumberHelper.display(me.usdcB4fwxIn, me.usdcDecimals)} USDC ={' '}
              {NumberHelper.display(me.usdcB4fwxOut, me.b4fwxDecimals)} B4FWX
            </p>
          )}
        </Chip>
      </div>
    </>
  )
}
