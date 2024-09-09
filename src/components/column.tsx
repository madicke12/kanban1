'use client'
import { C } from "@/app/lib/types/itemTypes"
import TaskCard from "./taskCard"
import { Button } from "./ui/button"
import { useState } from "react";

import { useDrop } from 'react-dnd';


const ColumN = ({ columns, }: { columns: C }) => {
    const [tasks, setTasks] = useState(columns[0]?.Task || []);
    console.log(columns[0].name)
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'TASK',
        drop: (item: any) => {
            setTasks((prev) => [...prev, item.task]);
            console.log(item)
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }));


    return (
            <div className="w-[288px]" >
                <div className="flex items-center justify-between">
                    <div className="text-xl font-bold">{columns[0].name}</div>
                    <span className="font-bold">...</span>
                </div>
                <div className=" bg-madicke h-fit rounded-[6px] p-[10px]">
                    <div className=" bg-madicke flex flex-col gap-3 min-h-80 " ref={drop}>
                        {tasks.map(task => (
                            <TaskCard key={task.id} task={task} />
                        ))}
                    </div>
                </div>
                <Button className="w-full bg-transparent text-gray-300 hover:bg-transparent hover:outline-dashed  mt-4"> + Add task</Button>
            </div>

    )
}

export default ColumN