import styles from "./page.module.scss"
import { MemberGrid } from "@/components/MemberGrid"
import { Separator } from "@/components/Separator"
import { Consegne } from "@/components/Consegne"
import { IoDocument } from "react-icons/io5"
import pageStyle from "@/app/page.module.scss"
import { FeatureCard } from "@/components/FeatureCard"
import Link from "next/link"
import { Header } from "@/components/Header"

export default async function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
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
          <h1 style={{ marginBottom: 8 }}>eVia</h1>
          <h3 style={{ fontStyle: "italic" }}>
            Erasmus Virtual Intelligent Assistant
          </h3>
          <h4 style={{ marginBottom: 8 }}>
            Il tuo assistente Erasmus personale
          </h4>
          <p>
            <b>
              Vorresti partire in Erasmus ma non sai nemmeno dove iniziare a
              informarti?
            </b>
            <br />
            Scopri eVia, il tuo assistente Erasmus intelligente e interattivo,
            pronto a guidarti in ogni fase della tua esperienza con risposte
            immediate, accurate e personalizzate.
            Immergiti nell'Erasmus senza incertezze: eVia è qui per te 24/7,
            per trasformare ogni tua domanda in una scoperta!
          </p>
        </div>
        <Link
          style={{
            color: "white",
            padding: "16px 32px",
            alignSelf: "center",
            marginBottom: 16,
            borderRadius: 16,
            backgroundColor: "#008edc",
          }}
          href="/evia"
        >
          PROVAMI
        </Link>
        <Link href={`/consegne/Presentazione%20Finale.pdf`}>
          <div 
            className={pageStyle.card}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              margin: 0,
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
            <span>{`Presentazione Finale`}</span>
          </div>
        </Link>

        <FeatureCard
          title="Risposte immediate e accurate"
          image="/feature1.jpg"
        >
          <p>
            Il ChatBot ha accesso a una vasta gamma di documenti ufficiali e
            altre risorse pertinenti che forniscono informazioni dettagliate e
            aggiornate sulle varie fasi del programma Erasmus. Grazie alla sua
            capacità di elaborazione del linguaggio naturale e alla conoscenza
            approfondita dei documenti, esso può effettuare ricerche rapide e
            precise per trovare le informazioni richieste dagli studenti. eVia è
            disponibile 24/7, offrendo un accesso continuo alle informazioni,
            indipendentemente dall&apos;orario o dalla collocazione geografica.
            Gli studenti possono usare eVia in modo intuitivo e user-friendly,
            ottenendo risposte senza la necessità di navigare attraverso diverse
            pagine web o documenti.
          </p>
        </FeatureCard>
        <FeatureCard
          title="Fonti e feedback degli utenti"
          image="/feature2.jpg"
          inverted
        >
          <p>
            Per le risposte eVia non si basa solo su documenti ufficiali, ma
            integra anche un sistema di feedback degli utenti e citazioni da
            fonti affidabili. Il sistema di feedback permette agli utenti di
            segnalare eventuali lacune o errori nelle risposte oppure fornire
            commenti sulla chiarezza delle informazioni. Ogni volta che il
            ChatBot fornisce una risposta, può citare la fonte specifica dei
            documenti ufficiali da cui ha ottenuto le informazioni; questo
            aumenta la trasparenza e la fiducia degli utenti nella validità
            delle risposte. Le citazioni dalle fonti ufficiali consentono agli
            utenti di verificare direttamente le informazioni fornite dal
            ChatBot, incoraggiando una comprensione più approfondita e una
            verifica incrociata.
          </p>
        </FeatureCard>
        <FeatureCard title="Conversazioni recenti" image="/feature3.jpg">
          <p>
            Il nostro ChatBot è arricchito dalla funzionalità di mantenere una
            storia delle conversazioni passate degli utenti. Gli utenti possono
            riprendere le conversazioni esattamente da dove si sono interrotte,
            consentendo una continuità e facilitando il recupero di informazioni
            già discusse. Il ChatBot utilizza la storia delle conversazioni per
            comprendere meglio il contesto attuale, garantendo risposte più
            pertinenti e personalizzate in base alle interazioni precedenti,
            inoltre se un utente presenta un problema che richiede più passaggi
            per la risoluzione, il chatbot può seguire la conversazione passo
            dopo passo, offrendo soluzioni in modo graduale e guidato. La storia
            delle conversazioni consente anche di fornire feedback specifico su
            risposte passate, contribuendo a migliorare progressivamente la
            qualità del servizio.
          </p>
        </FeatureCard>
        <Consegne />
        <Separator />
        <div
          className={styles.card}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            padding: 16,
          }}
        >
          <h2>Il nostro obiettivo</h2>
          <p>
            Vorremmo proporre un assistente virtuale, allenato su documentazione
            specifica, dove condividere e trovare facilmente le informazioni
            necessarie e che sia in grado di facilitare le procedure di
            applicazione e ammissione. Questa scelta implementativa deriva dalla
            necessità dell&apos;utente di ottenere una risposta rapida, corretta
            e di facile comprensione, facendo diventare di fatto la
            conversazione piacevole e eventualmente personalizzare le risposte
            del ChatBot per renderlo il più simile possibile ad un utente umano.
          </p>
        </div>
        <MemberGrid
          members={[
            {
              name: "Andrea Gollo",
              tgHandle: "Andrea31200",
              image: "/andrea.jpg",
            },
            {
              name: "Francesco Martellosio",
              tgHandle: "FrancescoMartellosio",
              image: "/francesco.jpg",
            },
            {
              name: "Tommaso Morganti",
              tgHandle: "toto04_1",
              image: "/tommaso.jpg",
            },
            {
              name: "Lorenzo Simone",
              tgHandle: "LorenzoS2",
              image: "/lorenzo.jpg",
            },
            { name: "Bin Xu", tgHandle: "white_xb", image: "/bin.jpg" },
            { name: "Xuwen Ye", tgHandle: "xuwen_bubb", image: "/xuwen.jpg" },
          ]}
        />
      </main>
    </>
  )
}
