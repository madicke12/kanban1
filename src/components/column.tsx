import { ColumnType, TaskType } from '@/app/lib/types/itemTypes';
import React from 'react';
import { useDrop } from 'react-dnd';
import AddTask from './addTask';
import TaskCard from "./taskCard";

interface ColumnProps {
  column: ColumnType;
  updateColumnTasks: (task: TaskType, fromColumnId: string, toColumnId: string) => void;
}

const Column: React.FC<ColumnProps> = ({ column, updateColumnTasks }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'TASK',
    drop: (item: { task: TaskType }) => {
      if (item.task.columnId !== column.id) {
        updateColumnTasks(item.task, item.task.columnId, column.id);
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div className="w-[288px]">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold">{column.name}</div>
        <span className="font-bold">...</span>
      </div>
      <div className={`bg-madicke h-fit rounded-[6px] p-[10px] ${isOver ? 'bg-gray-200' : ''}`}>
        <div className="bg-madicke flex flex-col gap-3 min-h-80" ref={drop}>
          {column.Task.map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
      <AddTask id={column.id} />
      
    </div>
  );
};

export default Column;