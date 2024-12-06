import React from "react"
import Image from "next/image"
import { urlForImage } from "@/sanity/lib/utils"

export default function component({ value } : { value: any }) {
  if (!value || !value.asset) {
    return null
  }

  const src = urlForImage(value)?.height(1000).width(2000).url() as string

  console.log(value)

  return (
    <figure className="this">
      <Image src={src} alt={value.alt} width={1000} height={1000} />
      {value.caption && <figcaption>{value.caption}</figcaption>}
    </figure>
  )
}