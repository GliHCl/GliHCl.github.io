"use client"
import Link from "next/link"
import { FC, useEffect, useState } from "react"
import { IoChevronBack, IoChevronForward } from "react-icons/io5"
import { Divider } from "./Divider"
import { Conversations } from "@/app/evia/conversation/page"
import { getConversations } from "@/utils/storage"

export const NavBar: FC = () => {
  const [open, setOpen] = useState(true)
  const [convos, setConvos] = useState<Conversations>([])

  useEffect(() => {
    // Update conversations on storage event
    setConvos(getConversations())
    const listener = () => {
      console.log("storage event! updating convos in navbar")
      setConvos(getConversations())
    }
    window.addEventListener("storage", listener)
    return () => window.removeEventListener("storage", listener)
  }, [])

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "stretch",
        alignItems: "stretch",
        flexShrink: 0,
        maxWidth: 350,
        backgroundColor: "rgba(255,255,255,0.1)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: open ? "flex" : "none",
          flexDirection: "column",
          gap: 10,
          padding: 16,
          overflow: "hidden",
          maxWidth: 310,
          boxSizing: "border-box",
        }}
      >
        <Link style={{ color: "white", textDecoration: "none" }} href={"/evia"}>
          <h1 style={{ fontSize: 32 }}>eVia</h1>
        </Link>
        <Link
          style={{
            color: "white",
            padding: 12,
            alignSelf: "center",
            borderRadius: 12,
            backgroundColor: "#008edc",
          }}
          href={"/evia/feedback"}
        >
          Raccontaci la tua esperienza
        </Link>
        <h3 style={{ fontSize: 18 }}>Conversazioni precedenti:</h3>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
          }}
        >
          <Divider title="Ieri" />
          {convos.map((c, i) => (
            <Link
              key={i}
              style={{
                fontSize: 16,
                color: "white",
                textDecoration: "none",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                cursor: "pointer",
              }}
              href={`/evia/conversation?id=${c.id}`}
            >
              {c.messages[0].question}
            </Link>
          ))}
        </div>
      </div>
      <div
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          onClick={() => setOpen(!open)}
          style={{
            cursor: "pointer",
            border: "none",
            outline: "none",
            margin: 0,
            height: 60,
            color: "white",
            backgroundColor: "transparent",
          }}
        >
          {open ? (
            <IoChevronBack style={{ height: "100%", width: 40 }} />
          ) : (
            <IoChevronForward style={{ height: "100%", width: 40 }} />
          )}
        </button>
      </div>
    </section>
  )
}
