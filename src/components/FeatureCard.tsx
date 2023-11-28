"use client"
import Image from "next/image"
import { FC, useEffect, useState } from "react"
import pageStyle from "@/app/page.module.scss"

export interface FeatureCardProps {
  title: string
  image?: string
  inverted?: boolean
  children?: React.ReactNode
}

export const FeatureCard: FC<FeatureCardProps> = ({
  title,
  image,
  inverted,
  children,
}) => {
  const [mobile, setMobile] = useState(
    typeof window !== "undefined" // just to avoid SSR errors
      ? window.matchMedia("(max-width: 700px)").matches
      : false
  )

  useEffect(() => {
    const listener = () => {
      setMobile(window.matchMedia("(max-width: 700px)").matches)
    }
    window.addEventListener("resize", listener)
    return () => window.removeEventListener("resize", listener)
  }, [])

  return (
    <div
      className={pageStyle.card}
      style={{
        display: "flex",
        flexDirection: mobile ? "column" : inverted ? "row-reverse" : "row",
        alignItems: "stretch",
        justifyContent: "stretch",
        padding: 16,
        boxSizing: "border-box",
        width: "100%",
        margin: "16px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          alignItems: mobile ? "center" : inverted ? "flex-end" : "flex-start",
          textAlign: mobile ? "center" : inverted ? "right" : "left",
          width: "calc(100% - 32px)",
          margin: 16,
          borderRadius: 16,
        }}
      >
        <h3 style={{ margin: "0 0 16px 0" }}>{title}</h3>
        {children}
      </div>
      {image && (
        <Image
          src={image}
          alt={title}
          width={200}
          height={350}
          style={{
            flex: 1,
            width: "calc(100% - 32px)",
            borderRadius: 16,
            objectFit: "cover",
            objectPosition: "center",
            boxSizing: "border-box",
            margin: 16,
          }}
        />
      )}
    </div>
  )
}
