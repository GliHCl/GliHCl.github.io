"use client"
import { FC, useCallback, useState } from "react"
import { IoArrowForward } from "react-icons/io5"

export interface SearchBarProps {
  style?: React.CSSProperties
  onSearch?: (query: string) => void
}

export const SearchBar: FC<SearchBarProps> = ({ onSearch, style }) => {
  const [query, setQuery] = useState("")

  const callback = useCallback(() => {
    onSearch?.(query)
    setQuery("")
  }, [query, onSearch])

  return (
    <search
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 12,
        maxWidth: 1000,
        boxSizing: "border-box",
        padding: "0 32px",
        ...style,
      }}
    >
      <input
        type="text"
        placeholder="Fai una domanda..."
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
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyDown={e => {
          if (e.key === "Enter") callback()
        }}
      />
      <button
        style={{
          cursor: "pointer",
          border: "none",
          outline: "none",
          margin: 0,
          width: 40,
          height: 40,
          borderRadius: 12,
          display: "flex",
          justifyContent: "stretch",
          alignItems: "center",
          backgroundColor: "#008edc",
          color: "white",
          padding: 8,
        }}
        onClick={callback}
      >
        <IoArrowForward
          style={{
            flex: 1,
            height: "100%",
          }}
        />
      </button>
    </search>
  )
}
