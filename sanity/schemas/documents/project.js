import { format } from "date-fns"

export default {
  name: "sampleProject",
  title: "Sample project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      }
    },
    {
      name: "client",
      title: "Client",
      type: "string"
    },
    {
      name: "previewImage",
      title: "Preview image",
      type: "image"
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime"
    },
    {
      name: "keyValues",
      title: "Key / values",
      type: "array",
      of: [{type: "keyValue"}]
    },
    {
      name: "body",
      title: "Body",
      type: "projectPortableText"
    }
  ],
  preview: {
    select: {
      title: "title",
      publishedAt: "publishedAt",
      slug: "slug",
    },
    prepare({title = "No title", publishedAt, slug = {}}) {
      const dateSegment = format(publishedAt, "YYYY/MM")
      const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        subtitle: publishedAt ? path : "Missing publishing date"
      }
    }
  }
}