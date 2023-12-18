"use client"
import Link from "next/link"
import { FC, useState } from "react"
import { IoChevronBack, IoChevronForward } from "react-icons/io5"

export const NavBar: FC = () => {
  const [open, setOpen] = useState(true)

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
      }}
    >
      <div
        style={{
          display: open ? "flex" : "none",
          flexDirection: "column",
          gap: 10,
          padding: 16,
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
          href={"#"}
        >
          Raccontaci la tua esperienza
        </Link>
        <h3>Conversazioni precedenti:</h3>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
          }}
        >
          <span
            style={{
              textAlign: "center",
              opacity: 0.8,
              fontSize: "0.9em",
              margin: 16,
            }}
          >
            non hai ancora avuto nessuna conversazione
          </span>
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
