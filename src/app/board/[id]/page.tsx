
import Board from '@/components/board';
import { ParamsType } from '../../lib/types/itemTypes';

export default function page({ params }: { params: ParamsType }) {
  return (
    <div className=''>

        <Board id={params.id} />
    </div>
  );
}
