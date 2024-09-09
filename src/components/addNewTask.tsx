
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PlusIcon } from "@heroicons/react/24/solid";
import { PrismaClient } from "@prisma/client";
import DynamicInput from "./dynamic-input";
import StatusSelect from "./select";
// import { createTask } from "@/lib/actions/actions";

const AddNewTask = async({id}:any) => {
  //const session= await getServerSession(authOption)

  return (
    <Dialog  >
      <DialogTrigger>
        <Button className="hover:bg-primary bg-primary">
          <PlusIcon height={20} />
          Add new Task
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Task</DialogTitle>
        </DialogHeader>
        <form >
          <div className="mb-3">
            <Label htmlFor="name">Task Name</Label>
            <Input
              id="name"
              className="mt-2"
              placeholder="e.g Do my homework"
              name="taskName"
            />
          </div>
          <div className="mb-3">
            <Label htmlFor="description" className="mb-2">
              Description
            </Label>
            <Textarea id="description" className="mt-2" placeholder="" name="description" />
          </div>
          <div className="flex flex-col">
            <Label className="mb-2">Subtasks</Label>
            <DynamicInput/>
            <div className="mt-2">
            <Label className='mb-2'>Current Status</Label>
            <StatusSelect/>
            </div>
          </div>
          <input type="text" value={'656f4da9e7241b17b75896bc'} className="hidden" name="userId" />
          {/* <input type="text" value={JSON.stringify(board?.columns)} className="hidden" name="columns" /> */}
      <DialogFooter>
        <Button className="w-full mt-2 bg-primary-450 hover:bg-primary" type="submit">
          Create new Task
        </Button>
      </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewTask;