import { QuestionHomePreview } from "@/components/evia/QuestionHomePreview"
import { SearchBar } from "@/components/evia/SearchBar"
import Link from "next/link"
import { FC } from "react"
import { IoArrowForward } from "react-icons/io5"

const EviaHome: FC = () => {
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
        gap: 16,
      }}
    >
      <h1 style={{ fontSize: 70 }}>eVia</h1>
      <SearchBar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 16,
        }}
      >
        <QuestionHomePreview
          title="Come posso accedere al progetto Erasmus+?"
          body="Per poter partecipare al progetto Erasmus+ occorre possedere requisiti precisi; per prima cosa è necessar..."
        />
        <QuestionHomePreview
          title="Quanto costa un’esperienza Erasmus?"
          body="Una volta selezionati per il progetto Erasmus, allo studente è garantita una borsa di mobilità, con un importo mensile che varia a seconda d..."
        />
        <QuestionHomePreview
          title="Quali esami posso scegliere?"
          body="È possibile richiedere il riconoscimento di esperienze adeguatamente autorizzate (prima della partenza) che siano convalidate, restando il vincolo che nel corso..."
        />
        <Link
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "white",
            maxWidth: 80,
            fontSize: 16,
            gap: 8,
          }}
          href={"#"}
        >
          <IoArrowForward
            style={{
              backgroundColor: "#008edc",
              width: 80,
              height: 80,
              borderRadius: "50%",
            }}
          />
          <b>Scopri le domande frequenti</b>
        </Link>
      </div>
    </div>
  )
}

export default EviaHome
