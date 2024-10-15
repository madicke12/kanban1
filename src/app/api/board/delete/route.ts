import { NextResponse } from "next/server"

export async function POST(){
    const mes ='asas'
    return new   NextResponse(mes , { status: 200 })
}