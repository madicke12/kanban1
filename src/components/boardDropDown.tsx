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



export function BoardSelect({bListe}: BoardListeType) {
    const Element= bListe.map(item=>{return <SelectItem key={item.id} value={item.id}>{item.name}</SelectItem>})
  return (
    <Select>
      <SelectTrigger className="w-[180px] ">
        <SelectValue placeholder="Select a Board" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Boards</SelectLabel>
            {Element}
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
