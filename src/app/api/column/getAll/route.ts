import prisma from "@/app/lib/prismaSingleton";
import { NextResponse } from "next/server";

export async function GET(){

    const columns = await prisma.column.findMany()
    return NextResponse.json(columns, {status:200})
}