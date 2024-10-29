import prisma from "@/app/lib/prismaSingleton"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const deleteItem = async (id: string): Promise<void> => {
  await prisma.task.delete({
    where: {
      id: id,
    },
  }) 
}