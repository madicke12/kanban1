import prisma from '@/app/lib/prismaSingleton';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function DELETE(req:Request) {
    const body = await req.json()
    try{
        await prisma.task.delete({
            where: {
                id: body.taskId,
            },
        })
        revalidatePath('/board/[id]','page')
    }
    catch(e){
        return NextResponse.json({message: 'Task not found'})
    }
 
    return NextResponse.json({message: 'Task deleted'})
}