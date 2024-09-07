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
import { BoardListeType } from "@/app/lib/types/itemTypes"
import { useRouter } from "next/navigation"



export function BoardSelect({ bListe }: BoardListeType) {
    const Element = bListe.map(item => { return  <SelectItem key={item.id} className="cursor-pointer" value={item.id}> {item.name}</SelectItem> })
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
 