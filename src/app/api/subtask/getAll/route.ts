import prisma from "@/app/lib/prismaSingleton";
import { NextResponse } from "next/server";

export async function GET() {
    const subtask = (await prisma.subtask.findMany());
    return NextResponse.json(subtask, { status: 200 });
}
