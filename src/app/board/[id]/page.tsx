
import Board from '@/components/board';
import { ParamsType } from '../../lib/types/itemTypes';
import { Suspense } from 'react';
import ColumnSkeleton from '@/components/columnSkeleton';

export default async function page({ params }: { params: ParamsType }) {
  return (
    <div className=''>
        <Suspense fallback={<ColumnSkeleton/>} >
        <Board id={params.id} />
        </Suspense>
    </div>
  );
}
