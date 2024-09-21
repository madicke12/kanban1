import prisma from "@/app/lib/prismaSingleton";
import { NextResponse } from "next/server";


export async function GET() {
    const board = await prisma.board.findMany();
    return NextResponse.json(board, { status: 200 });
}