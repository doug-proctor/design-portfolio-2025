import React from "react"
import Link from "next/link"
import Image from "next/image"
import { urlForImage } from "@/sanity/lib/utils"

type Props = {
  subtitle?: string,
  thumbnail?: any,
  title: string,
  href: string,
}
export default function component({ subtitle, title, thumbnail, href } : Props) {
  const Content = () => (
    <Link href={href} className="hover:scale-105 transition border border-foreground-tertiary rounded-4 overflow-hidden">
      <div className="space-y-4">
        <div>
          {thumbnail && <Image
            src={urlForImage(thumbnail)?.width(700).url() as string}
            alt={thumbnail.alt}
            height={200}
            width={350}
          />}
        </div>
        <div className="p-16 space-y-8">
          <h3 className="text-20 font-medium">{title}</h3>
          <h4 className="text-16 font-medium text-foreground-secondary">{subtitle}</h4>
          <div className="text-accent">Dive in →</div>
        </div>
      </div>
    </Link>
  )

  return <Content />
}