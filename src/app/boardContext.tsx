'use client'

import { createContext, PropsWithChildren, useContext, useEffect, useReducer } from 'react';
import { BoardType, ColumnType, SubtaskType, TaskType } from './lib/types/itemTypes';
import axios from 'axios';
import { Dispatch } from 'react';

export const BoardContext = createContext<any[]>([]);
export const BoardDispatchContext = createContext<Dispatch<{ type: string; board: BoardType }>>(() => null);

export const TaskContext = createContext<TaskType[]>([])
export const TaskDispatchContext = createContext<Dispatch<{ type: string; task: TaskType }>>(() => null)

export const ColumnContext = createContext<ColumnType[]>([]);
export const ColumnDispatchContext = createContext<Dispatch<{ type: string; column?: ColumnType }>>(() => null)

export const SubTaskContext = createContext<SubtaskType[]>([]);
export const SubTaskDispatchContext = createContext<Dispatch<{ type: string; subtask: SubtaskType }>>(() => null)

export function useBoardListe() {return useContext(BoardContext)}
export function useBoardDispatch() {return useContext(BoardDispatchContext)}

export function useColumnListe() { return useContext(ColumnContext) }
export function useColumnDispatch() { return useContext(ColumnDispatchContext) }

export function useTaskListe() { return useContext(TaskContext) }
export function useTaskDispatch() { return useContext(TaskDispatchContext) }

export function useSubTaskListe() { return useContext(SubTaskContext) }
export function useSubTaskDispatch() { return useContext(SubTaskDispatchContext) }


function ColumnProvider({ children }: PropsWithChildren) {
  const [Column, dispatch] = useReducer(
    ColumnReducer,
    []
  );
  useEffect(() => {
    const fetcher = async () => {
      const response = await axios.get('/api/column/getAll')
      const column = response.data
      dispatch({ type: 'fetch',column })
    }
    fetcher()

  }, [])
  return (
    <ColumnContext.Provider value={Column}>
      <ColumnDispatchContext.Provider value={dispatch}>
        {children}
      </ColumnDispatchContext.Provider>
    </ColumnContext.Provider>
  )
}

function TaskProvider({ children }: PropsWithChildren) {
  const [Task, dispatch] = useReducer(
    TaskReducer,
    []
  );
  useEffect(() => {
    const fetcher = async () => {
      const response = await axios.get('/api/task/getAll')
      const task = response.data
      console.log('task', task)
      dispatch({ type: 'fetch',task })
    }
    fetcher()

  }, [])
  return (
    <TaskContext.Provider value={Task}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  )
}

function SubTaskProvider({ children }: PropsWithChildren) {
  const [Subtask, dispatch] = useReducer(
    SubTaskReducer,
    []
  );
  useEffect(() => {
    const fetcher = async () => {
      const response = await axios.get('/api/subtask/getAll')
      const subtask = response.data
      console.log('subtask', subtask)
      dispatch({ type: 'fetch',subtask })
    }
    fetcher()

  }, [])
  return (
    <SubTaskContext.Provider value={Subtask}>
      <SubTaskDispatchContext.Provider value={dispatch}>
        {children}
      </SubTaskDispatchContext.Provider>
    </SubTaskContext.Provider>
  )
}
export function BoardProvider({ children }: PropsWithChildren) {
  const [Board, dispatch] = useReducer(
    BoardReducer,
    []
  );
  useEffect(() => {
    const fetcher = async () => {
      const board = await (await axios.get('/api/board/getAll')).data
      dispatch({ type: 'fetch', board })
    }
    fetcher()

  }, [])
  return (
    <BoardContext.Provider value={Board}>
      <BoardDispatchContext.Provider value={dispatch}>
        <ColumnProvider>
          <TaskProvider>
            <SubTaskProvider>
          {children}
            </SubTaskProvider>
          </TaskProvider>
        </ColumnProvider>
      </BoardDispatchContext.Provider>
    </BoardContext.Provider>
  );
}

function BoardReducer(Board: any[], action: { type: string; board: BoardType | any }) {
  const board = action.board
  console.log('aa', board)
  switch (action.type) {

    case 'added': {
      return [...Board,
        board
      ];
    }
    case 'fetch': {
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

function ColumnReducer(Column: any[], action: { type: string; column?: ColumnType | any }) {
  const col = action.column
  switch (action.type) {
    case 'add': {
      return [...Column, { col }];
    }
    case 'update': {
      return Column.map(item => {
        if (item.id === action.column.id) return action.column.id
        return item

      })
    }
    case 'delete': {
      return Column.filter(item => item.id !== action.column.id)
    }
    case 'fetch':{
      return col
    }
    default: {
      return Column;
    }
  }
}


function TaskReducer(Task: any[], action: { type: string; task: TaskType | any }) {
  const task = action.task
  console.log('aa', task)
  switch (action.type) {

    case 'added': {
      return [...Task,
        task
      ];
    }
    case 'fetch': {
      return task
    }
    case 'update': {
      return Task.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return Task.filter(t => t.id !== action.task.id);
    }
    
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}


function SubTaskReducer(Subtask: any[], action: { type: string; subtask: SubtaskType | any }) {
  const subtask = action.subtask
  console.log('aa', subtask)
  switch (action.type) {

    case 'fetch': {
      return subtask
    }
    case 'update': {
      return Subtask.map(t => {
        if (t.id === action.subtask.id) {
          return action.subtask;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return Subtask.filter(t => t.id !== action.subtask.id);
    }
    
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}


