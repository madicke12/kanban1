'use client'
import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useRouter } from "next/navigation"
import { useBoardListe } from "@/app/boardContext"
import { useSession } from "next-auth/react"

// { bListe }: BoardListeType
export function BoardSelect() {
    const bListe = useBoardListe() 
    const {data} = useSession()
    const userBoard = bListe.filter(item => item.userId === data?.user?.id) 
    const Element = userBoard.map(item => { return  <SelectItem key={item.id} className="cursor-pointer" value={item.id}> {item.name}</SelectItem> })
    console.log(bListe)
    const router = useRouter();

    const handleValueChange = (value: string) => {
        router.push(`/board/${value}`);
    };
    return (
        <Select onValueChange={handleValueChange}>
            <SelectTrigger className="w-[180px] "> 
                <SelectValue placeholder="Select a Board" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Boards</SelectLabel>
                    {Element}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
 