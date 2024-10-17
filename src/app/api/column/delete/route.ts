import prisma from "@/app/lib/prismaSingleton"
import { NextResponse } from "next/server"

export async function DELETE(req :Request){
    const body = await req.json()
    console.log(body)
    try {
        const column = await prisma.column.delete({ where: { id: body.columnId} })
        return NextResponse.json(column, { status: 200 })
    }catch(e){
        console.log(e)
        return NextResponse.json({ status: 500 })
    }
}