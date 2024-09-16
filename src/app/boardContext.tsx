'use client'

import { createContext, PropsWithChildren, useContext, useEffect, useReducer } from 'react';
import { BoardType, ColumnType,P } from './lib/types/itemTypes';
import axios from 'axios';

export const BoardContext = createContext(null);
export const BoardDispatchContext = createContext(null);
export const TaskContext= createContext(null)
export const TaskDispatchContext = createContext(null)
export const ColumnContext= createContext(null)
export const ColumnDispatchContext = createContext(null)


export function useBoardListe(){
    return useContext(BoardContext)       
}
export function useBoardDispatch(){
    return  useContext(BoardDispatchContext)
}
export function useColumnListe(){ return useContext(ColumnContext)}
export function useColumnDispatch(){return useContext(ColumnDispatchContext)}
export function useTaskListe(){return useContext(TaskContext)}
export function useTaskDispatch(){return useContext(TaskDispatchContext)}

export function ColumnProvider({children}:PropsWithChildren){
    const [Column,dispatch] = useReducer(
        ColumnReducer,
        initialColumn
    );
    useEffect(()=>{
      const fetcher = async()=>{
        const response = await axios.get('/api/getColumn')
        const column = response.data
        // dispatch({type:'add', column} )
      }
      fetcher()
  
    },[Column])
    return(
        <ColumnContext.Provider value={Column}>
            <ColumnDispatchContext.Provider value={dispatch}>
                {children}
            </ColumnDispatchContext.Provider>
        </ColumnContext.Provider>
    )
}

export function BoardProvider({ children }:PropsWithChildren) {
  const [Board, dispatch] = useReducer(
    BoardReducer,
    initialBoard
  );
  useEffect(()=>{
    const fetcher = async()=>{
      const response = await axios.get('/api/getBoard')
      const board = response.data
      dispatch({type:'added', board} )
    }
    fetcher()

  },[Board])
  return (
    <BoardContext.Provider value={Board}>
      <BoardDispatchContext.Provider value={dispatch}>
        {children}
      </BoardDispatchContext.Provider>
    </BoardContext.Provider>
  );
}

function BoardReducer(Board: any[], action: { type: string; board:BoardType }) {
    const board = action.board
  switch (action.type) {
    case 'added': {
      return [...Board, {
        board
      }];
    }
    case 'changed': {
      return Board.map(t => {
        if (t.id === action.board.id) {
          return action.board;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return Board.filter(t => t.id !== action.board.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

function ColumnReducer(Column :any[],action:{type:string; column:ColumnType}){
    const col = action.column
    switch(action.type){
        case 'add':{
            return [...Column,{col}];
        }
        case 'update' :{
            return Column.map(item=>{
                if(item.id === action.column.id) return action.column.id
                return item

            })
        }
        case 'delete':{
            return Column.filter(item=> item.id !== action.column.id)
        }
    }

}
const initialBoard = [
  { id: '658e07148cbf1f61be6fc27b', name: 'zazaza', userId:'656f4da9e7241b17b75896bc' },
];

const initialColumn=[
    {id:'dhdhdhdhdhdhd' }
]