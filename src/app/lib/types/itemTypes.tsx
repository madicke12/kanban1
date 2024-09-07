
export  interface ItemsType {
    id: number;
    name: string;
    price: number;
    titre : string
    
}

export interface BoardType {
    id: number;
    name: string;
    items: ItemsType[]
}

export interface BoardListeType {
    bListe: {name:string , id:string}[]
}

export interface ParamsType {
    id:string
}
