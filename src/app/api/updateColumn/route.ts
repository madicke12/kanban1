import prisma from "@/app/lib/prismaSingleton"
import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"

export async function POST(req:Request){
   const body = await req.json()
    const { taskId, columnId } = body
    console.log(taskId)
    await prisma.task.update({
        where: {
            id: taskId
        },
        data: {
            columnId: columnId
        }
    })
    revalidatePath('/board/[id]/page' ,'page')
    console.log('done')
    return NextResponse.json({status:200})
}