import Image from 'next/image'
import React from 'react'
import im from '../../public/taskimage.jpg'
import { TaskType } from '@/app/lib/types/itemTypes'
import {useDrag} from 'react-dnd'
import prisma from '@/app/lib/prismaSingleton'

export default function TaskCard({ task }: { task: TaskType }) {
const [{isDragging}, drag] = useDrag(() => ({
    type: 'TASK',
    item: { task },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),}))

  return (
    <div className={` bg-white w-[268px] p-[10px] rounded-[4px] shadow-custom relative ${isDragging ? 'opacity-50':''} `}  ref={drag }>
      <Image src={im} width={246} height={128} className='rounded-sm ' alt='task banner' />
      <div className='mt-4'>
        <span className='font-bold '>{task.titre}</span>
      </div>
      <div className='bg-primary-100 text-primary-250 p-1 rounded-xl h-[24px] flex items-center w-[60px] mt-4 justify-center'>label</div>
    </div>
  )
}
