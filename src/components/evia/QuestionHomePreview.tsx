import { title } from "process"
import Image from "next/image"
import { FC } from "react"
import Link from "next/link"

interface QuestionHomePreviewProps {
  title: string
  body: string
  image?: string
}

export const QuestionHomePreview: FC<QuestionHomePreviewProps> = props => {
  return (
    <Link
      style={{
        width: 200,
        height: 300,
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        wordWrap: "break-word",
        textOverflow: "ellipsis",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        color: "white",
        textDecoration: "none",
        cursor: "pointer",
      }}
      href={"#"}
    >
      <Image
        style={{ objectFit: "cover" }}
        width={200}
        height={88}
        src={props.image ?? "/placeholder.jpg"}
        alt={title}
      />
      <div
        style={{
          flex: 1,
          padding: 8,
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <h3>{props.title}</h3>
        <p
          style={{
            textOverflow: "ellipsis",
            overflow: "hidden",
          }}
        >
          {props.body}
        </p>
      </div>
    </Link>
  )
}
