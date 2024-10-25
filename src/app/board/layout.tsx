import { BoardSelect } from '@/components/boardDropDown';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

import Navbar from '@/components/navbar';
import SideNav from "@/components/sidenav";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { PropsWithChildren } from "react";
import filterIcon from '../../../public/1x/ios/@3x/filter-2@3x.png';
import { BoardProvider } from '../boardContext';
import { AppSidebar } from '@/components/app-sidebar';

const layout = async (props: PropsWithChildren) => {

  return (
    // <BoardProvider >
    <div className="flex" >
    <SidebarProvider >
      {/* <SideNav /> */}
      <AppSidebar/>
      <div className="w-full">
        {/* <Navbar /> */}

        <div className='flex gap-2 p-3 mt-4  items-center justify-between w-full '>
      <SidebarTrigger/>

          <div className=" ">
            {/* <Button className="hover:bg-transparent outline outline-gray-100 bg-transparent text-black gap-2" > <Image src={filterIcon} alt='' width={14} height={14} /> 
              <span className="">filter</span>
            </Button> */}
          </div>
        </div>
        {props.children}
      </div>
    </SidebarProvider>

    </div>
    // </BoardProvider>

  );
};

export default layout;





