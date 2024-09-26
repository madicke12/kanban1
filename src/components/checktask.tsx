'use client'
import { useSubTaskDispatch } from "@/app/boardContext";
import { SubtaskType } from "@/app/lib/types/itemTypes";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";

import React, { useState } from 'react';

const CheckTask = ({ cisse  }:{cisse :SubtaskType}) => {
  const [isChecked, setChecked] = useState(false);
  const subdispatch = useSubTaskDispatch()
  const handleClick = async () => {
    setChecked(!isChecked);
   const a = (await axios.put('/api/subtask/update', { subtaskId: cisse.id , isDone:isChecked})).data;
    if(a.status === 200){
      subdispatch({type:'update',subtask:a.response})
    }
  };

  return (
      <div
        className="bg-primary-200 hover:bg-primary-250  rounded-sm px-1 mt-2 flex items-center"
        onClick={handleClick}
      >
        <Input
          className="w-[17px] mr-2"
          type="checkbox"
          id="task"
          checked={isChecked}
          value={cisse.id}
          name='subtaskId'
          readOnly
        />
        <Label htmlFor="task" className="font-bold">{cisse.name}</Label>
      </div>
  );
};

export default CheckTask;