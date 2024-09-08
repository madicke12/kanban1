'use client'
import Image from 'next/image';
// import prisma from "../app/lib/prismaSingleton

import Logo from '../../public/logo.svg'
import Link from 'next/link';
import board from  '../../public/1x/wireframe.png'
import { usePathname } from 'next/navigation';

const SideNav =()=>{
    const pathName = usePathname();
    console.log(pathName)
    return (
        <div className=" w-64  bg-white flex flex-col border h-screen sticky top-0 border-secondary-100">
            <div className={`w-44 h-12 flex gap-2 mt-4 mb-4 ml-4  items-center `}>
                <Image src={Logo} alt="logo" width={44} height={44} className=' rounded-[4px]' />
                <span className="text-black  font-bold text-3xl ">Kanban</span>
            </div>
            <div className={`flex flex-col w-full h-[248px] gap-1 leading-3 `}>
                <Link href='board' className={`p-4 flex items-center justify-start gap-2 ${pathName=='/board'?'bg-primary-200' : 'text-black'} hover:bg-primary-200`}>
                    <Image src={board}  width={20} height={20} alt='board image' />
                    <span className=' font-bold text-sm text-black'>Board</span>
                </Link>
                <Link href='/settings' className={`p-4 flex items-center justify-start hover:bg-primary-200 gap-2 ${pathName=='/settings'?'bg-primary-200': ''}`}>
                    <Image src={board} className='' width={20} height={20} alt='board image' />
                    <span className=' font-bold text-sm text-black'>Settings</span>
                </Link>
            </div>
            
        </div>
    )

}

export default SideNav;