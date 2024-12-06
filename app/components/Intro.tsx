import React from "react"

export default function Component({ content } : { content: string }) {
  return (
    <p className="text-foreground-secondary text-18 max-w-[600px] mx-auto text-center">
      {content}
    </p>
  )
}