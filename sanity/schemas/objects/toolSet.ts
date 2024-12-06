import { HelpCircleIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"

export default defineType({
  name: "toolSet",
  title: "Tool set",
  // icon: HelpCircleIcon,
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "list",
      title: "List",
      type: "array",
      of: [{
        name: "tool",
        title: "Tool",
        type: "string",
      }],
    }),
  ],
})
