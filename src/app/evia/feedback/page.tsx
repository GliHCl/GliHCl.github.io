"use client"
import { FC, useState } from "react"
import { CategoryButton } from "./CategoryButton"
import { Modal } from "@/components/Modal"
import Link from "next/link"

const EviaFeedback: FC = () => {
  const [visible, setVisible] = useState(false)

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
      <h1>Raccontaci la tua esperienza</h1>
      <p>
        Le informazioni che fornirai verranno utilizzate per migliorare il
        nostro servizio ed aiutare ulteriormente gli studenti in difficoltà.
      </p>
      <h3>Seleziona gli argomenti principali</h3>
      <div
        style={{
          display: "flex",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        <CategoryButton label="Scelta dei corsi" />
        <CategoryButton label="Modulistica pre-partenza" />
        <CategoryButton label="Esperienza completa" />
        <CategoryButton label="Alloggi" />
        <CategoryButton label="Scelta università" />
      </div>
      <h3>Racconta liberamente</h3>
      <textarea
        style={{
          borderRadius: 12,
          padding: 12,
          fontSize: "0.9em",
          backgroundColor: "rgba(255,255,255,0.1)",
          border: "none",
          color: "white",
          resize: "vertical",
          minHeight: 200,
        }}
        placeholder="Scrivi qui..."
      />
      <button
        style={{
          backgroundColor: "#008edc",
          alignSelf: "flex-end",
          border: "none",
          borderRadius: 12,
          fontSize: "1em",
          padding: "12px 24px",
          gap: 12,
          float: "right",
          alignItems: "stretch",
          color: "white",
          textDecoration: "none",
          cursor: "pointer",
        }}
        onClick={() => {
          setVisible(true)
        }}
      >
        Condividi
      </button>

      {/* MODALE PER FEEDBACK */}
      <Modal visible={visible} onClose={() => setVisible(false)}>
        <h1>Grazie per il tuo aiuto!</h1>
        <p>
          Le informazioni che hai fornito saranno utili a tutti gli studenti che
          cercheranno informazioni di quella categoria. I dati forniti verranno
          trattati rispettando la politica sulla privacy.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "flex-end" }}>
          <Link
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              alignSelf: "flex-end",
              border: "none",
              borderRadius: 12,
              fontSize: "1em",
              padding: "8px 12px",
              gap: 12,
              float: "right",
              alignItems: "stretch",
              color: "white",
              textDecoration: "none",
              cursor: "pointer",
            }}
            href={"/evia"}
          >
            Home
          </Link>
          <button
            style={{
              backgroundColor: "#008edc",
              alignSelf: "flex-end",
              border: "none",
              borderRadius: 12,
              fontSize: "1em",
              padding: "8px 12px",
              gap: 12,
              float: "right",
              alignItems: "stretch",
              color: "white",
              textDecoration: "none",
              cursor: "pointer",
            }}
            onClick={() => setVisible(false)}
          >
            Condividi ancora
          </button>
        </div>
      </Modal>
    </div>
  )
}

export default EviaFeedback
