"use client"
import { FC, useCallback, useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { ConversationBlock, Message, Source } from "./ConversationBlock"
import { SearchBar } from "@/components/evia/SearchBar"
import axios from "axios"

type Trace =
  | {
      type: "text"
      payload: {
        message: string
      }
    }
  | {
      type: "knowledgeBase"
      payload: {
        chunks: Array<{
          score: number
          documentData: {
            type: string
            url: string
          }
        }>
      }
    }

export interface Conversation {
  id: string
  messages: Array<Message>
}

const EviaConversation: FC = () => {
  const searchParams = useSearchParams()
  const id = searchParams.get("id")

  // if no id go to home
  if (!id) {
    window.location.href = "/evia"
  }

  const [conversation, setConversation] = useState<Conversation>({
    id: id ?? "",
    messages: [],
  })

  const converse = useCallback(
    async (payload: string) => {
      // the actual API request
      // https://developer.voiceflow.com/reference/stateinteract-1
      const response = axios({
        method: "POST",
        baseURL: "https://general-runtime.voiceflow.com",
        url: `/state/user/${conversation.id}/interact`,
        headers: {
          Authorization: "VF.DM.65567153b1cadb00077141bb.PeTnRFvgHOeWq3al",
        },
        data: { action: { type: "text", payload } },
      })
      const { data }: { data: Array<Trace> } = await response

      console.log("response: ", data)

      // filter all the traces to compose the text answer
      const answer = data
        .filter(m => m.type === "text")
        .reduce((acc, cur) => {
          if (cur.type !== "text") return acc
          return acc + " " + cur.payload.message
        }, "")

      // filter the sources to compose the sources list
      const sourcesURLs = data
        .filter(m => m.type === "knowledgeBase")
        .reduce<string[]>((acc, cur) => {
          if (cur.type !== "knowledgeBase") return acc
          return acc.concat(
            cur.payload.chunks.reduce<string[]>((acc, cur) => {
              if (cur.documentData.type !== "url") return acc
              return acc.concat(cur.documentData.url)
            }, [])
          )
        }, [])
        .slice(0, 3)

      // compose the sources list
      const sources = sourcesURLs.map<Source>((url, index) => ({
        url,
        image: "/placeholder.jpg",
        title: url.replace(/(^\w+:|^)\/\//, "").replace(/\/.+$/, ""),
      }))

      const newConversation = {
        ...conversation,
        messages: [
          ...conversation.messages.filter(m => m.question !== payload),
          {
            question: payload,
            answer,
            sources,
          },
        ],
      }
      setConversation(newConversation)
    },
    [conversation]
  )

  useEffect(() => {
    if (id) {
      const newConversation = JSON.parse(
        window.localStorage.getItem(`conversation-${id}`) ?? "null"
      )
      if (newConversation) setConversation(newConversation)
    }
  }, [id])

  return (
    <div
      style={{
        margin: "auto",
        padding: "12px 0px",
        width: "100%",
        maxWidth: 800,
        height: "100%",
        flex: 1,
        display: "flex",
        alignItems: "stretch",
        flexDirection: "column",
        gap: 16,
      }}
    >
      {conversation.messages.map((message, index) => (
        <ConversationBlock key={index} {...message} />
      ))}
      <SearchBar
        style={{ alignSelf: "flex-end", padding: 0 }}
        onSearch={query => {
          console.log("new question: ", query)
          const newConversation = {
            ...conversation,
            messages: [
              ...conversation.messages,
              {
                question: query,
                sources: [],
              },
            ],
          }
          setConversation(newConversation)
          converse(query)
        }}
      />
    </div>
  )
}

export default EviaConversation
