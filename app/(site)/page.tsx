import { sanityFetch } from "@/sanity/lib/fetch"
import { homeQuery } from "@/sanity/lib/queries"

import HorizontalRule from "@/app/components/HorizontalRule"
import SideProjects from "@/app/components/SideProjects"
import CaseStudies from "@/app/components/CaseStudies"
import Strengths from "@/app/components/Strengths"
import JumpLink from "@/app/components/JumpLink"
import Toolkit from "@/app/components/Toolkit"
import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import Intro from "@/app/components/Intro"

export default async function Page() {
  const result = await sanityFetch({ query: homeQuery })
  const content = {
    intro: result[0].intro,
    title: result[0].title,
  }

  return (
    <div className="py-128 space-y-48 sm:space-y-80 md:space-y-96 lg:space-y-112">

      {/* Header group */}
      <div className="space-y-32">
        <div className="space-y-16">
          <Header title={content.title!}/>
          <Intro content={content.intro!}/>
        </div>
        <JumpLink targetId="#case-studies">Jump to case studies</JumpLink>
      </div>

      <HorizontalRule />

      <Strengths/>

      <HorizontalRule />

      <Toolkit/>

      <div id="case-studies">
        <HorizontalRule />
      </div>

      <CaseStudies/>

      <HorizontalRule />

      <SideProjects/>

      <HorizontalRule />

      <Footer/>
    </div>
  )
}