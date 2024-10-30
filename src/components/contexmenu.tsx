import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
  } from "@/components/ui/context-menu"
import TaskModal from "./taskDialog"
import { TaskType } from "@/app/lib/types/itemTypes"
import { deleteItem } from "@/lib/utils"
import { useTaskStore } from "@/app/boardContext"
import axios from "axios"
import { revalidatePath } from "next/cache"


const TaskContextMenu = ({task}:{task:TaskType}) => {
    const del = useTaskStore((state) => state.deleteTask)
    const handleDelete = async (id: string) => {
        del(id)
        await axios.delete('/api/task/delete', { data: { taskId: id } }) 

      }

    return(
        <ContextMenu>
        <ContextMenuTrigger><TaskModal task={task}/></ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Modifier</ContextMenuItem>
          <ContextMenuItem onClick={()=>handleDelete(task.id)}>Supprimer</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    )
}

export default TaskContextMenu