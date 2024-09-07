'use client'
import { useSearchParams } from "next/navigation"

export default  function Page() {
const params = useSearchParams()
console.log(params.get('id'))
  return (
    <div>
        <div>
            <div className ='flex gap-2 p-3 mt-4 '>
                    <h1>working</h1>
            </div>
        </div>
    </div>
  )
}
