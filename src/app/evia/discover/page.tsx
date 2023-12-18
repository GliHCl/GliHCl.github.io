import { FC } from "react"

import questions from "@/mock/questions.json"
import { QuestionDiscovery } from "@/components/evia/QuestionDiscovery"

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
      <h1>Scopri le domande più cercate</h1>
      {questions.map((question, index) => (
        <QuestionDiscovery
          key={index}
          title={question.title}
          body={question.body}
        />
      ))}
    </div>
  )
}

export default EviaDiscover
