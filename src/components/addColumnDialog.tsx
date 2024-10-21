import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { PlusIcon } from "@heroicons/react/24/solid";
import AddColumnForm from "./addColumnForm";


export function AddColumnDialog({id}:{id:string}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
      <Button className='w-full max-w-[220px] bg-primary flex items-center justify-center h-[100vh] font-bold'>Add Column</Button>


      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <AddColumnForm id={id}/>
      </DialogContent>
    </Dialog>
  );
}