import { ReactNode } from "react"

export default function Component({ children, threeCols } : { children: ReactNode, threeCols?: Boolean }) {
  let className = "grid gap-24 lg:gap-48 grid-cols-1 sm:grid-cols-2"

  if (threeCols) {
    className += " md:grid-cols-3"
  }

  return (
    <div className={className}>
      {children}
    </div>
  )
}