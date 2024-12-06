import React from "react"
import { sanityFetch } from "@/sanity/lib/fetch"
import { caseStudiesQuery } from "@/sanity/lib/queries"
import { Post as PostType } from "@/sanity.types"
import H2 from "@/app/components/H2"
import Card from "@/app/components/Card"
import Grid from "@/app/components/Grid"

export default async function Component() {
  const result = await sanityFetch({ query: caseStudiesQuery })
  const caseStudies = result as PostType[]

  return (
    <div className="space-y-24 sm:space-y-32 md:space-y-48">
      <H2>Case studies</H2>
      <Grid threeCols>
        {caseStudies.map(caseStudy => (
          <Card
            key={caseStudy.title}
            title={caseStudy.title}
            subtitle={caseStudy.client}
            thumbnail={caseStudy.thumbnailImage}
            href={`case-studies/${caseStudy.slug?.current!}`}
          />
        ))}
      </Grid>
    </div>
  )
}