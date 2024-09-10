import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { PlusIcon } from "@heroicons/react/24/solid";
import { AddBoardForm } from "./addBoardForm";

export function AddBoardDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
      <Button className=' bg-primary text-white hover:text-white hover:bg-primary-500 font-bold border-none ' variant={'outline'}><PlusIcon width={20} height={20}/><span>Add Board</span></Button>

      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <AddBoardForm/>
      </DialogContent>
    </Dialog>
  );
}