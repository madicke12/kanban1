
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
import DynamicInput from "./dynamic-input";
import StatusSelect from "./select";
import { useState } from "react";
import { any } from "zod";
// import { createTask } from "@/lib/actions/actions";

const AddTask = ({id}:{id : string|null}) => {
  const [board,setBoard]= useState({titre:'',description:'',subtasks:'',currentstatus:'',userId:'',columnId:''})
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setBoard(prev=>({...prev,[e.target.name]:e.target.value}))
  }
  return (
    <Dialog  >
      <DialogTrigger className="w-full">
      <Button className="w-full bg-transparent text-gray-300 hover:bg-transparent hover:outline-dashed mt-4">
        + Add task
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
              name="titre"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <Label htmlFor="description" className="mb-2">
              Description
            </Label>
            <Textarea id="description" className="mt-2" placeholder="" onChange={handleChange} name="description" />
          </div>
          <div className="flex flex-col">
            <Label className="mb-2">Subtasks</Label>
            <DynamicInput setBoard={setBoard}/>
            <div className="mt-2">
            <Label className='mb-2'>Current Status</Label>
            <StatusSelect/>
            </div>
          </div>
          <input type="text" value={'656f4da9e7241b17b75896bc'} className="hidden" name="userId" onChange={handleChange}/>
          {id && <input type="text" value={id} className="hidden" name="columnId" onChange={handleChange} />}
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

export default AddTask;