import { FC, useEffect, useState } from "react"

export interface ProgressiveParagraphProps {
  text: string
  speed?: number
  style?: React.CSSProperties
}

export const ProgressiveParagraph: FC<ProgressiveParagraphProps> = ({
  text,
  speed = 50,
  style,
}) => {
  const [displayedText, setDisplayedText] = useState("")
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const words = text.split(" ")
    const timer = setTimeout(() => {
      if (index > words.length) {
        clearTimeout(timer)
        return
      }

      setDisplayedText(words.slice(0, index).join(" "))
      setIndex(index + 1)
    }, speed)

    return () => clearTimeout(timer)
  }, [text, index, speed])

  return <p style={{ ...style }}>{displayedText}</p>
}
