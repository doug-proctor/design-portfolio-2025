import React from "react"
import { sanityFetch } from "@/sanity/lib/fetch"
import { sideProjectsQuery } from "@/sanity/lib/queries"
import { SideProject as SideProjectType } from "@/sanity.types"
import Card from "@/app/components/Card"
import Grid from "@/app/components/Grid"
import H2 from "@/app/components/H2"

export default async function Component() {
  const result = await sanityFetch({ query: sideProjectsQuery })
  const sideProjects = result[0].sideProjects as SideProjectType[]

  return (
    <div className="space-y-24 sm:space-y-32 md:space-y-48">
      <H2>Side projects</H2>
      <Grid threeCols>
        {sideProjects.map((sideProject: SideProjectType) => (
          <Card
            hasBorder
            hasCenteredHeader
            key={sideProject.title}
            icon={sideProject.icon}
            title={sideProject.title}
            body={sideProject.description}
            subtitle={sideProject.subtitle}
          />
        ))}
      </Grid>
    </div>
  )
}