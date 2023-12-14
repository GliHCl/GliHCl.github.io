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
        flex: "1 0 auto",
        width: "100%",
      }}
    >
      <NavBar />
      <div
        style={{
          flex: "1 0 auto",
        }}
      >
        {children}
      </div>
    </div>
  )
}
