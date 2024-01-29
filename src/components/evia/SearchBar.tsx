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
    if (!query) return
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
          backgroundColor: "var(--color-primary)",
        }}
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyDown={e => {
          if (e.key === "Enter") callback()
        }}
      />
      <button
        style={{
          cursor: query ? "pointer" : "default",
          border: "none",
          outline: "none",
          margin: 0,
          width: 40,
          height: 40,
          borderRadius: 12,
          display: "flex",
          justifyContent: "stretch",
          alignItems: "center",
          backgroundColor: "var(--color-accent)",
          color: "var(--color-background)",
          padding: 8,
          opacity: query ? 1 : 0.5,
          transition: "opacity 0.2s ease-in-out",
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
