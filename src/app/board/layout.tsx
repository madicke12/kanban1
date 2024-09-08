import { PropsWithChildren } from "react";
import SideNav from "@/components/sidenav";
import { BoardSelect } from '@/components/boardDropDown'
import Navbar from '@/components/navbar'
import prisma from '../lib/prismaSingleton'
import { Button } from "@/components/ui/button";
import filterIcon from '../../../public/1x/ios/@3x/filter-2@3x.png'
import Image from 'next/image'

const layout = async (props: PropsWithChildren) => {
  const Board = await prisma.board.findMany()
  const boardListe = Board.map(item => { return ({ name: item.name, id: item.id }) })
  console.log(boardListe)
  return (
    <div className="flex " >
      <SideNav />
      <div className="w-full">
        <Navbar />
        <div className='flex gap-2 p-3 mt-4  items-center justify-between w-full '>
          <BoardSelect bListe={boardListe} />
          <div className=" ">
            <Button className="hover:bg-transparent outline outline-gray-100 bg-transparent text-black gap-2" > <Image src={filterIcon} alt='' width={14} height={14} /> 
              <span className="">filter</span>
            </Button>
          </div>
        </div>
        {props.children}
      </div>
    </div>

  );
};

export default layout;
