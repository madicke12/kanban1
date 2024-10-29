import prisma from '@/app/lib/prismaSingleton';
import { NextResponse } from 'next/server';

export async function DELETE({params}: {params: {id: string}}) {
    try{
        await prisma.task.delete({
            where: {
                id: params.id,
            },
        })
    }
    catch(e){
        return NextResponse.json({message: 'Task not found'})
    }
 
    return NextResponse.json({message: 'Task deleted'})
}