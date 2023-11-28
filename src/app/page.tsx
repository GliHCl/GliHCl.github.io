import styles from "./page.module.scss"
import { MemberGrid } from "@/components/MemberGrid"
import { Separator } from "@/components/Separator"
import { Consegne } from "@/components/Consegne"
import { FeatureCard } from "@/components/FeatureCard"
import Link from "next/link"
import { VoiceFlowHydration } from "@/components/VoiceFlowHydration"

export default async function Home() {
  return (
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
        <h3 style={{ fontStyle: "italic" }}>
          Erasmus Virtual Intelligent Assistant
        </h3>
        <h4 style={{ marginBottom: 8 }}>Il tuo assistente Erasmus personale</h4>
        <p>
          Il dominio di interesse del progetto è il programma Erasmus e i
          progetti di mobilit&agrave; internazionale. Con l&apos;intento di
          aiutare gli studenti in procinto di partire o appena arrivati, abbiamo
          identificato diverse problematiche durante il processo, in particolar
          modo quelle riguardanti la raccolta delle informazioni, la scelta dei
          corsi convalidabili, la ricerca dell&apos;alloggio, i rapporti
          sociali, ecc.
        </p>
      </div>
      <Link
        style={{
          color: "white",
          padding: "16px 32px",
          alignSelf: "center",
          borderRadius: 16,
          backgroundColor: "#008edc",
        }}
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.figma.com/proto/KyAsNh9oEwxYI38O9iSdKo/MediumFi-Prototype?node-id=3-22&starting-point-node-id=3%3A22&mode=design&t=IKHV6XWSyobX1iF3-1"
      >
        Prova il prototipo su Figma
      </Link>

      <FeatureCard
        title="Risposte immediate e accurate"
        image="/placeholder.jpg"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
          placerat fringilla. Class aptent taciti sociosqu ad litora torquent
          per conubia nostra, per inceptos himenaeos. Ut mattis semper
          consequat. Ut sapien risus, venenatis in suscipit in, aliquam vel
          diam. Aenean mollis magna metus, eu rhoncus massa suscipit vel.
          Aliquam interdum eu dolor eu feugiat. Aenean eu metus ullamcorper,
          rutrum ante sit amet, tempor sapien. Aliquam erat volutpat. Cras
          condimentum enim ac ornare porta. Sed tristique lacinia ipsum, vitae
          ultricies arcu feugiat id. Proin eget odio id odio posuere aliquet.
          Maecenas convallis vel nisl id interdum.
        </p>
      </FeatureCard>
      <FeatureCard
        title="Fonti e feedback degli utenti"
        image="/placeholder.jpg"
        inverted
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
          placerat fringilla. Class aptent taciti sociosqu ad litora torquent
          per conubia nostra, per inceptos himenaeos. Ut mattis semper
          consequat. Ut sapien risus, venenatis in suscipit in, aliquam vel
          diam. Aenean mollis magna metus, eu rhoncus massa suscipit vel.
          Aliquam interdum eu dolor eu feugiat. Aenean eu metus ullamcorper,
          rutrum ante sit amet, tempor sapien. Aliquam erat volutpat. Cras
          condimentum enim ac ornare porta. Sed tristique lacinia ipsum, vitae
          ultricies arcu feugiat id. Proin eget odio id odio posuere aliquet.
          Maecenas convallis vel nisl id interdum.
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
          necessità dell&apos;utente di ottenere una risposta rapida, corretta e
          di facile comprensione, facendo diventare di fatto la conversazione
          piacevole e eventualmente personalizzare le risposte del ChatBot per
          renderlo il più simile possibile ad un utente umano.
        </p>
      </div>
      <MemberGrid
        members={[
          { name: "Andrea Gollo", tgHandle: "Andrea31200" },
          { name: "Francesco Martellosio", tgHandle: "FrancescoMartellosio" },
          { name: "Tommaso Morganti", tgHandle: "toto04_1" },
          { name: "Lorenzo Simone", tgHandle: "LorenzoS2" },
          { name: "Bin Xu", tgHandle: "white_xb" },
          { name: "Xuwen Ye", tgHandle: "xuwen_bubb" },
        ]}
      />
      <VoiceFlowHydration />
    </main>
  )
}
