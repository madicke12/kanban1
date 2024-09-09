
export  interface ItemsType {
    id: string;
    name: string;
    price: string;
    titre : string
    
}

export interface BoardType {
    id: string;
    name: string;
    items: ItemsType[]
}

export interface BoardListeType {
    bListe: {name:string , id:string}[]
}

export interface ParamsType {
    id:string
}

export interface SubtaskType {
    id: number;
    name: string;
    done: boolean;
}
export interface TaskType {
  id         : string    
  columnId     : string    
  currentStatus: string
  description  : string
  titre        : string
  Subtasks      :SubtaskType[]
}
export interface ColumnType {
    id:string;
    name: string;
    boardId: string;
    Task: TaskType[]
}


export interface C{
    0:ColumnType
}