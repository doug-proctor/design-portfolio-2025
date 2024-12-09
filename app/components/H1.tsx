import React, { ReactNode } from "react"

export default function Component({ children } : { children: ReactNode }) {
  return (
    <h1 className="font-bold text-center text-28 sm:text-32 md:text-40 lg:text-40">{children}</h1>
  )
}