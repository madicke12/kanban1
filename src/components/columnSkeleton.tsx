import { Skeleton } from "@/components/ui/skeleton";

export default function ColumnSkeleton() {
  return (
    <div className="flex space-x-4"> {/* Flex container to display skeleton columns side by side */}
      {[...Array(3)].map((_, index) => (
        <div key={index} className="w-[288px] flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <Skeleton className="h-6 w-24 rounded" /> {/* Placeholder for column title */}
            <Skeleton className="h-6 w-6 rounded-full" /> {/* Placeholder for dropdown icon */}
          </div>
          <div className="bg-madicke h-fit rounded-[6px] p-[10px] space-y-3">
            <div className="flex flex-col gap-3 min-h-80">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="space-y-2">
                  <Skeleton className="h-[125px] w-[250px] rounded-xl" /> {/* Placeholder for task card */}
                  <Skeleton className="h-4 w-[250px]" /> {/* Placeholder for task title */}
                  <Skeleton className="h-4 w-[200px]" /> {/* Placeholder for task description */}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
