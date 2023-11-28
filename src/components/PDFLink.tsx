import Link from "next/link"
import { FC } from "react"
import { IoDocument } from "react-icons/io5"
import pageStyle from "@/app/page.module.scss"

export const PDFLink: FC<{ filename: string }> = ({ filename }) => {
  return (
    <Link href={`/consegne/${filename}`}>
      <div
        className={pageStyle.card}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          margin: 16,
          padding: 16,
          borderRadius: 16,
          cursor: "pointer",
          color: "#fff",
        }}
      >
        <IoDocument
          style={{
            width: 60,
            height: 60,
            margin: "0 0 8px 0",
          }}
        />
        <span>Consegna {filename}</span>
      </div>
    </Link>
  )
}
