import { FC } from "react"
import { QuestionProps } from "@/components/evia/QuestionHomePreview"
import Image from "next/image"
import Link from "next/link"

export const QuestionDiscovery: FC<QuestionProps> = props => {
  const title = props.conversation.messages[0].question
  const body = props.conversation.messages[0].answer
  let image = ""

  for (const messages of props.conversation.messages) {
    if (messages.sources && messages.sources[0].image) {
      image = messages.sources[0].image
      break
    }
  }

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
      href={`/evia/conversation?id=${props.conversation.id}`}
    >
      {image && (
        <Image
          style={{ objectFit: "cover", borderRadius: 8 }}
          width={136}
          height={136}
          src={image}
          alt="img"
        />
      )}
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
        <h3>{title}</h3>
        <p style={{ overflow: "hidden" }}>{body}</p>
      </div>
    </Link>
  )
}
