'use client';

import { useColumnStore } from '@/app/boardContext';
import { ColumnType, TaskType } from '@/app/lib/types/itemTypes';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { AddColumnDialog } from './addColumnDialog';
import Column from './column';

interface BoardProps {
  id: string,
}

const Board: React.FC<BoardProps> = ({ id }) => {
  const fetchColumns = useColumnStore((state) => state.fetchColumns);
  useEffect(() => {
    fetchColumns();
  }, [fetchColumns]);
  
  const cols = useColumnStore((state) => state.columns);
  const [columns, setColumns] = useState<ColumnType[]>(cols.filter((col: ColumnType) => col.boardId === id));
  console.log('columns', columns);
  const updateColumnTasks = async (task: TaskType, toColumnId: string) => {
    try {
      await axios.post('/api/column/update', { taskId: task.id, columnId: toColumnId });
    } catch (error) {
      console.error('Failed to update task column:', error);
    }
  };

  useEffect(() => {
    setColumns(cols.filter((col: ColumnType) => col.boardId === id));
  }, [cols, id]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className='p-3 flex gap-3 overflow-x-auto'>
        {columns.map((column: ColumnType) => (
          <Column key={column.id} column={column} updateColumnTasks={updateColumnTasks} />
        ))}
        <AddColumnDialog id={id} />
      </div>
    </DndProvider>
  );
}

export default Board;
