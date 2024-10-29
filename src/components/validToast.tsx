"use client"

import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/hooks/use-toast"

export function ToastDestructive({title, description}: {title: string, description: string}) {
  const { toast } = useToast()

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: title,
          description: description,
        //   action: <ToastAction altText="Try again">Try again</ToastAction>,a
        })
      }}
    >
      Show Toast
    </Button>
  )
}
