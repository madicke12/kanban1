import TaskCard from "./taskCard"

const ColumN= ()=>{
    return(
        <div className="w-[288px] h-fit rounded-[6px] p-[10px]">
           <div className="flex items-center justify-between">
           <div className="text-xl font-bold">name</div>
           <span className="font-bold">...</span>
           </div>
           <div className=" bg-madicke">
            <TaskCard/>
           </div>
        </div>
    )
}

export default ColumN