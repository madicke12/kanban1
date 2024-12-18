'use client'
import { useSubtaskStore } from "@/app/boardContext";
import { SubtaskType } from "@/app/lib/types/itemTypes";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";

import { useState } from 'react';

const CheckTask = ({ cisse  }:{cisse :SubtaskType}) => {
  const [isChecked, setChecked] = useState(cisse.isDone);
  const update = useSubtaskStore((state) => state.updateSubtask);
  const handleChange = async () => {
    setChecked(!isChecked);
   const a = (await axios.put('/api/subtask/update', { subtaskId: cisse.id , isDone:!cisse.isDone})).data;
      update(a.subtask)
  };

  return (
      <div
        className="bg-primary-100 hover:bg-primary-150  rounded-sm px-1 mt-2 flex items-center"
      >
        <Input
          className="w-[17px] mr-2"
          type="checkbox"
          id="task"
          checked={isChecked}
          value={cisse.id}
          name='subtaskId'
          onChange={handleChange}
        />
        <Label htmlFor="task" className="font-bold">{cisse.name}</Label>
      </div>
  );
};

export default CheckTask;