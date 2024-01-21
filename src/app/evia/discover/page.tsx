import { FC } from "react"

import questions from "@/mock/discovery.json"
import { QuestionDiscovery } from "./QuestionDiscovery"

const EviaDiscover: FC = () => {
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
      <h1 style={{ textAlign: "center" }}>Scopri le domande più cercate</h1>
      {questions.map((question, index) => (
        <QuestionDiscovery key={index} conversation={question} />
      ))}
    </div>
  )
}

export default EviaDiscover
