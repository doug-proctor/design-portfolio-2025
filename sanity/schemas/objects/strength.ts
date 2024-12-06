import { HelpCircleIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"

export default defineType({
  name: "strength",
  title: "Strength",
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
      name: "description",
      title: "Description",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "iconSvg",
      title: "Icon (SVG)",
      description: "48x48 SVG from Lucide",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
})
