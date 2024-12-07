import React from "react"
import { sanityFetch } from "@/sanity/lib/fetch"
import { format } from "date-fns"
import { caseStudiesQuery } from "@/sanity/lib/queries"
import { CaseStudy as CaseStudyType } from "@/sanity.types"
import Card from "@/app/components/Card"
import Grid from "@/app/components/Grid"
import H2 from "@/app/components/H2"

export default async function Component() {
  const today = format(new Date(), "yyyy-MM-dd")
  console.log(today)
  const result = await sanityFetch({ query: caseStudiesQuery, params: { today } })
  const caseStudies = result as CaseStudyType[]

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