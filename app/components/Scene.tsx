import React from "react"
import { Figure as FigureType } from "@/sanity.types.js"
import Figure from "@/app/components/Figure"

export default function component({ value } : { value: any }) {
  if (value?.figures.length === 0 || typeof value === "undefined") {
    return null
  }

  return (
    <div className={`dp-scene ${value?.pageWide && "dp-scene-full-width"}`}>
      {value?.figures.map((figure: FigureType) => {
        return (
          <Figure value={figure} key={figure.asset?._ref} />
        )
      })}
    </div>
  )
}