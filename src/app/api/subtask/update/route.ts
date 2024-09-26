import prisma from "@/app/lib/prismaSingleton";
import { NextResponse } from "next/server";


export async function PUT(req: Request) {
    const body = await req.json()
    const { subtaskId , isDone } = body;
    console.log(subtaskId,isDone)
    const subtask =await prisma.subtask.update({
        where: {
            id: subtaskId,
        },
        data: {
            isDone : isDone
        },
    });
    return NextResponse.json({subtask})
}