import styles from "./page.module.scss"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1 id={styles.hcl}>Gli HCl</h1>
      </div>
    </main>
  )
}
