import { FC } from "react"
import { IoArrowForward } from "react-icons/io5"

export const SearchBar: FC = () => {
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
