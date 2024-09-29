
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
import { z } from "zod";
import axios from "axios";
// import { createTask } from "@/lib/actions/actions";

const AddTask = ({ id  }: { id: string }) => {
  const [task, setTask] = useState({ titre: '', description: '', subtasks: '', currentstatus: '', userId: '', columnId: '' })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const TaskSchema = z.object({
    titre: z.string().min(3),
    description: z.string().min(3),
    Subtasks: z.string().min(3),
    currentStatus: z.string().min(3),
    userId: z.string().min(3),
    columnId: z.string().min(3),
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const parsedData = TaskSchema.parse(task);
      if (parsedData) {
        const task = (await axios.post('http://localhost:3000/api/task/create', parsedData)).data
      }
    }

    catch (err) {
      console.log(err)
    }
  }
    // await createTask(board)

    return (
      <Dialog  >
        <DialogTrigger className="w-full">
          <Button className="w-full bg-transparent text-gray-300 hover:bg-transparent hover:outline-dashed mt-4">
            + Add Task
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
              <DynamicInput setBoard={setTask} />
              <div className="mt-2">
                <Label className='mb-2'>Current Status</Label>
                <StatusSelect setBoard={setTask} />
              </div>
            </div>
            <input type="text" value={'656f4da9e7241b17b75896bc'} className="hidden" name="userId" onChange={handleChange} />
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