import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const value = ["To Do", "Doing", "Done"];
const StatusSelect = () => {
  const SelectElements = value.map((item) => (
    <SelectItem  key={item} value={item}>
      {item}
    </SelectItem>
  ));
  return (
    <Select name="status">
      <SelectTrigger className="w-full text-primary">
        <SelectValue placeholder="chose the status" />
      </SelectTrigger>
      <SelectContent>{SelectElements}</SelectContent>
    </Select>
  );
};

export default StatusSelect;