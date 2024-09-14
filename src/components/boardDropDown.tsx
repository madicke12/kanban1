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


// { bListe }: BoardListeType
export function BoardSelect() {
    const bListe = useBoardListe() 
    const Element = bListe.map(item => { return  <SelectItem key={item.id} className="cursor-pointer" value={item.id}> {item.name}</SelectItem> })
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
 