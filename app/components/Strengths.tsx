import React from "react"
import { sanityFetch } from "@/sanity/lib/fetch"
import { strengthsQuery } from "@/sanity/lib/queries"
import { Strength as StrengthType } from "@/sanity.types"
import Card from "@/app/components/Card"
import Grid from "@/app/components/Grid"
import H2 from "@/app/components/H2"

export default async function Component() {
  const result = await sanityFetch({ query: strengthsQuery })
  const strengths = result[0].strengths as StrengthType[]

  return (
    <div className="space-y-24 sm:space-y-32 md:space-y-48">
      <H2>My key strengths</H2>
      <Grid>
        {strengths.map((strength: StrengthType) => (
          <Card
            hasCenteredHeader
            key={strength.title}
            title={strength.title}
            icon={strength.iconSvg}
            body={strength.description}
          />
        ))}
      </Grid>
    </div>
  )
}