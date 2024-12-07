import React from "react"
import Image from "next/image"
import { urlForImage } from "@/sanity/lib/utils"

export default function component({ value } : { value: any }) {
  if (!value || !value.asset) return null

  return (
    <figure className="this">
      <Image
        src={urlForImage(value)?.width(2000).url() as string}
        alt={value.alt}
        height={2000}
        width={2000}
      />

      {value.caption && <figcaption>{value.caption}</figcaption>}
    </figure>
  )
}