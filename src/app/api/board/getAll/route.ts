import prisma from "@/app/lib/prismaSingleton";
import { NextResponse } from "next/server";


export async function GET() {
    const board = (await prisma.board.findMany({include:{columns:{include:{Task:{include:{Subtasks:true}}}}}}));
    return NextResponse.json(board, { status: 200 });
}