import Link from "next/link"
import { sanityFetch } from "@/sanity/lib/fetch"
import { caseStudiesQuery, caseStudyQuery } from "@/sanity/lib/queries"
import { CaseStudy as CaseStudyType } from "@/sanity.types"
import { PortableTextBlock } from "next-sanity"
import HorizontalRule from "@/app/components/HorizontalRule"
import PortableText from "@/app/components/PortableText"
import Avatar from "@/app/components/Avatar"
import H1 from "@/app/components/H1"

export async function generateStaticParams() {
  const result = await sanityFetch({ query: caseStudiesQuery, params: { today: (new Date()).toISOString() } })
  const caseStudies = result as CaseStudyType[]

  return caseStudies.map((post) => ({
    slug: post.slug?.current,
  }))
}

export default async function Page({ params } : { params: any }) {
  const { slug } = await params
  const caseStudy = await sanityFetch({ query: caseStudyQuery, params: { slug } }) as CaseStudyType

  return (
    <>
      <div className="text-center space-y-8 py-32">
        <Avatar small />
        <Link className="block" href="/#case-studies">« Back to case studies</Link>
      </div>

      <HorizontalRule />

      <article className="py-32 sm:py-48 md:py-64 space-y-32">
        <H1>{caseStudy.title}</H1>

        {/*<div className="space-y-8">*/}
        {/*  <div>Client: {caseStudy.client}</div>*/}
        {/*  <div>Client: {caseStudy.client}</div>*/}
        {/*  <div>Client: {caseStudy.client}</div>*/}
        {/*</div>*/}

        <PortableText className="" value={caseStudy.content as PortableTextBlock[]} />
      </article>
    </>
  )
}