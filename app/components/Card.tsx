import React from "react"
import Link from "next/link"
import Image from "next/image"
import { urlForImage } from "@/sanity/lib/utils"

type Props = {
  hasCenteredHeader?: boolean,
  hasBorder?: boolean,
  subtitle?: string,
  thumbnail?: any,
  title?: string,
  href?: string,
  body?: any,
  icon?: any,
}
export default function component({ hasBorder, hasCenteredHeader, subtitle, title, thumbnail, icon, body, href } : Props) {

  const Header = () => (
    <div className={`${hasCenteredHeader && "text-center"}`}>
      {icon && <span dangerouslySetInnerHTML={{ __html: icon }} className="external-css-component__with-inline-svg-child" />}
      <h3 className="text-20 font-bold">{title}</h3>
      <h4 className="text-16 font-medium text-foreground-secondary">{subtitle}</h4>
    </div>
  )

  const Content = () => (
    <div className="space-y-12">
      <div className="space-y-4">
        {thumbnail && <Image
          src={urlForImage(thumbnail)?.height(200).width(350).url() as string}
          alt="alt"
          width={350}
          height={200}
        />}
        <Header />
        {href && <div className="text-accent">Dive in →</div>}
      </div>
      <div>{body}</div>
    </div>
  )

  const BorderedContent = () => hasBorder ? (
    <div className="py-32 px-16 border border-foreground-tertiary rounded-4">
      <Content />
    </div>
  ) : <Content />

  const WithHref = () => href ? (
    <Link href={href} className="hover:scale-105 transition">
      <BorderedContent />
    </Link>
  ) : (
    <BorderedContent />
  )

  return <WithHref />
}