import me from "@/app/me.png"
import Image from "next/image"

export default function Avatar({ small } : { small?: Boolean }) {
  const size = small ? 60 : 200

  return <Image src={me} alt="profile photo of Doug Proctor" width={size} height={size} className="mx-auto" />
}