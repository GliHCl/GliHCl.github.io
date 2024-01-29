import { FC } from "react"
import { inherits } from "util"

export const Footer: FC = () => {
  return (
    <footer
      style={{
        fontSize: "0.8rem",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        position: "sticky",
        bottom: 0,
        backgroundColor: "rgba(100, 100, 100, 0.1)",
        padding: "16px 0",
        color: "#fff8",
      }}
    >
      <span>
        &copy; 2024 -{" "}
        <a style={{ color: "inherit" }} href="https://glihcl.it">
          Gli HCl
        </a>
      </span>
      <span>All rights reserved</span>
    </footer>
  )
}
