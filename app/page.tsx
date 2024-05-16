import React from 'react'
import { NavbarMain } from '@/components/NavbarMain'
import { TabsMain } from '@/components/TabsMain'

export default function Home() {
  return (
    <>
      <NavbarMain />
      <div className={'mx-auto px-4 md:w-[480px] md:px-0'}>
        <TabsMain />
      </div>
    </>
  )
}
