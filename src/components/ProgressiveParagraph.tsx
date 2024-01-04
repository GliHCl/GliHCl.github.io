"use client"
import { FC, useEffect, useState } from "react"

export interface ProgressiveParagraphProps {
  text: string
  speed?: number
  style?: React.CSSProperties
  deactivate?: boolean
}

export const ProgressiveParagraph: FC<ProgressiveParagraphProps> = ({
  text,
  speed = 10,
  style,
  deactivate = false,
}) => {
  const [displayedText, setDisplayedText] = useState(deactivate ? text : "")
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(0)
  }, [text, deactivate])

  useEffect(() => {
    if (deactivate || index > text.length) {
      setDisplayedText(text)
      return
    }

    const words = text.split("")
    const timer = setTimeout(() => {
      setDisplayedText(words.slice(0, index).join(""))
      setIndex(index + 1)
    }, speed)

    return () => clearTimeout(timer)
  }, [text, index, speed, deactivate])

  return <p style={{ ...style }}>{displayedText}</p>
}
