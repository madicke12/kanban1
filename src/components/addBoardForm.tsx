/* eslint-disable react/no-unescaped-entities */
'use client'
import { Button } from "@/components/ui/button";
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import DynamicInput from "./dynamic-input";
import { useBoardDispatch } from "@/app/boardContext";
import { useState } from "react";
import { z } from "zod";
import axios from "axios";

 export const AddBoardForm =  () => {
  const dispatch = useBoardDispatch()
  const [board, setBoard] = useState({id:'adkjabdkabda', name:'',userId:'',columns:[]})
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{

    setBoard({...board,[e.target.name]:e.target.value})
  }

  const BoardSchema = z.object({
    name: z.string(),
    userId: z.string(),
    columns: z.array(z.unknown()),
  });
  const parsedData = BoardSchema.parse(board);
  console.log('parsedData',parsedData)
const handleSubmit =async (e:React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault()
  if(!parsedData) return
  // const response = await axios.post('/api/board/create',parsedData)
  // if(response.status === 200){
  //   dispatch({type:'added',board:response.data})
  // }
  
}
  return (
    <form  method="post" onSubmit={handleSubmit}>
      <DialogHeader>
        <DialogTitle>Add new Board</DialogTitle>
        <DialogDescription>
          Add a new board here click Create new Board when you're done
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-1 items-center gap-4">
          <Label htmlFor="name" className="">
            Board Name
          </Label>
          <Input
            name="name"
            id="name"
            placeholder="eg: Marketing Plan "
            className="col-span-3"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col   mt-4 gap-4">
          <input className="hidden" value={'656f4da9e7241b17b75896bc'} onChange={handleChange} name="userId"/>
          <DynamicInput type={'column'} handleChanges={handleChange}/>
         {/* <input type="text" className="hidden" value={JSON.stringify(['To Do','Doing','Done'])} readOnly name="columns" /> */}
        </div>
      </div>
      <DialogFooter>
        <Button className="w-full bg-primary hover:bg-primary-500" type="submit" >
          Create new Board
        </Button>
      </DialogFooter>
    </form>
  );
};