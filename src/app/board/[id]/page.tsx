import Board from '@/components/board';
import prisma from '../../lib/prismaSingleton';
import { ParamsType } from '../../lib/types/itemTypes';

export default async function page({ params }: { params: ParamsType }) {
    const boardData = await prisma.board.findUnique({
        where: { id: params.id },
        include: {
            columns: { include: { Task: { include: { Subtasks: true } } } },
        },
    });
    return (
     <div className=''>
        <Board boardData={boardData?.columns} />
  </div>
    );
}
