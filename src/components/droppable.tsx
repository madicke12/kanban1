
import React from 'react';
import {useDroppable} from '@dnd-kit/core';

interface DroppableProps {
    id: string;
    children: React.ReactNode;
    }
export function Droppable(props : DroppableProps) {
  const {isOver, setNodeRef} = useDroppable({
    id: props.id,
  });
  console.log(props.id)
  const style = {
    color: isOver ? 'green' : undefined,
  };
  
  
  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}
