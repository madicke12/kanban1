
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod"
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
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { createTask } from "@/lib/actions/actions";

const AddTask = ({ id  }: { id: string }) => {
  const [task, setTask] = useState({ titre: '', description: '', subtasks: '', currentstatus: '', userId: '', columnId: id })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const TaskSchema = z.object({
    titre: z.string().min(3 ,{
      message: 'Le titre est obligatoire'
    }),
    description: z.string().min(3, {
      message: 'La description est obligatoire'
    }
    ),
  });

  const form = useForm<z.infer<typeof TaskSchema>>({
    resolver: zodResolver(TaskSchema),
    defaultValues: {
      titre: '',
      description: '',
    }
  })
  const handleSubmit = async (value : z.infer<typeof TaskSchema>) => {
    console.log({ ...task,...value})
  //   try {
  //     const parsedData = TaskSchema.parse(task);
  //     if (parsedData) {
  //       const task = (await axios.post('http://localhost:3000/api/task/create', parsedData)).data
  //     }
  //   }

  //   catch (err) {
  //     console.log(err)
  //   }
  // }
  }
    // await createTask(board)

    return (
      <Dialog  >
        <DialogTrigger className="w-full">
          <Button className="w-full shadow-none bg-transparent text-gray-300 hover:bg-transparent hover:outline-dashed mt-4">
            + Add Task
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Task</DialogTitle>
          </DialogHeader>
          <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} >
            <div className="mb-3">
              <FormField control={form.control} name="titre" render={
                ({field})=>(
                  <FormItem>
                    <FormLabel htmlFor="titre" className="mb-2">
                      Title
                    </FormLabel>
                    <FormControl>
                      <Input id="titre" className="mt-2" placeholder="" {...field} />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )
              } />

            </div>
            <div className="mb-3">
            <FormField control={form.control} name="description" render={
                ({field})=>(
                  <FormItem>
                    <FormLabel htmlFor="description" className="mb-2">
                      Description
                    </FormLabel>
                    <FormControl>
                    <Textarea id="description" className="mt-2" placeholder="" {...field} />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )
              } />
            </div>
            <div className="flex flex-col">
              <Label className="mb-2">Subtasks</Label>
              <DynamicInput setBoard={setTask}  />
              <div className="mt-2">
                <Label className='mb-2'>Current Status</Label>
                <StatusSelect setBoard={setTask} />
              </div>
            </div>
            <input type="text" value={'656f4da9e7241b17b75896bc'} className="hidden" name="userId" onChange={handleChange} />
            {id && <input type="text" value={id} className="hidden" name="columnId" onChange={handleChange} />}
            <DialogFooter>
              <Button className="w-full mt-2 bg-primary-450 hover:bg-primary shadow-none"  type="submit">
                Create new Task
              </Button>
            </DialogFooter>
          </form>
          </Form>
        </DialogContent>
      </Dialog>
    );
  };

  export default AddTask;