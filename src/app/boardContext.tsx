'use client'

import { createContext, PropsWithChildren, useContext, useEffect, useReducer } from 'react';
import { BoardType, ColumnType,P } from './lib/types/itemTypes';
import axios from 'axios';

export const BoardContext = createContext<any[]>(null);
import { Dispatch } from 'react';

export const BoardDispatchContext = createContext<Dispatch<{ type: string; board: BoardType }>>(null);
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
    const [Column,Cdispatch] = useReducer(
        ColumnReducer,
        []
    );
    // useEffect(()=>{
    //   const fetcher = async()=>{
    //     const response = await axios.get('/api/getColumn')
    //     const column = response.data
    //     Cdispatch({type:'add', column} )
    //   }
    //   fetcher()
  
    // },[Column])
    return(
        <ColumnContext.Provider value={Column}>
            <ColumnDispatchContext.Provider value={Cdispatch}>
                {children}
            </ColumnDispatchContext.Provider>
        </ColumnContext.Provider>
    )
}

export function BoardProvider({ children }:PropsWithChildren) {
  const [Board, dispatch] = useReducer(
    BoardReducer,
    []
  );
  useEffect(()=>{
    const fetcher = async()=>{
      const board = await (await axios.get('/api/board/getAll')).data
      dispatch({type:'fetch', board})
    }
    fetcher()

  },[])
  return (
    <BoardContext.Provider value={Board}>
      <BoardDispatchContext.Provider value={dispatch}>
        <ColumnProvider>
        {children}
        </ColumnProvider>
      </BoardDispatchContext.Provider>
    </BoardContext.Provider>
  );
}

function BoardReducer(Board: any[], action: { type: string; board:BoardType | any}) {
    const board = action.board
    console.log('aa',board)
  switch (action.type) {

    case 'added': {
      return [...Board, 
        board
      ];
    }
    case 'fetch':{
      return board
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

function ColumnReducer(Column :any[], action: {type:string; column:ColumnType}){
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
        default: {
            return Column;
        }
    }
}


