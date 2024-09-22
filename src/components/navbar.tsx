'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from 'next/image';
import searchIcon from '../../public/1x/zoom-3.png';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between   sticky top-0 border-b border-secondary-100 h-16 w-full bg-white ">
            <div className=" items-center p-2 ml-3 gap-1   bg-gray-100 rounded-sm flex">
                <Image src={searchIcon} alt="search" width={20} height={20} />
                <input type="text" placeholder='Search...' className="bg-transparent z-0 h-5 outline-none"></input>
            </div>
            <div className='mr-3 flex gap-2'>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>

            </div>
        </nav>
    )
}

export default Navbar;