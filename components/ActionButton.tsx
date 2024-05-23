import React, { type ReactNode } from 'react'
import { Button } from '@nextui-org/react'
import classNames from 'classnames'

export const ActionButton = ({
  children,
  isDisabled,
  onClick,
}: {
  children: ReactNode
  isDisabled?: boolean
  onClick?: () => void
}) => {
  return (
    <Button
      onClick={onClick}
      className={classNames('mt-4 text-xl font-semibold', {
        'bg-secondary text-[#4F4F70]': isDisabled,
      })}
      color={'primary'}
      radius={'sm'}
      size={'lg'}
      isDisabled={isDisabled}
      fullWidth
    >
      {children}
    </Button>
  )
}
