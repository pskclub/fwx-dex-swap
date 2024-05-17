import { Card, CardBody } from '@nextui-org/react'
import { type ReactNode } from 'react'
import { Faire } from '@/components/Faire'

export const CardMain = ({ children }: { children: ReactNode }) => {
  return (
    <div className={'relative'}>
      <div
        className={
          'absolute bottom-[-120px] left-[-150px] hidden size-full w-full max-w-[480px] md:block'
        }
      >
        <Faire />
      </div>
      <Card className={'mt-4 rounded-[20px] border-1.5 border-[#242438] bg-background'}>
        <CardBody className={'p-[20px]'}>{children}</CardBody>
      </Card>
    </div>
  )
}
