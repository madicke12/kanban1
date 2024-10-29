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
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem
} from "@/components/ui/sidebar"
import Link from "next/link"
import { useEffect } from "react"
import { AddBoardDialog } from "./addBoardDialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"

export function NavMain({ board }: { board: BoardType[] }) {
  const setBoard = useBoardStore((state) => state.init)
  useEffect(() => {
    setBoard(board)
  }, [board])
  const boardList = useBoardStore((state) => state.boards)
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
                <BookOpen />
                <span>View Board Liste</span>
                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                {boardList.map((subItem) => (
                  <SidebarMenuSubItem key={subItem.id}>
                    <SidebarMenuSubButton asChild>
                      <Link href={`/board/${subItem.id}`}>
                        {/* <SidebarGroupLabel>{subItem.name}</SidebarGroupLabel> */}
                        <span>{subItem.name}</span>
                      </Link>
                    </SidebarMenuSubButton>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <SidebarMenuAction>
                          {/* <MoreHorizontal /> */} ...
                        </SidebarMenuAction>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent side="right" align="start">
                        <DropdownMenuItem>
                          <span>Edit Project</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <span>Delete Project</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>
      </SidebarMenu>
    </SidebarGroup>
  )
}
