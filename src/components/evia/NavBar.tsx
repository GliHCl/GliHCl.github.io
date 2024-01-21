"use client"
import Link from "next/link"
import { FC, useEffect, useState } from "react"
import { IoChevronBack, IoChevronForward } from "react-icons/io5"
import { Divider } from "./Divider"
import { Conversations } from "@/app/evia/conversation/page"
import { getConversations } from "@/utils/storage"

import styles from "./NavBar.module.scss"

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
        flexDirection: "column",
        justifyContent: "stretch",
        alignItems: "stretch",
        flexShrink: 0,
        backgroundColor: "var(--color-secondary)",
        overflow: "hidden",
      }}
    >
      <Link
        className={styles["home-logo"]}
        style={
          open
            ? {}
            : {
                borderRadius: "100px",
                border: "1px solid var(--color-background)",
                lineHeight: "40px",
                width: 48,
                height: 48,
                color: "var(--color-background)",
                backgroundColor: "var(--color-accent)",
              }
        }
        href={"/evia"}
      >
        {open ? "eVia" : "e"}
      </Link>
      <div
        style={{
          flex: "1 0 auto",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "stretch",
          maxWidth: 350,
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
          <Link
            style={{
              color: "black",
              padding: 12,
              alignSelf: "center",
              borderRadius: 12,
              backgroundColor: "var(--color-accent)",
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
            {convos.length === 0 ? (
              <span
                style={{
                  color: "white",
                  opacity: 0.8,
                  fontSize: "0.9em",
                  textAlign: "center",
                  alignSelf: "center",
                  margin: 12,
                }}
              >
                Nessuna conversazione recente
              </span>
            ) : (
              <>
                <Divider title="Oggi" />
                {convos.map((c, i) => (
                  <Link
                    key={i}
                    className={styles["history-element"]}
                    href={`/evia/conversation?id=${c.id}`}
                  >
                    {c.messages[0].question}
                  </Link>
                ))}
              </>
            )}
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
      </div>
    </section>
  )
}
