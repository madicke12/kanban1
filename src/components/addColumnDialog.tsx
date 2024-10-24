import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { PlusIcon } from "@heroicons/react/24/solid";
import AddColumnForm from "./addColumnForm";

export const AddColumnDialog: React.FC<{ id: string }> = ({ id }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-64 h-12">Add Column</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <AddColumnForm id={id}/>
      </DialogContent>
    </Dialog>
  );
};
