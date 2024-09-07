import { BoardSelect } from '@/components/boardDropDown'
import Navbar from '@/components/navbar'
import prisma from '../lib/prismaSingleton'

export default async function page() {
    const Board= await prisma.board.findMany()
    const boardListe= Board.map(item=>{return ({name:item.name , id:item.id})})
    console.log(boardListe)
  return (
    <div>
        <Navbar />
        <div>
            <div className ='flex gap-2 p-3 mt-4 '>
                <BoardSelect bListe={boardListe} />
                {/* <Image src={chevrn} alt='chevron' width={30} height={30} /> */}
            </div>
        </div>
    </div>
  )
}
