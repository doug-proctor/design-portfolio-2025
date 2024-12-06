import { HomeIcon } from "@sanity/icons"
import { defineArrayMember, defineField, defineType } from "sanity"

import sideProjectType from "../objects/sideProject"
import strengthType from "../objects/strength"
import toolSetType from "../objects/toolSet"

export default defineType({
  name: "home",
  title: "Home Page",
  type: "document",
  icon: HomeIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "intro",
      title: "Intro",
      type: "string",
    }),
    defineField({
      name: "strengths",
      title: "Strengths",
      type: "array",
      of: [
        {
          name: "strength",
          title: "Strength",
          type: strengthType.name,
        }
      ],
    }),
    defineField({
      name: "toolkit",
      title: "Toolkit",
      type: "array",
      of: [
        {
          name: "toolSet",
          title: "Tool set",
          type: toolSetType.name,
        }
      ],
    }),
    defineField({
      name: "sideProjects",
      title: "Side projects",
      type: "array",
      of: [
        {
          name: "sideProject",
          title: "Side Project",
          type: sideProjectType.name,
        }
      ],
    }),
    // defineField({
    //   name: "picture",
    //   title: "Picture",
    //   type: "image",
    //   fields: [
    //     {
    //       name: "alt",
    //       type: "string",
    //       title: "Alternative text",
    //       description: "Important for SEO and accessibility.",
    //       validation: (rule) => {
    //         return rule.custom((alt, context) => {
    //           if ((context.document?.picture as any)?.asset?._ref && !alt) {
    //             return "Required"
    //           }
    //           return true
    //         })
    //       },
    //     },
    //   ],
    //   options: {
    //     hotspot: true,
    //     aiAssist: {
    //       imageDescriptionField: "alt",
    //     },
    //   },
    //   validation: (rule) => rule.required(),
    // }),
  ],
  preview: {
    prepare() {
      return {
        title: "Home Page",
      }
    },
  },
})
