
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
import { useRef, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { createTask } from "@/lib/actions/actions";
import { upload } from '@vercel/blob/client';
import { type PutBlobResult } from '@vercel/blob';
import { InputFile } from "./fileInput";
import { Value } from "@radix-ui/react-select";
import axios from "axios";
import { useTaskDispatch } from "@/app/boardContext";
import { revalidatePath } from "next/cache";

const AddTask = ({ id  }: { id: string }) => {
  const dispatch  = useTaskDispatch()
  const [task, setTask] = useState({ titre: '', description: '', subtasks: '', currentstatus: '', userId: '656f4da9e7241b17b75896bc', columnId: id , picture: '' });
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult>();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //madikce
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
    const file = inputFileRef.current?.files?.[0];
    if (!file) {
      console.error("No file selected");
      return;
    }
    console.log(file)
    const newBlob = await upload(file.name, file, {
      access: 'public',
      handleUploadUrl: '/api/image/upload',
    });

    setBlob(newBlob);
  const data = { ...task,...value ,picture: newBlob.url} 

    try{
      const response = await axios.post('/api/task/create', data)
      console.log(response.data)
      dispatch({type:'added', task: response.data})
    }
    catch(err){
      console.log(err)
    }
  }

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
                    <FormLabel htmlFor="titre" className="mb-2 font-sans font-bold">
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
                    <FormLabel htmlFor="description" className="mb-2 font-sans font-bold">
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
            <div className="mb-3 grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture font-sans font-bold">Photo <span className="text-sm text-gray-300 ml-3">(Facultative)</span></Label>
            <Input id="picture" ref={inputFileRef} type="file" />
            </div>
            <div className="flex flex-col">
              <Label className="mb-2 font-sans font-bold">Subtasks</Label>
              <DynamicInput setBoard={setTask}  />
              <div className="mt-2">
                <Label className='mb-2 font-sans font-bold'>Current Status</Label>
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