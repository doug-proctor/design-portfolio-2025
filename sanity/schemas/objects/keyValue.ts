import { defineType } from "sanity"

export default defineType({
  name: "keyValue",
  title: "Key / Value",
  type: "object",
  fields: [
    {
      title: "Key",
      name: "key",
      type: "string",
      // options: {
      //   isHighlighted: true
      // }
    }, {
      title: "Value",
      name: "value",
      type: "string",
      // options: {
      //   isHighlighted: true
      // }
    }
  ],
  // preview: {
  //   select: {
  //     imageUrl: 'asset.url',
  //     title: 'caption'
  //   }
  // }
})