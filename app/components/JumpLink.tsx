import React, { ReactNode } from "react"

export default function Component({ targetId, children } : { children: ReactNode, targetId: string}) {
  return (
    <div className="text-center">
      <a href={targetId} className="block sm:inline-block text-20 font-medium text-center bg-background-secondary hover:bg-background-tertiary text-[black] hover:text-[black] px-24 py-16 rounded-4">{children}</a>
    </div>
  )
}