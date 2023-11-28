import { FC } from "react"

export const Header: FC = () => {
  return (
    <header
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        position: "sticky",
        top: 0,
        backgroundColor: "rgba(100, 100, 100, 0.1)",
        padding: "16px 0",
        borderBottom: "1px solid #fffa",
        margin: "0 0 16px 0",
      }}
    >
      <h1
        style={{
          fontSize: "4em",
          fontWeight: 700,
          margin: 0,
        }}
      >
        Gli HCl
      </h1>
      <span style={{ fontSize: "0.9rem" }}>Non è una i, è una L minuscola</span>
    </header>
  )
}
