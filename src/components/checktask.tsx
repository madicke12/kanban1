'use client'
import { SubtaskType } from "@/app/lib/types/itemTypes";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import React, { useState } from 'react';

const CheckTask = ({ cisse  }:{cisse :SubtaskType}) => {
  const [isChecked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!isChecked);
    const form = document.getElementById('samaForm') as HTMLFormElement  ;
    form.requestSubmit();
  };

  return (
    <form  id="samaForm">
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
    </form>
  );
};

export default CheckTask;