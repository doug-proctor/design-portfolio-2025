import React from "react"
import { sanityFetch } from "@/sanity/lib/fetch"
import { format } from "date-fns"
import { caseStudiesQuery } from "@/sanity/lib/queries"
import { CaseStudy as CaseStudyType } from "@/sanity.types"
import CaseStudyCard from "@/app/components/CaseStudyCard"
import Grid from "@/app/components/Grid"
import H2 from "@/app/components/H2"

export default async function Component() {
  const today = format(new Date(), "yyyy-MM-dd")
  console.log(today)
  const result = await sanityFetch({ query: caseStudiesQuery, params: { today } })
  const caseStudies = result as CaseStudyType[]

  return (
    <div className="space-y-24 sm:space-y-32 md:space-y-48">

      <div className="space-y-16">
        <H2>Case studies</H2>
        <p className="text-center text-[red] max-w-[500px] mx-auto">These case studies are more than 4 years old. More recent case studies are coming soon.</p>
      </div>
      <Grid threeCols>
        {caseStudies.map(caseStudy => (
          <CaseStudyCard
            key={caseStudy.title}
            title={caseStudy.title!}
            subtitle={caseStudy.client}
            thumbnail={caseStudy.thumbnailImage}
            href={`case-studies/${caseStudy.slug?.current!}`}
          />
        ))}
      </Grid>
    </div>
  )
}