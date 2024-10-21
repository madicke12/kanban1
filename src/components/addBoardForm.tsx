/* eslint-disable react/no-unescaped-entities */
'use client'
import { useBoardStore } from "@/app/boardContext";
import { userType } from "@/app/lib/types/itemTypes";
import { Button } from "@/components/ui/button";
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { z } from "zod";
import DynamicInput from "./dynamic-input";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

 export const AddBoardForm =  () => {
  const user = useSession().data?.user as userType
  const addboard = useBoardStore((state)=>state.addBoard)
  const [board, setBoard] = useState({name:'',userId:user.id,columns:''})
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{

    setBoard({...board,[e.target.name]:e.target.value})
  }

  const BoardSchema = z.object({
    name: z.string().min(3),
    userId: z.string().min(3),
    columns: z.string().min(3),
  });
const handleSubmit =async (e:React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault()
  try{
    const parsedData = BoardSchema.parse(board);
    if(parsedData){
      const response = await axios.post('/api/board/create',parsedData)
      if(response.status === 200){
        addboard(response.data)
      }
    }
  }catch(err){
    console.log(err)
  }

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
          <DynamicInput setBoard={setBoard} type={'column'} handleChanges={handleChange}/>
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