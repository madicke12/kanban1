'use client';

import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Column from './column';
import { ColumnType, TaskType } from '@/app/lib/types/itemTypes';
import axios from 'axios';
import { useBoardListe, useColumnListe } from '@/app/boardContext';
import { Button } from './ui/button';
import { SessionAuth } from "supertokens-auth-react/recipe/session"
interface BoardProps {
  id: string,
}

const Board: React.FC<BoardProps> = ({ id }) => {
  const boards = useBoardListe()
  const cols = useColumnListe()
  const boardData = cols.filter((col: ColumnType) => col.boardId === id);
  console.log(boardData);
  const [columns, setColumns] = useState<ColumnType[]>(boardData);
  console.log('columns', columns);
  const updateColumnTasks = async (task: TaskType, toColumnId: string) => {
    try {
      await axios.post('/api/column/update', { taskId: task.id, columnId: toColumnId });
    } catch (error) {
      console.error('Failed to update task column:', error);
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className='p-3 flex gap-3 overflow-x-auto'>
        {columns.map((column: ColumnType) => (
          <Column key={column.id} column={column} updateColumnTasks={updateColumnTasks} />
        ))}
        <Button className='w-full max-w-[240px] bg-primary flex items-center justify-center h-[100vh] font-bold'>Add Column</Button>
      </div>
    </DndProvider>
  );
}

export default Board;