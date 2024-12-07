import "../globals.css"

import { type Settings } from "@/sanity.types"
import ReactGA from "react-ga4"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Suspense } from "react"

import DevTool from "@/app/components/DevTool"

import { sanityFetch } from "@/sanity/lib/fetch"
import { settingsQuery } from "@/sanity/lib/queries"
import { resolveOpenGraphImage } from "@/sanity/lib/utils"
import HorizontalRule from "@/app/components/HorizontalRule"
import Footer from "@/app/components/Footer"

export async function generateMetadata(): Promise<Metadata> {
  const settings = await sanityFetch({
    query: settingsQuery,
    // Metadata should never contain stega
    stega: false,
  }) as Settings

  const title = settings?.tab_title || ""
  const description = settings?.meta_description || ""

  const ogImage = resolveOpenGraphImage(settings?.ogImage)
  let metadataBase: URL | undefined = undefined
  try {
    // @ts-ignore
    metadataBase = settings?.ogImage?.metadataBase
    // @ts-ignore
      ? new URL(settings.ogImage.metadataBase)
      : undefined
  } catch {
    // ignore
  }
  return {
    metadataBase,
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    // description: toPlainText(description),
    description,
    openGraph: {
      images: ogImage ? [ogImage] : [],
    },
  }
}

const poppins = Poppins({
  variable: "--font-poppins",
  weight: [
    "400", // normal
    "500", // medium
    "800"  // bold
  ],
  subsets: ["latin"],
  display: "swap",
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // const data = await sanityFetch({ query: settingsQuery })
  // ReactGA.initialize(settings.ga_tracking_id!)

  return (
    <html lang="en" className={`${poppins.variable} text-16 text-foreground`}>
      <body className="px-24 max-w-[1100px] mx-auto">
        <Suspense>
          <main>{children}</main>
          {/* The space classnames on the next line should match those on (site)/page.tsx */}
          <div className="pb-128 space-y-48 sm:space-y-80 md:space-y-96 lg:space-y-112">
            <HorizontalRule/>
            <Footer/>
          </div>
        </Suspense>
        <SpeedInsights/>
        {process.env.NODE_ENV === "development" && <DevTool />}
      </body>
    </html>
  )
}
