# Gli HCl

## eVia

### Erasmus Virtual Intelligent Assistant - Il tuo assistente Erasmus personale

Il dominio di interesse del progetto è il programma Erasmus e i progetti di
mobilità internazionale. Con l'intento di aiutare gli studenti in procinto di
partire o appena arrivati, abbiamo identificato diverse problematiche durante il
processo, in particolar modo quelle riguardanti la raccolta delle informazioni,
la scelta dei corsi convalidabili, la ricerca dell'alloggio, i rapporti
sociali, ecc.

## Sito web

Il sito del progetto (disponibile a https://glihcl.it) è stato realizzato con
(Next.js)[https://nextjs.org].

### Prerequisiti

- Node.js (versione LTS v20.10.0 va più che bene, testato con v18.16.0)
  scaricabile a https://nodejs.org/en
- pnpm che si può abilitare dopo aver installato node con il comando

```sh
corepack enable
```

### Installazione

1. Clonare il repository

```sh
git clone https://github.com/glihcl/glihcl.github.io.git
```

2. Installare le dipendenze

```sh
pnpm install
```

3. Avviare il server di sviluppo

```sh
pnpm run dev
```

Il sito verrà mostrato a http://localhost:3000

Questo sito viene pubblicato automaticamente su GitHub Pages ad ogni push sul
branch `main`, generando una versione statica del sito che si può creare con

```sh
pnpm run build
```

la quale verrà salvata nella cartella `out`.
