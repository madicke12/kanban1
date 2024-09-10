'use client'
import Image from 'next/image';
// import prisma from "../app/lib/prismaSingleton

import { LayoutDashboard, Settings } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../../public/logo.svg';
import { AddBoardDialog } from './addBoardDialog';

const SideNav =()=>{
    const pathName = usePathname();
    console.log(pathName)
    return (
        <div className=" w-64  bg-white flex flex-col border h-screen sticky top-0 border-secondary-100">
            <div className={`w-44 h-12 flex gap-2 mt-4 mb-4 ml-4  items-center `}>
                <Image src={Logo} alt="logo" width={44} height={44} className=' rounded-[4px]' />
                <span className="text-black  font-bold text-3xl ">Kanban</span>
            </div>
            <div className={`flex flex-col w-full h-[248px] gap-8 leading-3 p-3`}>
                <Link href='board' className={` flex items-center justify-start gap-2 ${pathName.includes('board')?'text-primary' : 'text-gray-500'} `}>
                    <LayoutDashboard size={18} width={18}/>
                    <span className=' font-bold text-sm '>Board</span>
                </Link>
                <Link href='/settings' className={` flex items-center justify-start  gap-2 ${pathName=='/settings'?'text-primary': 'text-gray-500'}`}>
                    <Settings size={18} width={18}/>
                    <span className=' font-bold text-sm '>Settings</span>
                </Link>
                <AddBoardDialog/>
            </div>
            
        </div>
    )

}

export default SideNav;