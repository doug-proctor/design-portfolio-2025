import Image from "next/image"
import { sanityFetch } from "@/sanity/lib/fetch"
import { caseStudiesQuery, caseStudyQuery } from "@/sanity/lib/queries"
import { Post as PostType } from "@/sanity.types"
import { PortableTextBlock } from "next-sanity"
import PortableText from "@/app/components/PortableText"
import { urlForImage } from "@/sanity/lib/utils"
import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"

export async function generateStaticParams() {
  const result = await sanityFetch({ query: caseStudiesQuery })
  const caseStudies = result as PostType[]

  return caseStudies.map((post) => ({
    slug: post.slug?.current,
  }))
}

export default async function Page({ params } : { params: any }) {
  const { slug } = await params
  const result = await sanityFetch({ query: caseStudyQuery, params: { slug } })
  const caseStudy = result as PostType

  // console.log(caseStudy)

  const src = urlForImage(caseStudy.thumbnailImage)?.height(1000).width(2000).url() as string

  return (
    <>
      <Header />
      <Image src={src} alt="REPLACE ME" width={400} height={200} className="" />
      <h1>{caseStudy.title}</h1>
      <div>{caseStudy.client}</div>
      <PortableText className="" value={caseStudy.content as PortableTextBlock[]} />
      <Footer />
    </>
  )
}