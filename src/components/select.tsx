'use client'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const value = ["To Do", "Doing", "Done"];
const StatusSelect = ({setBoard }:any) => {
const SelectElements = value.map((item) => (
    <SelectItem    key={item} value={item}>
      {item}
    </SelectItem>
  ));
  const a = ()=>{
    setBoard((prev:any)=>{
      return {
        ...prev,
        currentStatus: value
      }
    }
    )
  }
  return (
    <Select name="currentStatus" onValueChange={a}>
      <SelectTrigger className="w-full text-primary">
        <SelectValue placeholder="chose the status" />
      </SelectTrigger>
      <SelectContent>{SelectElements}</SelectContent>
    </Select>
  );
};

export default StatusSelect;