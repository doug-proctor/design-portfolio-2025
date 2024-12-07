/**
 * This component uses Portable Text to render a post body.
 *
 * You can learn more about Portable Text on:
 * https://www.sanity.io/docs/block-content
 * https://github.com/portabletext/react-portabletext
 * https://portabletext.org/
 *
 */

import {
  PortableText,
  type PortableTextComponents,
  type PortableTextBlock,
} from "next-sanity"

import Scene from "@/app/components/Scene"

type Props = {
  className?: string;
  value: PortableTextBlock[];
}

export default function CustomPortableText({ className, value }: Props) {
  const components: PortableTextComponents = {
    block: {
      // h2: ({ children }) => (
      //   <h2 className="mb-2 text-sm font-semibold">{children}</h2>
      // ),
    },
    marks: {
      link: ({ children, value }) => {
        return (
          <a href={value?.href} rel="noreferrer noopener">
            {children}
          </a>
        )
      },
    },
    types: {
      scene: Scene,
    }
  }

  return (
    <div className={["prose", className].filter(Boolean).join(" ")}>
      <PortableText components={components} value={value} />
    </div>
  )
}
