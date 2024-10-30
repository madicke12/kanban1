'use server';
import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { getBoard } from "@/lib/getboard";
import { getServerSession } from "next-auth";
import { Suspense } from "react";
import { NavMainSkeleton } from "./NavMainSkeleton";
import { NavUserSkeleton } from "./NavUserSkeleton";
import { BoardType } from "@/app/lib/types/itemTypes";
import { redirect } from "next/navigation";
import { authOption } from "@/lib/utils";

export  async function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const session = await getServerSession(authOption) as {user:any, expires:string}
    if(!session){
      redirect('/')
    }
    //
    const board = await getBoard(session.user.id) as BoardType[]
    console.log(typeof(board))
    
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher  />
      </SidebarHeader>
      <SidebarContent>
        <Suspense fallback={<NavMainSkeleton/>}>
        <NavMain board ={board}  />
        </Suspense>
      </SidebarContent>
      <SidebarFooter>
      <Suspense fallback={<NavUserSkeleton/>}>
       <NavUser session={session} />  
      </Suspense>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
