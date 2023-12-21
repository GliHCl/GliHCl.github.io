import { FC } from "react"
import { QuestionProps } from "@/components/evia/QuestionHomePreview"
import Image from "next/image"
import Link from "next/link"

export const QuestionDiscovery: FC<QuestionProps> = props => {
  return (
    <Link
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderRadius: 12,
        height: 160,
        padding: 12,
        display: "flex",
        gap: 12,
        alignItems: "stretch",
        color: "white",
        textDecoration: "none",
        cursor: "pointer",
      }}
      href={"#"}
    >
      <Image
        width={136}
        height={136}
        src={props.image ?? "/placeholder.jpg"}
        alt={props.title}
      />
      <div
        style={{
          flex: 1,
          display: "flex",
          gap: 12,
          flexDirection: "column",
          justifyContent: "stretch",
          overflow: "hidden",
        }}
      >
        <h3>{props.title}</h3>
        <p style={{ overflow: "hidden" }}>{props.body}</p>
      </div>
    </Link>
  )
}
