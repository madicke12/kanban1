import prisma from "@/app/lib/prismaSingleton";
import { NextResponse } from "next/server";


export async function GET() {
    const task = (await prisma.task.findMany());
    return NextResponse.json(task, { status: 200 });
}
