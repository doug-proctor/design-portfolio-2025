import React from "react"
import Image from "next/image"
import me from "@/app/me.png"

function Avatar() {
  return <Image src={me} alt="profile photo of Doug Proctor" width={200} height={200} className="mx-auto" />
}

export default function Component({ title } : { title: string }) {
  return (
    <header className="space-y-24 text-center">
      <Avatar />
      <div className="space-y-8">
        <h1 className="font-bold text-28 md:text-32 lg:text-40">{title}</h1>
        <h2 className="text-24 font-medium text-foreground-secondary">
          <span className="text-[white] font-bold px-4" style={{
            "background": "linear-gradient(45deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)"
          }}>Lead Product Designer</span>
        </h2>
      </div>
    </header>
  )
}