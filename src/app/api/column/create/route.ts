import prisma from '@/app/lib/prismaSingleton';
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const body = await req.json()
    const {name , boardId} = body
    console.log('name', name)
    console.log('boardId', boardId)

    try {
        const column  = await prisma.column.create({
            data:{
                name,
                boardId
            }
        })
        return NextResponse.json(column, { status: 200 })
    } catch (error) {
        console.error('Failed to create column:', error);
        return NextResponse.json({error}, { status: 500 });
    }
}