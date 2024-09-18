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
    
    const { data ,columnsString} = body

    const columns = JSON.parse(columnsString.toString());

    const datas = {
        data,
        columns,
    };

    console.log(columns);

    try {
        const parsedData = BoardSchema.parse(datas);

        if (parsedData) {
            await prisma.board.create({
                data: {
                    ...parsedData,
                    columns: {
                        create: data.columns.map((item: { name: string }) => ({ name: item.name })),
                    },
                },
                include: {
                    columns: true,
                },
            });
        }
    } catch (err) {
        console.log(err);
    } finally {
        await prisma.$disconnect();
    }
    
    revalidatePath('/board/[id]/page', 'page');
    console.log('done');
    return NextResponse.json({ status: 200 });
}