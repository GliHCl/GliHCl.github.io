import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { Footer } from "@/components/Footer"

const poppins = Poppins({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-poppins",
})
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "eVia - Gli HCl",
  description:
    "Erasmus Virtual Intelligent Assistant - Il tuo assistente Erasmus personale",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " " + poppins.variable}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
