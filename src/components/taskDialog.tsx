import { TaskType } from "@/app/lib/types/itemTypes";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import CheckTask from "./checktask";
import TaskCard from "./taskCard";
import { TaskStatusSelect } from "./taskStatusSelect";
import {  useSubtaskStore } from "@/app/boardContext";

const TaskModal = ({ task }: { task: TaskType }) => {
  const subtasks = useSubtaskStore((state) => state.subtasks);
  const sub = subtasks.filter((sub)=>sub.taskId === task.id)
  //console.log(madicke.Subtasks)
  return (
    <Dialog>
      <DialogTrigger>
       <TaskCard task={task}/>
      </DialogTrigger>
      <DialogContent className="max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{task.titre}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col">
          <span>Subtask {sub.length} </span>

          {sub.map((cisse) => (
            <CheckTask key={cisse.id} cisse={cisse} />
          ))}
          <div className=" px-1 mt-2  items-center">
            <span>Current status</span>
           <TaskStatusSelect cisse={task}/>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TaskModal;
	