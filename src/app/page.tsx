import fs from "fs/promises"
import path from "path"
import Link from "next/link"
import styles from "./page.module.scss"

const dir = path.join(process.cwd(), "public", "consegne")

export default async function Home() {
  const files = await fs.readdir(dir)

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            margin: "36px 0",
          }}
        >
          <h1 id={styles.hcl}>Gli HCl</h1>
          <p>non è un i è un l minuscola</p>
        </div>

        <div
          className={styles.card}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2>PDF Consegne</h2>
          {files.map(file => (
            <div key={file}>
              <Link href={`/consegne/${file}`}>Consegna {file}</Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
