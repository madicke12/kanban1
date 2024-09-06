import Navbar from '@/components/navbar'
import React from 'react'
import chevrn from '../../../public/1x/chevron-down.png'
import Image from 'next/image'

export default function page() {
  return (
    <div>
        <Navbar />
        <div>
            <div className ='flex'>
                <Image src={chevrn} alt='chevron' width={20} height={20} />
                <span className=''>
                    Board
                </span>
            </div>
        </div>
    </div>
  )
}
