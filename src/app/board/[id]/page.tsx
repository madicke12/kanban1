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
    // console.log(boardData)
    const columns = boardData?.columns.map(item=>item.name);
    console.log(columns)

    // console.log(params)
    return (
        <div className='p-3'>
            <ColumN/>
        </div>
    )
}
