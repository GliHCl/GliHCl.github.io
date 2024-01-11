import { NavBar } from "@/components/evia/NavBar"

export default function EviaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "100vw",
        flex: "1 1 auto",
        overflow: "hidden",
      }}
    >
      <NavBar />
      <div
        style={{
          flex: "1 1 auto",
          overflowX: "hidden",
          overflowY: "auto",
          padding: "0 12px",
          boxSizing: "border-box",
        }}
      >
        {children}
      </div>
    </div>
  )
}
