'use client'
import {
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog";
  import axios from "axios";
  import { useState } from "react";
  import { z } from "zod";
  import { Input } from "./ui/input";
import { useColumnStore } from "@/app/boardContext";
import { ColumnType } from "@/app/lib/types/itemTypes";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
  

const AddColumnForm = ({ id }: { id: string }) => {
  const addColumn = useColumnStore((state)=>state.addColumn)
  const [column, setBoard] = useState({name:'',boardId:id })
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{

    setBoard({...column,[e.target.name]:e.target.value})
  }
console.log(column)
  const columnSchema = z.object({
    name: z.string().min(3),
    boardId: z.string().min(3),
  });

const handleSubmit =async (e:React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault()
  try{
    const parsedData = columnSchema.parse(column);
    console.log(parsedData)
    if(parsedData){
      const response = await axios.post('/api/column/create',parsedData)
      addColumn(response.data)  
    }
  }catch(err){
    console.log(err)
  }

}
  return (
    <form  method="post" onSubmit={handleSubmit}>
      <DialogHeader>
        <DialogTitle>Add new Column</DialogTitle>
        <DialogDescription>
          Add a new Column here click Create new Column when you're done
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-1 items-center gap-4">
          <Label htmlFor="name" className="">
            Column Name
          </Label>
          <Input
            name="name"
            id="name"
            placeholder="eg: TODO "
            className="col-span-3"
            onChange={handleChange}
          />
        </div>
      </div>
      <DialogFooter>
        <Button className="w-full bg-primary hover:bg-primary-500" type="submit" >
          Create new Column
        </Button>
      </DialogFooter>
    </form>
  );
};


export default AddColumnForm;