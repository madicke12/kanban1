
import Board from '@/components/board';
import ColumnSkeleton from '@/components/columnSkeleton';
import { Suspense } from 'react';
import { ParamsType } from '../../lib/types/itemTypes';

export default async function page({ params }: { params: ParamsType }) {
  return (
    <div className=''>
        <Suspense fallback={<ColumnSkeleton/>} >
        <Board id={params.id} />

        </Suspense>
    </div>
  );
}
