'use client'
import Board from '@/components/board';
import { ParamsType } from '../../lib/types/itemTypes';
import { SessionAuth } from "supertokens-auth-react/recipe/session"

export default function page({ params }: { params: ParamsType }) {
  return (
    <div className=''>
      <SessionAuth>

        <Board id={params.id} />
      </SessionAuth>
    </div>
  );
}
