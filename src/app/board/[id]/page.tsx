import prisma from '@/app/lib/prismaSingleton'
import React from 'react'
import { ParamsType } from '@/app/lib/types/itemTypes'

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
    console.log(boardData)

    // console.log(params)
    return (
        <div>page</div>
    )
}
