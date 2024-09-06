'use client'
import Image from 'next/image';
// import prisma from "../app/lib/prismaSingleton

import Logo from '../../public/logo.svg'
import Link from 'next/link';
import board from  '../../public/1x/wireframe.png'

const SideNav =()=>{
    
    return (
        <div className=" w-[252px] h-[100vh] bg-white flex flex-col">
            <div className="w-44 h-12 flex gap-2 mt-4 ml-4  items-center">
                <Image src={Logo} alt="logo" width={44} height={44} className=' rounded-[4px]' />
                <span className=" text-black font-bold text-3xl ">Kanban</span>
            </div>
            <div className='flex flex-col w-64 h-[248px gap-1 leading-3'>
                <Link href='board' className='p-4 flex items-center justify-start gap-2'>
                    <Image src={board} className='' width={20} height={20} alt='board image' />
                    <span className='text-black font-bold text-sm'>Board</span>
                </Link>
                <Link href='/settings' className='p-4 flex items-center justify-start'>
                    <Image src={board} className='' width={20} height={20} alt='board image' />
                </Link>
            </div>
            
        </div>
    )

}

export default SideNav;