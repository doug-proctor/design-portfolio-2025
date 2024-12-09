import { sanityFetch } from "@/sanity/lib/fetch"
import { homeQuery } from "@/sanity/lib/queries"
import HorizontalRule from "@/app/components/HorizontalRule"
import SideProjects from "@/app/components/SideProjects"
import CaseStudies from "@/app/components/CaseStudies"
import Strengths from "@/app/components/Strengths"
import Container from "@/app/components/Container"
import JumpLink from "@/app/components/JumpLink"
import Toolkit from "@/app/components/Toolkit"
import Header from "@/app/components/Header"
import Intro from "@/app/components/Intro"

export default async function Page() {
  const result = await sanityFetch({ query: homeQuery })
  const { title, intro } = result[0]

  return (
    <>
      <div className="px-24 py-48 sm:py-80 md:py-96 lg:py-112 space-y-32 bg-[url('bg.png')] border-b border-foreground-tertiary mb-48 sm:mb-80 md:mb-96 lg:mb-112">
        <div className="space-y-16">
          <Header title={title!}/>
          <Intro content={intro!}/>
        </div>
        <JumpLink targetId="#case-studies">Jump to case studies</JumpLink>
      </div>
      <Container>
        <div className="px-24 pb-128 space-y-48 sm:space-y-80 md:space-y-96 lg:space-y-112">
          <Strengths/>
          <HorizontalRule />
          <Toolkit/>
          <div id="case-studies">
            <HorizontalRule />
          </div>
          <CaseStudies/>
          <HorizontalRule />
          <SideProjects/>
        </div>
      </Container>
    </>
  )
}