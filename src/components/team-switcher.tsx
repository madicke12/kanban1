"use client"



import {
  DropdownMenu,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import Image from "next/image"

export function TeamSwitcher() {
  const { isMobile } = useSidebar()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg  text-sidebar-primary-foreground">
                <Image src="/logo.svg" alt="Kanban Logo" width={40} height={40} className="size-12" /> 
              </div>
              <div className="grid flex-1 text-left text-2xl leading-tight">
                <span className="truncate font-semibold">
                  Kanban
                </span>
              </div>
              {/* // <ChevronsUpDown className="ml-auto" /> */}
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          
        </DropdownMenu>
          {/* <div className="flex gap-1 items-center " >
          <span className="font-bold text-3xl">Kanban</span></div> */}
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
