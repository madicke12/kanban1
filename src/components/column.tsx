'use client'
import { useTaskStore } from '@/app/boardContext';
import { ColumnType, TaskType } from '@/app/lib/types/itemTypes';
import React from 'react';
import { useDrop } from 'react-dnd';
import AddTask from './addTask';
import { DropdownMenuRadioGroupDemo } from './drop';
import TaskModal from './taskDialog';
import TaskContextMenu from './contexmenu';

interface ColumnProps {
  column: ColumnType;
  updateColumnTasks: (task: TaskType, toColumnId: string) => void;
}

const Column: React.FC<ColumnProps> = ({ column, updateColumnTasks }) => {
  const fetchTasks = useTaskStore((state) => state.fetchTasks);

  React.useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);
  const dispatch = useTaskStore((state) => state.updateTask);
  const Tasks = useTaskStore((state) => state.tasks);
  const t = Tasks ? Tasks.filter((task: TaskType) => task.columnId === column.id) : [];
  console.log('tasks', t);

  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: 'TASK',
    drop: (item: { task: TaskType }) => {
      if (item.task.columnId !== column.id) {
        updateColumnTasks(item.task, column.id);
        item.task.columnId = column.id;
        dispatch( item.task );
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
        <DropdownMenuRadioGroupDemo column={column} />
      </div>
      <div className={`bg-madicke h-fit rounded-[6px] p-[10px] ${isOver ? 'bg-gray-200' : ''}`}>
        <div
          className="bg-madicke flex flex-col gap-3 min-h-80"
          ref={dropRef as unknown as React.LegacyRef<HTMLDivElement>} // Use LegacyRef for function refs
        >
          {t.map(task => (
            <TaskContextMenu key={task.id} task={task} />
          ))}
        </div>
      </div>
      <AddTask id={column.id} />
    </div>
  );
};

export default Column;