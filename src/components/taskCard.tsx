import { TaskType } from '@/app/lib/types/itemTypes'
import Image from 'next/image'
import { useDrag } from 'react-dnd'
import { TaskCollapsible } from './tasksCollapsible'

export default function TaskCard({ task }: { task: TaskType }) {
const [{isDragging}, drag] = useDrag(() => ({
    type: 'TASK',
    item: { task },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),}))
    task.description= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, ultricies nunc. Nullam nec purus nec purus feugiat, molestie ipsum et, ultricies nunc. Nullam nec purus'
  return (
    <div className={` bg-white w-[268px] p-[10px] flex flex-col gap-3 items-start rounded-[4px] shadow-custom relative ${isDragging ? 'opacity-50':''} `}  ref={drag as unknown as React.LegacyRef<HTMLDivElement> }>
      
      {task.picture && <Image src={task.picture} loading='lazy' width={246} height={246} className='rounded-sm w-[246px] h-[230px] ' alt='task banner' />}
      <div className='mt-4'>
        <span className='font-bold'>{task.titre}</span>
      </div>
      <div>
        <span className='text-gray-400'>{task.description.slice(0,25)+"..."}</span>
      </div>
      <div className='bg-primary-100 text-primary-250 p-1 rounded-xl h-[24px] flex items-center w-[60px] mt-4 justify-center'>label</div>
    </div>
  )
}