'use client'
import { useColumnStore } from "@/app/boardContext";
import { ParamsType } from "@/app/lib/types/itemTypes";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useParams } from "next/navigation";

const StatusSelect = ({setBoard } :{setBoard:any}) => {
const params = useParams()

const columns = useColumnStore((state)=>state.columns).filter((column) => column.boardId === params.id).map((column) => column.name);
const SelectElements = columns.map((item) => (
    <SelectItem    key={item} value={item}>
      {item}
    </SelectItem>
  ));
  const a = (value:any)=>{
    setBoard((prev:any)=>{
      return {
        ...prev,
        currentstatus: value
      }
    }
    )
  }
  return (
    <Select name="currentStatus" onValueChange={(value)=>a(value)}>
      <SelectTrigger className="w-full text-primary">
        <SelectValue placeholder="chose the status" />
      </SelectTrigger>
      <SelectContent>{SelectElements}</SelectContent>
    </Select>
  );
};

export default StatusSelect;