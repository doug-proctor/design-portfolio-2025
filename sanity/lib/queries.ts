import { defineQuery } from "next-sanity"

export const homeQuery = defineQuery(`*[_type == "home"]`)
export const settingsQuery = defineQuery(`*[_type in ["settings"]][0]`)
export const projectsQuery = defineQuery(`*[_type == "sampleProject"]{_id, title}`)
export const strengthsQuery = defineQuery(`*[_type == "home"]{strengths}`)
export const toolkitQuery = defineQuery(`*[_type == "home"]{toolkit}`)
export const sideProjectsQuery = defineQuery(`*[_type == "home"]{sideProjects}`)
export const caseStudiesQuery = defineQuery(`*[_type == "caseStudy" && slug.current != null && publishedDate <= $today]`)
export const caseStudyQuery = defineQuery(`*[_type == "caseStudy" && slug.current == $slug][0]`)
