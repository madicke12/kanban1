/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import DynamicInput from "./dynamic-input";

// import { getServerSession } from "next-auth";
// import { submit } from "../../lib/actions/actions";
// import { authOption } from "../api/auth/[...nextauth]/route";

 export const AddBoardForm =  () => {
  //const session =  await getServerSession(authOption)
  //console.log(session)
  return (
    <form  method="post">
      <DialogHeader>
        <DialogTitle>Add new Board</DialogTitle>
        <DialogDescription>
          Add a new board here click Create new Board when you're done
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-1 items-center gap-4">
          <Label htmlFor="Boardname" className="">
            Board Name
          </Label>
          <Input
            name="boardName"
            id="Boardname"
            placeholder="eg: Marketing Plan "
            className="col-span-3"
          />
        </div>
        <div className="flex flex-col   mt-4 gap-4">
          <input className="hidden" value={'656f4da9e7241b17b75896bc'} name="userId"/>
          <DynamicInput type={'column'}/>
         {/* <input type="text" className="hidden" value={JSON.stringify(['To Do','Doing','Done'])} readOnly name="columns" /> */}
        </div>
      </div>
      <DialogFooter>
        <Button className="w-full bg-primary hover:bg-primary-500" type="submit">
          Create new Board
        </Button>
      </DialogFooter>
    </form>
  );
};