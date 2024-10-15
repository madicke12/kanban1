
export  interface ItemsType {
    id: string;
    name: string;
    price: string;
    titre : string
    
}


export interface BoardListeType {
    bListe: BoardType[]
}

export interface ParamsType {
    id:string
}

export interface BoardType {
    id: string;
    name: string;
    userId: string;
    columns: ColumnType[]
}

export interface PromiseBoardType {
    id: string;
    name: string;
    userId: string;
    columns: ColumnType[]
}

export interface SubtaskType {
    id: number;
    name: string;
    isDone: boolean;
    taskId: string;
}
export interface TaskType {
  id         : string    
  columnId     : string    
  currentStatus: string
  description  : string
  titre        : string
  picture      : string
  Subtasks      :SubtaskType[]
}
export interface ColumnType {
    id:string;
    name: string;
    boardId: string;
    Task: TaskType[]
}

export interface userType {
    id: string;
    name?: string;
    email?: string;
    image?: string;
}


