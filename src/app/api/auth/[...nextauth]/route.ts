import prisma from '@/app/lib/prismaSingleton';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth, { Session } from "next-auth"
import GitHub from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

export const authConfig ={
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

const handler = NextAuth(authConfig);

export { handler as GET, handler as POST }