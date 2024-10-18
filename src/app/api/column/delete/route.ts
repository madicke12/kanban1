import prisma from "@/app/lib/prismaSingleton"
import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"

export async function DELETE(req :Request){
    const body = await req.json()
    console.log(body)
    try {
        const column = await prisma.column.delete({ where: { id: body.columnId} })
        revalidatePath('/board/[id]/page', 'page')
        return NextResponse.json(column, { status: 200 })
    }catch(e){
        console.log(e)
        return NextResponse.json({ status: 500 })
    }
}