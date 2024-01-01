import { FC } from "react"

export const Divider: FC<{ title: string }> = ({ title }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: 8,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          flex: "1 0 auto",
          height: 1,
          backgroundColor: "white",
          opacity: 0.8,
        }}
      />
      <span style={{ opacity: 0.8, fontSize: "0.9em" }}>{title}</span>
      <div
        style={{
          flex: "1 0 auto",
          height: 1,
          backgroundColor: "white",
        }}
      />
    </div>
  )
}
