import React from "react"
import { Figure as FigureType } from "@/sanity.types.js"
import Figure from "@/app/components/Figure"

export default function component({ value } : { value: any }) {
  if (typeof value === "undefined") return null

  if (value?.figures.length === 0) {
    return null
  }

  const className = value?.pageWide ? "this" : "that"

  const renderImages = () => {
    return value?.figures.map((figure: FigureType) => {
      return (
        <div className={className} key={figure.asset?._ref}>
          <Figure value={figure} />
        </div>
      )
    })
  }

  return (
    <div className={className}>
      {renderImages()}
    </div>
  )
}