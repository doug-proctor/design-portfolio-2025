import React from "react"
import H2 from "@/app/components/H2"

export default function Component({ email, linkedIn } : { email: string, linkedIn: string }) {
  return (
    <footer className="text-center space-y-48">
      <H2>Let’s make something!</H2>
      <div>Message me on <strong><a href={linkedIn}>LinkedIn</a></strong>, or drop me an email at <strong>{email}</strong></div>
    </footer>
  )
}