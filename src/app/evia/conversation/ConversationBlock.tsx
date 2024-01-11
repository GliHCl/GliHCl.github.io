import { Modal } from "@/components/Modal"
import { ProgressiveParagraph } from "@/components/ProgressiveParagraph"
import Image from "next/image"
import Link from "next/link"
import { FC, useState } from "react"
import { IoCheckbox, IoReloadCircle, IoWarning } from "react-icons/io5"

export interface Source {
  url: string
  title: string
  image: string
}

export interface Message {
  question: string
  answer?: string
  sources: Array<Source>
  userExtract?: {
    date: string
    author: string
    body: string
  }
  last?: boolean
}

export const ConversationBlock: FC<Message> = props => {
  const [positiveFeedback, setPositiveFeedback] = useState(false)
  const [negativeFeedback, setNegativeFeedback] = useState(false)

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        gap: 12,
        margin: "12px 0px",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: 12,
          padding: 16,
        }}
      >
        <h3>{props.question}</h3>
        <ProgressiveParagraph
          text={props.answer ?? ""}
          deactivate={!props.last}
        />
        <div
          style={{
            alignSelf: "flex-end",
            float: "right",
            display: "flex",
            gap: 8,
          }}
        >
          <button
            style={{
              backgroundColor: "transparent",
              border: "none",
              outline: "none",
              cursor: "pointer",
            }}
            onClick={() => setPositiveFeedback(true)}
          >
            <IoCheckbox style={{ height: 20, width: 20 }} />
          </button>
          <button
            style={{
              backgroundColor: "transparent",
              border: "none",
              outline: "none",
              cursor: "pointer",
            }}
            onClick={() => setNegativeFeedback(true)}
          >
            <IoWarning style={{ height: 20, width: 20 }} />
          </button>
          <button
            style={{
              backgroundColor: "transparent",
              border: "none",
              outline: "none",
              cursor: "pointer",
            }}
          >
            <IoReloadCircle style={{ height: 20, width: 20 }} />
          </button>
        </div>
      </div>
      {props.sources.length > 0 && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          {props.sources.map((source, index) => (
            <Link
              key={index}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "stretch",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderRadius: 12,
                flexDirection: "column",
                overflow: "hidden",
                height: 120,
                width: 160,
                gap: 4,
                textDecoration: "none",
                color: "white",
              }}
            >
              <Image
                width={160}
                height={60}
                src={source.image}
                alt={source.title}
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
              <span
                style={{
                  display: "inline",
                  fontSize: "0.6em",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  width: "100%",
                }}
              >
                <span style={{ color: "#008edc", padding: "0px 4px" }}>{`[${
                  index + 1
                }] `}</span>
                {source.url}
              </span>
              <span style={{ fontSize: "1em", padding: "0 4px" }}>
                {source.title}
              </span>
            </Link>
          ))}
          {props.userExtract && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderRadius: 12,
                padding: 8,
                height: 120,
                overflow: "hidden",
                gap: 4,
                flex: 1,
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: "0.7em" }}>
                  L&apos;opinione degli altri utenti <br />
                  {new Date(props.userExtract.date).toLocaleDateString(
                    "it-IT",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </span>
                <span
                  style={{
                    fontSize: "1em",
                    fontWeight: "bold",
                    marginLeft: "auto",
                  }}
                >
                  di {props.userExtract.author}
                </span>
                <Image
                  width={24}
                  height={24}
                  src="/avatar.png"
                  alt="pfp"
                  style={{ borderRadius: "50%" }}
                />
              </div>
              <p style={{ fontSize: "0.9em" }}>
                <span
                  style={{ color: "rgb(0, 142, 220)", padding: "0px 4px;" }}
                >
                  {`[${props.sources.length + 1}] `}
                </span>
                {props.userExtract.body}
              </p>
            </div>
          )}
        </div>
      )}

      <Modal
        visible={positiveFeedback}
        onClose={() => setPositiveFeedback(false)}
      >
        <h3>Grazie per il tuo feedback!</h3>
        <p>
          Terremo conto della tua opinione. <br />
          Ci aiuterà a migliorare il nostro servizio.
        </p>
        <button
          style={{
            backgroundColor: "#008edc",
            border: "none",
            outline: "none",
            cursor: "pointer",
            borderRadius: 12,
            padding: 12,
            color: "white",
            alignSelf: "flex-end",
          }}
          onClick={() => setPositiveFeedback(false)}
        >
          Chiudi
        </button>
      </Modal>

      <Modal
        visible={negativeFeedback}
        onClose={() => setNegativeFeedback(false)}
      >
        <h3>Segnala un problema</h3>
        <p>Facci sapere come migliorare la tua risposta</p>
        <textarea
          style={{
            border: "none",
            outline: "none",
            margin: 0,
            flex: 1,
            height: 40,
            borderRadius: 12,
            padding: 12,
            fontSize: 16,
          }}
        />
        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "flex-end",
          }}
        >
          <button
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "none",
              outline: "none",
              cursor: "pointer",
              borderRadius: 12,
              padding: 12,
              color: "white",
            }}
            onClick={() => setNegativeFeedback(false)}
          >
            Annulla
          </button>
          <button
            style={{
              backgroundColor: "#008edc",
              border: "none",
              outline: "none",
              cursor: "pointer",
              borderRadius: 12,
              padding: 12,
              color: "white",
            }}
            onClick={() => setNegativeFeedback(false)}
          >
            Invia
          </button>
        </div>
      </Modal>
    </div>
  )
}
