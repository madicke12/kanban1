import prisma from '../../lib/prismaSingleton'
import React from 'react'
import { ParamsType } from '../../lib/types/itemTypes'
import ColumN from '../../../components/column'

export default async function page({ params }: { params: ParamsType }) {
    const boardData = await prisma.board.findUnique({
        where: {
            id: params.id
        },
        include: {
            columns: { include: { Task: { include: { Subtasks: true } } } },
        }
    }
    ) 
    const todos = boardData?.columns.filter(item=>item.name === 'To Do')
    const inProgress = boardData?.columns.filter(item=>item.name === 'Doing')
    const done = boardData?.columns.filter(item=>item.name === 'Done')
    return (
        <div className='p-3 flex gap-3 overflow overflow-y-auto'>
            <ColumN columns={todos}/>
            <ColumN columns={inProgress}/>
            <ColumN columns={done}/>
        </div>
    )
}
