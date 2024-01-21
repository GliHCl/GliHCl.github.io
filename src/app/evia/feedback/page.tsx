"use client"
import { FC, useState } from "react"
import { CategoryButton } from "./CategoryButton"
import { Modal } from "@/components/Modal"
import Link from "next/link"

const EviaFeedback: FC = () => {
  const [confirmModal, setConfirmModal] = useState(false)
  const [afterModal, setAfterModal] = useState(false)

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
          backgroundColor: "var(--color-primary)",
          border: "none",
          color: "white",
          resize: "vertical",
          minHeight: 200,
        }}
        placeholder="Scrivi qui..."
      />
      <button
        style={{
          backgroundColor: "var(--color-accent)",
          alignSelf: "flex-end",
          border: "none",
          borderRadius: 12,
          fontSize: "1em",
          padding: "12px 24px",
          gap: 12,
          float: "right",
          alignItems: "stretch",
          color: "black",
          textDecoration: "none",
          cursor: "pointer",
        }}
        onClick={() => {
          setConfirmModal(true)
        }}
      >
        Condividi
      </button>

      {/* MODALE PER FEEDBACK */}
      <Modal visible={confirmModal} onClose={() => setConfirmModal(false)}>
        <h1>Grazie per il tuo aiuto!</h1>
        <p>
          Confermi di voler condividere queste informazioni con gli altri
          utenti? <br />I dati forniti verranno trattati rispettando la politica
          sulla privacy.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "flex-end" }}>
          <button
            style={{
              backgroundColor: "var(--color-primary)",
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
            onClick={() => setConfirmModal(false)}
          >
            Annulla
          </button>
          <button
            style={{
              backgroundColor: "var(--color-accent)",
              alignSelf: "flex-end",
              border: "none",
              borderRadius: 12,
              fontSize: "1em",
              padding: "8px 12px",
              gap: 12,
              float: "right",
              alignItems: "stretch",
              color: "black",
              textDecoration: "none",
              cursor: "pointer",
            }}
            onClick={() => {
              setConfirmModal(false)
              setAfterModal(true)
            }}
          >
            Conferma
          </button>
        </div>
      </Modal>
      <Modal visible={afterModal} onClose={() => setAfterModal(false)}>
        <h1>Grazie per il tuo aiuto!</h1>
        <p>
          Le informazioni che hai fornito saranno utili a tutti gli studenti che
          farnno domande riguardo queste categorie.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "flex-end" }}>
          <button
            style={{
              backgroundColor: "var(--color-primary)",
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
            onClick={() => {
              // reload the page
              window.location.reload()
            }}
          >
            Condividi ancora
          </button>
          <Link
            style={{
              backgroundColor: "var(--color-accent)",
              alignSelf: "flex-end",
              border: "none",
              borderRadius: 12,
              fontSize: "1em",
              padding: "8px 12px",
              gap: 12,
              float: "right",
              alignItems: "stretch",
              color: "black",
              textDecoration: "none",
              cursor: "pointer",
            }}
            href={"/evia"}
          >
            Torna a Home
          </Link>
        </div>
      </Modal>
    </div>
  )
}

export default EviaFeedback
