'use server'

import prisma from "@/app/lib/prismaSingleton";

export const getBoard = async (id: string) => {
    try {
        const boards = await prisma.board.findMany({
            where: {
                userId: id
            }
        })
        return JSON.parse(JSON.stringify(boards))
    } catch (error) {
        return { error: "Failed to fetch boards" }
    }
}