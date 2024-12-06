import React from "react"
import { sanityFetch } from "@/sanity/lib/fetch"
import { toolkitQuery } from "@/sanity/lib/queries"
import { ToolSet as ToolSetType } from "@/sanity.types"
import H2 from "@/app/components/H2"
import List from "@/app/components/List"
import Card from "@/app/components/Card"
import Grid from "@/app/components/Grid"

export default async function Component() {
  const result = await sanityFetch({ query: toolkitQuery })
  const toolKit = result[0].toolkit as ToolSetType[]

  return (
    <div className="space-y-24 sm:space-y-32 md:space-y-48">
      <H2>What’s in my toolkit?</H2>
      <Grid threeCols>
        {toolKit.map((toolSet: ToolSetType) => (
          <Card
            hasBorder
            hasCenteredHeader
            key={toolSet.title}
            title={toolSet.title}
            subtitle={toolSet.subtitle}
            body={<List items={toolSet.list} />}
          />
        ))}
      </Grid>
    </div>
  )
}