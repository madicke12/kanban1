'use client';

import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Column from './column';
import { ColumnType, TaskType } from '@/app/lib/types/itemTypes';
import axios from 'axios';

interface BoardProps {
  boardData: ColumnType[];
}

const Board: React.FC<BoardProps> = ({ boardData }) => {
  const [columns, setColumns] = useState<ColumnType[]>(boardData || []);

  const updateColumnTasks = async (task: TaskType, fromColumnId: string, toColumnId: string) => {
    setColumns(prevColumns => {
      return prevColumns.map(column => {
        if (column.id === fromColumnId) {
          return { ...column, Task: column.Task.filter(t => t.id !== task.id) };
        }
        if (column.id === toColumnId) {
          return { ...column, Task: [...column.Task, { ...task, columnId: toColumnId }] };
        }
        return column;
      });
    });

    // Update the task's column in the database
    try {
      await axios.post('/api/updateColumn', { taskId: task.id, columnId: toColumnId });
    } catch (error) {
      console.error('Failed to update task column:', error);
      // You might want to implement some error handling or state rollback here
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className='p-3 flex gap-3 overflow-x-auto'>
        {columns.map((column: ColumnType) => (
          <Column key={column.id} column={column} updateColumnTasks={updateColumnTasks} />
        ))}
      </div>
    </DndProvider>
  );
}

export default Board;