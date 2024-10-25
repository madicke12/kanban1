import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { ChevronRight } from "lucide-react"
import { Skeleton } from "./ui/skeleton"

export function NavMainSkeleton() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>
        <Skeleton className="h-4 w-32 rounded" /> {/* Placeholder for 'Board Liste' title */}
      </SidebarGroupLabel>
      <div className="mb-2">
        <Skeleton className="h-10 w-full rounded" /> {/* Placeholder for 'Add Board' button */}
      </div>
      <SidebarMenu>
        <Collapsible asChild defaultOpen className="group/collapsible">
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton className="flex items-center gap-2">
                <Skeleton className="h-6 w-6 rounded" /> {/* Placeholder for icon */}
                <Skeleton className="h-5 w-28 rounded" /> {/* Placeholder for 'View Board Liste' label */}
                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub className="mt-2">
                {[...Array(3)].map((_, index) => (
                  <SidebarMenuSubItem key={index}>
                    <SidebarMenuButton className="flex items-center gap-2">
                      <Skeleton className="h-4 w-24 rounded" /> {/* Placeholder for each board item */}
                    </SidebarMenuButton>
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
