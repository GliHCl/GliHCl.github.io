"use client"

import { QuestionHomePreview } from "@/components/evia/QuestionHomePreview"
import { SearchBar } from "@/components/evia/SearchBar"
import Link from "next/link"
import { FC } from "react"
import { IoArrowForward } from "react-icons/io5"

import discoveryConvos from "@/mock/discovery.json"
import { useRouter } from "next/navigation"

const EviaHome: FC = () => {
  const router = useRouter()

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignSelf: "center",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 40,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "12px 24px",
          backgroundColor: "var(--color-accent)",
          color: "var(--color-background)",
          borderRadius: 12,
        }}
      >
        <h1 style={{ fontSize: 70 }}>eVia</h1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 12,
          width: "100%",
        }}
      >
        <p
          style={{
            fontSize: "1.2em",
            width: "70%",
            maxWidth: 700,
            textAlign: "center",
          }}
        >
          Fai qualsiasi domanda sulla mobilità internazionale e ricevi risposte
          generate dalle fonti ufficiali e dalle esperienze degli altri
          studenti.
        </p>
        <SearchBar
          onSearch={query => {
            // generate UUID
            let newID = Math.random().toString(36).substring(7)
            router.push(
              `/evia/conversation?id=${newID}&q=${encodeURIComponent(query)}`
            )
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
        }}
      >
        {discoveryConvos.slice(0, 3).map((conv, index) => (
          <QuestionHomePreview key={index} conversation={conv} />
        ))}
        <Link
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "white",
            textDecoration: "none",
            maxWidth: 90,
            fontSize: 16,
            gap: 8,
          }}
          href={"/evia/discover"}
        >
          <IoArrowForward
            style={{
              backgroundColor: "var(--color-accent)",
              width: 80,
              height: 80,
              borderRadius: "50%",
              color: "var(--color-background)",
            }}
          />
          <b>Scopri le domande più cercate</b>
        </Link>
      </div>
    </div>
  )
}

export default EviaHome
