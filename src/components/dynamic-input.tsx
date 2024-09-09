"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PlusIcon, TrashIcon , XMarkIcon } from "@heroicons/react/24/solid";

const DynamicInput = ({ type }:any) => {
  const [inputCount, setInputCount] = useState([
    { id: Date.now() * 2, value: "" },
  ]);

  const handleChange = (id:any, e:any) => {
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

  const handleDeleteInput = (id:any) => {
    setInputCount((prev) => prev.filter((input) => input.id !== id));
  };

  return (
    <div>
      {inputCount.map((input:any) => (
        <div className="flex  gap-2" key={input.id}>
          <Input
            className="mb-2 outline-none"
            id={input.id}
            value={input.value}
            onChange={(e) => handleChange(input.id, e)}
          />
          <Button type="button" className="bg-transparent hover:bg-transparent hover:outline-dashed hover:outline-2  " onClick={() => handleDeleteInput(input.id)}>
            <XMarkIcon height={16} color="gray" />
          </Button>
        </div>
      ))}
      <Input name={`${type==='columns' ? 'columns' :'subtasks'}`} value={JSON.stringify(inputCount)} className="hidden"/>
      <Button
        type="button"
        onClick={handleAddInput}
        className="bg-transparent hover:bg-transparent w-full hover:outline-dashed text-gray-400"
      >
        <PlusIcon height={20} />
        {type === "columns" ? "Add column" : "Add Subtask"}
      </Button>
    </div>
  );
};

export default DynamicInput;