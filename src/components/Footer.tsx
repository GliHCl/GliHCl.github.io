import { FC } from "react"

export const Footer: FC = () => {
  return (
    <footer
      style={{
        fontSize: "0.8rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        position: "sticky",
        bottom: 0,
        backgroundColor: "rgba(100, 100, 100, 0.1)",
        padding: "16px 0",
        margin: "16px 0 0 0",
        color: "#fff8",
      }}
    >
      <span>&copy; 2023 - Gli HCl</span>
      <span>all rights reserved</span>
    </footer>
  )
}
