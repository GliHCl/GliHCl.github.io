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
          }}
        >
          <h1 id={styles.hcl}>Gli HCl</h1>
          <i style={{ fontSize: "0.9rem" }}>Non è una i, è una L minuscola</i>
        </div>

        <div
          className={styles.card}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            margin: "36px 0",
            textAlign: "center",
            fontSize: "1.2rem",
          }}
        >
          <h1 style={{ fontSize: "2.8em" }}>eVia</h1>
          <h3 style={{ fontStyle: "italic" }}>
            Erasmus Virtual Intelligent Assistant
          </h3>
          <h4 style={{ marginBottom: 8 }}>
            Il tuo assistente Erasmus personale
          </h4>
          <p>
            Il dominio di interesse del progetto è il programma Erasmus e i
            progetti di mobilit&agrave; internazionale. Con l&apos;intento di
            aiutare gli studenti in procinto di partire o appena arrivati,
            abbiamo identificato diverse problematiche durante il processo, in
            particolar modo quelle riguardanti la raccolta delle informazioni,
            la scelta dei corsi convalidabili, la ricerca dell&apos;alloggio, i
            rapporti sociali, ecc.
          </p>
        </div>

        <div
          className={styles.card}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
          }}
        >
          <h1>PDF Consegne</h1>
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
