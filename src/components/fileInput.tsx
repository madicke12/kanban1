import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function InputFile({ref}:{ref: React.RefObject<HTMLInputElement>}) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Photo <span>Facultative</span></Label>
      <Input id="picture" ref={ref} type="file" />
    </div>
  )
}
//faw ma ko