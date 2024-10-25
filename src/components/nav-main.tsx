"use client"

import { BookOpen, ChevronRight } from "lucide-react"

import { useBoardStore } from "@/app/boardContext"
import { BoardType } from "@/app/lib/types/itemTypes"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { useEffect } from "react"
import { AddBoardDialog } from "./addBoardDialog"
import { Skeleton } from "./ui/skeleton"

export function NavMain({session}: {session: {user?: any , expires:string} }) {
  const fetchboards = useBoardStore((state) => state.fetchBoards) 
  const user = session.user
  useEffect(() => {
    fetchboards()
  }, [fetchboards])

  const board = useBoardStore((state) => state.boards).filter((b: BoardType) => b.userId === user.id)
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Board Liste</SidebarGroupLabel>
      <AddBoardDialog />
      <SidebarMenu>
          <Collapsible
            key={"ajksdvnaov"}
            asChild
            defaultOpen={true}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip="View Boards Liste">
                  <BookOpen/>
                  <span>View Board Liste</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
              { board ? (
                <SidebarMenuSub>
                  {board.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.id}>
                      <SidebarMenuSubButton asChild>
                        <Link href={`/board/${subItem.id}`}>
                          <span>{subItem.name}</span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>) :( <Skeleton />)
}

              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
      </SidebarMenu>
    </SidebarGroup>
  )
}
