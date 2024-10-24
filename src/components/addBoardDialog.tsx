import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { PlusIcon } from "@heroicons/react/24/solid";
import { AddBoardForm } from "./addBoardForm";
import { Plus } from "lucide-react";
import { SidebarGroupAction } from "./ui/sidebar";

export function AddBoardDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
      <SidebarGroupAction title="Add Project">
        <Plus /> <span className="sr-only">Add Board</span>
      </SidebarGroupAction>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <AddBoardForm/>
      </DialogContent>
    </Dialog>
  );
}