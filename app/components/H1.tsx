import React, { ReactNode } from "react"

export default function Component({ children } : { children: ReactNode }) {
  return (
    <h1 className="font-bold text-center text-28 md:text-32 lg:text-40">{children}</h1>
  )
}