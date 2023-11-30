import Image from "next/image"
import Link from "next/link"
import { FC } from "react"
import pageStyles from "@/app/page.module.scss"

export interface MemberProps {
  name: string
  image?: string
  tgHandle?: string
}

export const Member: FC<MemberProps> = ({ name, image, tgHandle }) => {
  return (
    <div
      className={pageStyles.card}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        maxWidth: 300,
        margin: "16px 32px",
        padding: "16px 0",
        borderRadius: 16,
      }}
    >
      <Image
        src={image || "/placeholder.jpg"}
        width={80}
        height={80}
        alt={name + " profile picture"}
        style={{
          borderRadius: 8,
          objectFit: "cover",
          objectPosition: "center",
          margin: "0 0 16px 0",
        }}
      />
      <span style={{ margin: 0, textAlign: "center" }}>{name}</span>
      {tgHandle && (
        <Link
          href={`https://t.me/${tgHandle}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          @{tgHandle}
        </Link>
      )}
    </div>
  )
}
