import prisma from "@/app/lib/prismaSingleton";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { z } from "zod";


export async function POST(req: Request) {
    const BoardSchema = z.object({
        name: z.string(),
        userId: z.string(),
        columns: z.array(z.unknown()),
    });
    const body = await req.json();
    const { name, userId, columns } = body;
    const formatedColumns = JSON.parse(columns).map((item: { value: string }) => ({ name: item.value }));
    const data = {
        name,
        userId,
        columns: formatedColumns,
    };
    console.log(formatedColumns);
    
    try{
        const parsedData = BoardSchema.parse(data);
        if(parsedData){
            const board = await prisma.board.create({
                data: {
                    ...parsedData,
                    columns: {
                        create: formatedColumns.map((item: { name: string  }) => ({ name: item.name })),
                    },
                },
                include: {
                    columns: true,
                },
            });
            console.log(board);
            return NextResponse.json(board, { status: 200 });
        }
    }
    catch(err){
        console.log(err)
        return NextResponse.json({ status: 500 });

    }
    
    revalidatePath('/board/[id]/page', 'page');
    console.log('done');
    // return NextResponse.json({ status: 200 });
}