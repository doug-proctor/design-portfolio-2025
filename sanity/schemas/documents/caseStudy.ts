import { DocumentTextIcon } from "@sanity/icons"
import { format, parseISO } from "date-fns"
import { defineField, defineType } from "sanity"

/**
 * This file is the schema definition for a post.
 *
 * Here you'll be able to edit the different fields that appear when you
 * create or edit a post in the studio.
 *
 * Here you can see the different schema types that are available:

 https://www.sanity.io/docs/schema-types

 */

export default defineType({
  name: "caseStudy",
  title: "Case Study",
  icon: DocumentTextIcon,
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "client",
      title: "Client",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "keyValues",
      title: "Key / Values",
      type: "array",
      of: [{type: "keyValue"}]
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "A slug is required for the post to show up in the preview",
      options: {
        source: "title",
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      // validation: (rule) => rule.required(),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "portableText",
      // type: "array",
      // of: [{ type: "block" }],
    }),
    defineField({
      name: "thumbnailImage",
      title: "Thumbnail Image",
      type: "image",
      options: {
        hotspot: true,
        aiAssist: {
          imageDescriptionField: "alt",
        },
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessibility.",
          validation: (rule) => {
            return rule.custom((alt, context) => {
              if ((context.document?.coverImage as any)?.asset?._ref && !alt) {
                return "Required"
              }
              return true
            })
          },
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publishedDate",
      title: "Published Date",
      type: "datetime",
      // initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      date: "date",
      media: "coverImage",
    },
    prepare({ title, media, date }) {
      const subtitles = [
        date && `on ${format(parseISO(date), "LLL d, yyyy")}`,
      ].filter(Boolean)

      return { title, media, subtitle: subtitles.join(" ") }
    },
  },
})