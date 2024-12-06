import React, { ReactNode } from "react"

export default function Component({ children } : { children: ReactNode }) {
  return (
    <h2 className="font-bold text-28 lg:text-32 text-center">{children}</h2>
  )
}