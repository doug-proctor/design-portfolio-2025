import Link from "next/link"
import { sanityFetch } from "@/sanity/lib/fetch"
import { caseStudiesQuery, caseStudyQuery } from "@/sanity/lib/queries"
import { CaseStudy as CaseStudyType, KeyValue } from "@/sanity.types"
import { PortableTextBlock } from "next-sanity"
import HorizontalRule from "@/app/components/HorizontalRule"
import PortableText from "@/app/components/PortableText"
import Container from "@/app/components/Container"
import Avatar from "@/app/components/Avatar"
import Card from "@/app/components/Card"
import H1 from "@/app/components/H1"

export async function generateStaticParams() {
  const result = await sanityFetch({ query: caseStudiesQuery, params: { today: (new Date()).toISOString() } })
  const caseStudies = result as CaseStudyType[]

  return caseStudies.map((post) => ({
    slug: post.slug?.current,
  }))
}

function KeyValues({ keyValues } : { keyValues: KeyValue[] }) {
  return (
    <Card hasBorder body={
      <dl className="grid gap-16 grid-cols-1 md:grid-cols-3">
        {keyValues?.map(kv => (
          <div key={kv.key} className="zmb-12">
            <dt className="font-bold">{kv.key}</dt>
            <dd>{kv.value}</dd>
          </div>
        ))}
      </dl>
    } />
  )
}

export default async function Page({ params } : { params: any }) {
  const { slug } = await params
  const caseStudy = await sanityFetch({ query: caseStudyQuery, params: { slug } }) as CaseStudyType

  return (
    <>
      <div className="text-center space-y-8 py-32 border-b border-foreground-tertiary">
        <Avatar small />
        <Link className="block" href="/#case-studies">« Back to case studies</Link>
      </div>
      <Container>
        <article className="py-32 sm:py-48 md:py-64 space-y-32">
          <H1>{caseStudy.title}</H1>
          {caseStudy.keyValues && <KeyValues keyValues={caseStudy.keyValues}/>}
          <PortableText className="" value={caseStudy.content as PortableTextBlock[]} />
        </article>
      </Container>
    </>
  )
}