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
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        zIndex: 100,
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
      onClick={() => props.onClose?.()}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          backgroundColor: "var(--color-secondary)",
          borderRadius: 12,
          padding: 12,
          gap: 12,
          width: "100%",
          maxWidth: 400,
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
