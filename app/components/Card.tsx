import React from "react"
import Link from "next/link"
import Image from "next/image"
import { urlForImage } from "@/sanity/lib/utils"

type Props = {
  hasSmallerThumbnail?: boolean,
  hasCenteredHeader?: boolean,
  isCaseStudy?: boolean,
  hasBorder?: boolean,
  subtitle?: string,
  thumbnail?: any,
  title?: string,
  href?: string,
  body?: any,
  icon?: any,
}
export default function component({ hasBorder, hasCenteredHeader, isCaseStudy, hasSmallerThumbnail, subtitle, title, thumbnail, icon, body, href } : Props) {

  const Header = () => (
    <div className={`${hasCenteredHeader && "text-center"}`}>
      {icon && <span dangerouslySetInnerHTML={{ __html: icon }} className="external-css-component__with-inline-svg-child" />}
      <h3 className="text-20 font-bold">{title}</h3>
      <h4 className="text-16 font-medium text-foreground-secondary">{subtitle}</h4>
      {href && <div className="text-accent">Dive in →</div>}
    </div>
  )

  const Content = () => (
    <div className="space-y-12">
      <div className="space-y-4">
        <div className={`${hasSmallerThumbnail && "w-[120px] mx-auto"}`}>
          {thumbnail && <Image
            src={urlForImage(thumbnail)?.width(700).url() as string}
            alt={thumbnail.alt}
            height={200}
            width={350}
          />}
        </div>
        <Header />
      </div>
      <div>{body}</div>
    </div>
  )

  const BorderedContent = () => hasBorder ? (
    <div className="py-32 px-16 border border-foreground-tertiary rounded-4">
      <Content />
    </div>
  ) : <Content />

  const CaseStudyContent = () => isCaseStudy ? (
    <div className="py-32 px-16 border border-foreground-tertiary rounded-4">
      <Content />
    </div>
  ) : <Content />

  const WithHref = () => href ? (
    <Link href={href} className="hover:scale-105 transition">
      <CaseStudyContent />
    </Link>
  ) : (
    <BorderedContent />
  )

  return <WithHref />
}