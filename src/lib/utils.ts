import prisma from "@/app/lib/prismaSingleton"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { clsx, type ClassValue } from "clsx"
import { NextAuthOptions, Session } from "next-auth"
import { twMerge } from "tailwind-merge"
import  GoogleProvider  from "next-auth/providers/google"
import GitHub from "next-auth/providers/github"

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



export const authOption: NextAuthOptions ={
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
  providers: [
      GitHub({
          clientId: process.env.GITHUB_ID as string,
          clientSecret: process.env.GITHUB_SECRET as string,
      }),
      GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID as string,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        })
  ], callbacks: {
      session: ({ session, user }: { session: Session, user :any}) => ({
        ...session,
        user,
      }),
    },
    jwt: {
      secret: process.env.SECRET,
    },
  
  }


