import Image from "next/image"
import { FC } from "react"
import Link from "next/link"
import { Conversation } from "@/app/evia/conversation/page"

export interface QuestionProps {
  conversation: Omit<Conversation, "date">
}

export const QuestionHomePreview: FC<QuestionProps> = props => {
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
      href={`/evia/conversation?id=${props.conversation.id}`}
    >
      {image && (
        <Image
          style={{ objectFit: "cover" }}
          width={200}
          height={88}
          src={image}
          alt="img"
        />
      )}
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
        <h3>{title}</h3>
        <p
          style={{
            textOverflow: "ellipsis",
            overflow: "hidden",
          }}
        >
          {body}
        </p>
      </div>
    </Link>
  )
}
