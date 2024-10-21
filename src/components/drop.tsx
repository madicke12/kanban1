'use client'

import {  useColumnStore } from '@/app/boardContext';
import { ColumnType } from '@/app/lib/types/itemTypes';
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { useState } from 'react';
import axios from 'axios';
import { Button } from './ui/button';



export function DropdownMenuRadioGroupDemo({ column }: { column: ColumnType }) {
  const [position, setPosition] = useState("bottom")
  const deletecolumn = useColumnStore((state) => state.deleteColumn);
  const deleteColumn = async (id:string) => {
    try {
      deletecolumn(id);
      await axios.delete('/api/column/delete', { data: { columnId: id } }) as ColumnType;
    } catch (error) {
      console.error('Failed to delete column:', error);
    }}

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="border-none bg-transparent text-black shadow-none hover:bg-transparent">...</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top" onClick={()=>deleteColumn(column.id)}>Supprimer</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

 