"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";
import {useEffect, useState } from "react";

const DynamicInput = ({ type , handleChanges ,setBoard }:any) => {
  const [inputCount, setInputCount] = useState([
    { id: Date.now() * 2, value: "" },
  ]);

  const handleChange = (id:number, e:any) => {
    const updatedInputs = inputCount.map((item) => {
      if (item.id === id) {
        return { ...item, value: e.target.value };
      }
      return item;
    });

    setInputCount(updatedInputs);
  };

  const handleAddInput = () => {
    setInputCount((prev) => [...prev, { id: Date.now(), value: "" }]);
    
  };
  const handleDeleteInput = (id:number) => {
    setInputCount((prev) => prev.filter((input) => input.id !== id));
  
    
  };
  useEffect(() => {
    setBoard((prev:any) => {
      return {
        ...prev,
        [type==='column' ? 'columns' :'subtasks']: JSON.stringify(inputCount),
      };
    });
  }
  , [inputCount]);
  

  return (
    <div>
      {inputCount.map((input:{id:number,value:string}) => (
        <div className="flex  gap-2" key={input.id}>
          <Input
            className="mb-2 outline-none"
            id={input.id.toString()}
            value={input.value}
            onChange={(e) => handleChange(input.id, e)}
          />
          <Button type="button" className="bg-transparent hover:bg-transparent hover:outline-dashed hover:outline-2  " onClick={() => handleDeleteInput(input.id)}>
            <XMarkIcon height={16} color="gray" />
          </Button>
        </div>
      ))}
      <Input onChange={handleChanges} name={`${type==='column' ? 'columns' :'subtasks'}`} value={JSON.stringify(inputCount)} className="hidden"/>
      <Button
        type="button"
        onClick={handleAddInput}
        className="bg-transparent hover:bg-transparent w-full hover:outline-dashed text-gray-400 font-bold"
      >
        <PlusIcon height={18} />
        {type === "column" ? "Add column" : "Add Subtask"}
      </Button>
    </div>
  );
};

export default DynamicInput;