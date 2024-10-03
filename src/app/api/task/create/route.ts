import prisma from "@/app/lib/prismaSingleton";
import { NextResponse } from "next/server"

export async function POST(req:Request){
    const body = await req.json()
    const {titre, description, picture,columnId ,currentstatus , subtasks , userId  } = body

    const Subtasks = JSON.parse(subtasks.toString()).map(
        (item:{id:string,value:string}) => item.value
      );

    console.log({titre, description, picture,columnId ,currentstatus , Subtasks , userId})

    try{
        const task  = await prisma.task.create({
            data:{
                titre,
                description,
                picture,
                columnId,
                currentStatus: currentstatus,
                Subtasks:{
                    create: Subtasks.map((item:string) => ({
                        name: item,
                        isDone: false,
                    })),
                }
            }
        })
        return NextResponse.json(task,{status:200})
    }catch(err){
        console.log(err)
        return NextResponse.json({status:500})
    }

}