'use client'

import { create } from 'zustand'
import axios from 'axios'
import { BoardType, ColumnType, SubtaskType, TaskType, userType } from './lib/types/itemTypes'
import { PropsWithChildren, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { getServerSession } from 'next-auth'
import { authConfig } from './api/auth/[...nextauth]/route'

// Zustand store for Board
interface BoardState {
  boards: BoardType[]
  fetchBoards: () => void
  addBoard: (board: BoardType) => void
  updateBoard: (board: BoardType) => void
  deleteBoard: (id: string) => void
  init: (board:BoardType[])=>void
}

export const useBoardStore = create<BoardState>((set) => ({
  boards: [],
  fetchBoards: async () => {
    const response = await axios.get('/api/board/getAll')
    set({ boards: response.data })
  },
  init: (board:BoardType[])=>{
    set({boards:board})
  },
  addBoard: (board: BoardType) => set((state) => ({ boards: [...state.boards, board] })),
  updateBoard: (board: BoardType) =>
    set((state) => ({
      boards: state.boards.map((b) => (b.id === board.id ? board : b)),
    })),
  deleteBoard: (id: string) =>
    set((state) => ({
      boards: state.boards.filter((b) => b.id !== id),
    })),
}))

// Zustand store for Column
interface ColumnState {
  columns: ColumnType[]
  fetchColumns: () => void
  addColumn: (column: ColumnType) => void
  updateColumn: (column: ColumnType) => void
  deleteColumn: (id: string) => void
}

export const useColumnStore = create<ColumnState>((set) => ({
  columns: [],
  fetchColumns: async () => {
    const response = await axios.get('/api/column/getAll')
    set({ columns: response.data })
  },
  addColumn: (column: ColumnType) => set((state) => ({ columns: [...state.columns, column] })),
  updateColumn: (column: ColumnType) =>
    set((state) => ({
      columns: state.columns.map((col) => (col.id === column.id ? column : col)),
    })),
  deleteColumn: (id: string) =>
    set((state) => ({
      columns: state.columns.filter((col) => col.id !== id),
    })),
}))

// Zustand store for Task
interface TaskState {
  tasks: TaskType[]
  fetchTasks: () => void
  addTask: (task: TaskType) => void
  updateTask: (task: TaskType) => void
  deleteTask: (id: string) => void
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [],
  fetchTasks: async () => {
    const response = await axios.get('/api/task/getAll')
    set({ tasks: response.data })
  },
  addTask: (task: TaskType) => set((state) => ({ tasks: [...state.tasks, task] })),
  updateTask: (task: TaskType) =>
    set((state) => ({
      tasks: state.tasks.map((t) => (t.id === task.id ? task : t)),
    })),
  deleteTask: (id: string) =>
    set((state) => ({
      tasks: state.tasks.filter((t) => t.id !== id),
    })),
}))

// Zustand store for Subtask
interface SubtaskState {
  subtasks: SubtaskType[]
  fetchSubtasks: () => void
  updateSubtask: (subtask: SubtaskType) => void
  deleteSubtask: (id: string) => void
}

export interface userState {
  user: userType | null 
  setUser: (user: userType ) => void
}
export const useUserStore = create<userState>((set) => ({
  user: null, 
  setUser: async(user: userType | null) => set({ user }),
}))
export const useSubtaskStore = create<SubtaskState>((set) => ({
  subtasks: [],
  fetchSubtasks: async () => {
    const response = await axios.get('/api/subtask/getAll')
    set({ subtasks: response.data })
  },
  updateSubtask: (subtask: SubtaskType) =>
    set((state) => ({
      subtasks: state.subtasks.map((st) => (st.id === subtask.id ? subtask : st)),
    })),
  deleteSubtask: (id: string) =>
    set((state) => ({
      subtasks: state.subtasks.filter((st) => st.id !== id),
    })),
}))

// Providers for fetching data initially
export function BoardProvider({ children }: PropsWithChildren) {
  const fetchBoards = useBoardStore((state) => state.fetchBoards)
  const fetchColumns = useColumnStore((state) => state.fetchColumns)
  const fetchTasks = useTaskStore((state) => state.fetchTasks)
  const fetchSubtasks = useSubtaskStore((state) => state.fetchSubtasks)
  const setUser = useUserStore((state) => state.setUser)
  const user = useSession().data?.user as userType
  useEffect(() => {
    fetchBoards()
    fetchColumns()
    fetchTasks()
    fetchSubtasks()
    setUser(user)
  }, [fetchBoards, fetchColumns, fetchTasks, fetchSubtasks , setUser, user])

  return <>{children}</>
}
