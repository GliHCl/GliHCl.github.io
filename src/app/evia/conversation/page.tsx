"use client"
import { FC, useCallback, useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { ConversationBlock, Message, Source } from "./ConversationBlock"
import { SearchBar } from "@/components/evia/SearchBar"
import axios from "axios"
import { getConvoFromID, isIDFromDiscovery } from "@/utils/storage"
import discoveryConvos from "@/mock/discovery.json"

function getConvoFromDiscovery(id: string): Conversation {
  return {
    id,
    date: new Date().toISOString(),
    messages: [],
    ...discoveryConvos.find(q => q.id == id),
  }
}

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
  date: string
  messages: Array<Message>
}

export type Conversations = Array<Conversation>

const EviaConversation: FC = () => {
  const searchParams = useSearchParams()
  const query = decodeURIComponent(searchParams.get("q") ?? "")
  const id = searchParams.get("id")

  // if no id go to home
  if (!id) {
    window.location.href = "/evia"
  }

  const [conversation, setConversation] = useState<Conversation>(
    getConvoFromID(id ?? "")
  )
  useEffect(() => {
    if (id) {
      setConversation(
        isIDFromDiscovery(id) ? getConvoFromDiscovery(id) : getConvoFromID(id)
      )
    }
  }, [id])

  const [loading, setLoading] = useState(false)

  const converse = useCallback(
    async (payload: string) => {
      if (loading) return
      console.log("converse: ", payload)
      setLoading(true)
      // save the question in the conversation
      setConversation({
        ...conversation,
        messages: [
          ...conversation.messages,
          {
            question: payload,
            sources: [],
          },
        ],
      })

      // the actual API request
      // https://developer.voiceflow.com/reference/stateinteract-1
      const response = axios({
        method: "POST",
        baseURL: "https://general-runtime.voiceflow.com",
        url: `/state/user/${conversation.id}/interact`,
        headers: {
          Authorization: "VF.DM.65b3d5f8c6b83f0007d04529.WC8wuqKDSinFjuPZ",
        },
        data: { action: { type: "text", payload } },
      })
      const { data }: { data: Array<Trace> } = await response

      // filter all the traces to compose the text answer
      const answer = data
        .filter(m => m.type === "text")
        .reduce((acc, cur) => {
          if (cur.type !== "text") return acc
          return acc + " " + cur.payload.message
        }, "")

      //Try again if the answer is empty
      if (answer.length == 0) {
        console.log("Empty answer, retrying")
        converse(payload)
        return
      }

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
      const sources = sourcesURLs.map<Source>((url, index) => {
        const domain = url.replace(/(^\w+:|^)\/\//, "").replace(/\/.+$/, "")
        let image = "/fonte3.png"
        if (domain.includes("poli")) image = "/fonte1.png"
        if (domain.includes("erasmus")) image = "/fonte2.png"
        return {
          url,
          image,
          title: domain,
        }
      })

      const newConversation = {
        ...conversation,
        date: new Date().toISOString(), // update last modified
        messages: [
          ...conversation.messages,
          {
            question: payload,
            answer,
            sources,
          },
        ],
      }
      setConversation(newConversation)
      setLoading(false)
    },
    [conversation, loading]
  )

  useEffect(() => {
    if (!id) return
    if (conversation.messages.length === 0 && query) {
      console.log("no messages, conversing with query: ", query)
      converse(query)
    }
  }, [id, query, converse, conversation.messages.length])

  useEffect(() => {
    // save the conversation in the local storage
    if (isIDFromDiscovery(conversation.id)) return
    window.localStorage.setItem(
      `conversation-${conversation.id}`,
      JSON.stringify(conversation)
    )
    window.dispatchEvent(new StorageEvent("storage"))
  }, [conversation])

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
      {conversation.messages.map((message, index, arr) => (
        <ConversationBlock
          key={index}
          {...message}
          last={index == arr.length - 1}
        />
      ))}
      {!isIDFromDiscovery(conversation.id) && (
        <SearchBar
          style={{ alignSelf: "flex-end", padding: 0 }}
          onSearch={q => {
            console.log("new question: ", q)
            converse(q)
          }}
        />
      )}
    </div>
  )
}

export default EviaConversation
