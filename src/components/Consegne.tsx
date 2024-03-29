import { FC } from "react"
import { PDFLink } from "./PDFLink"
import fs from "fs/promises"
import path from "path"

const dir = path.join(process.cwd(), "public", "consegne")

/** display the pdflinks in a grid */
export const Consegne: FC = async () => {
  const files = await fs.readdir(dir)

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
      }}
    >
      <h1>PDF Consegne</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          width: "100%",
          gap: 16,
          margin: "16px 0",
        }}
      >
        {files.map(file => {
          let filename = path.parse(file).name
          if (!isNaN(Number(filename))) filename = `Consegna ${filename}`
          return (
            <PDFLink
              key={`pdf_link_${file}`}
              filename={filename}
              path={encodeURI(file)}
            />
          )
        })}
      </div>
    </div>
  )
}
