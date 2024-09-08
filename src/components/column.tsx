import { C } from "@/app/lib/types/itemTypes"
import TaskCard from "./taskCard"
import { Button } from "./ui/button"

const ColumN = ({ columns }: {columns:C}) => {
    const TaskELements = columns[0].Task?.map(item => { return <TaskCard key={item.id} task ={item} /> })
    console.log('a',columns)
    return (
        <div className="w-[288px]  ">
            <div className="flex items-center justify-between">
                <div className="text-xl font-bold">{columns[0].name}</div>
                <span className="font-bold">...</span>
            </div>
            <div className=" bg-madicke h-fit rounded-[6px] p-[10px]">

                <div className=" bg-madicke flex flex-col gap-3">
                    {TaskELements}
                </div>
            </div>
            <Button className="w-full bg-transparent text-gray-300 hover:bg-transparent hover:outline-dashed  mt-4"> + Add task</Button>
        </div>

    )
}

export default ColumN