import { UserButton } from '@clerk/nextjs'
import { AlignJustify } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function TopHeader() {
  return (
    <div className=' flex p-5 border-b items-center justify-between md:justify-end'>
      <AlignJustify className='md:hidden' />
      <Image src='/logo.png' width={60} height={60} 
      className='md:hidden'/>
      <UserButton />
    </div>
  )
}

export default TopHeader
