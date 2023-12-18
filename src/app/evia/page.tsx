import { QuestionHomePreview } from "@/components/evia/QuestionHomePreview"
import { SearchBar } from "@/components/evia/SearchBar"
import Link from "next/link"
import { FC } from "react"
import { IoArrowForward } from "react-icons/io5"

import questions from "@/mock/questions.json"

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
        {questions.slice(0, 3).map((question, index) => (
          <QuestionHomePreview
            key={index}
            title={question.title}
            body={question.body}
          />
        ))}
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
          href={"/evia/discover"}
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
