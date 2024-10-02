import { NextResponse } from "next/server"

export async function POST(req:Request){
    const body = await req.json()
    const {titre, description, picture,columnId ,currentstatus , subtasks , userId  } = body
    

    return NextResponse.json({message:'task created'})
}