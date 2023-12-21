import { FC } from "react"

export interface ModalProps {
  visible: boolean
  onClose?: () => void
  children?: React.ReactNode
}

export const Modal: FC<ModalProps> = props => {
  return (
    <div
      style={{
        display: props.visible ? "flex" : "none",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        zIndex: 100,
        backgroundColor: "rgba(200,200,200,0.2)",
      }}
      onClick={() => props.onClose?.()}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          backgroundColor: "#000",
          borderRadius: 12,
          padding: 12,
          gap: 12,
          width: "100%",
          maxWidth: 800,
          maxHeight: "100%",
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 2px 12px 4px rgba(0,0,0,0.5)",
        }}
      >
        {props.children}
      </div>
    </div>
  )
}
