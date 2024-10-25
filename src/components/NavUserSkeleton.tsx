import { Skeleton } from "@/components/ui/skeleton";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { ChevronsUpDown } from "lucide-react";

export function NavUserSkeleton() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <Skeleton className="h-8 w-8 rounded-lg" /> {/* Placeholder for avatar */}
          <div className="grid flex-1 text-left text-sm leading-tight">
            <Skeleton className="h-4 w-20 mb-1" /> {/* Placeholder for name */}
            <Skeleton className="h-3 w-32" /> {/* Placeholder for email */}
          </div>
          <ChevronsUpDown className="ml-auto size-4" />
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
