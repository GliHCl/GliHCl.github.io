"use client"
import Image from "next/image"
import { FC, useEffect, useMemo, useState } from "react"
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
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    const listener = () => {
      setMobile(window.matchMedia("(max-width: 700px)").matches)
    }
    listener()
    window.addEventListener("resize", listener)
    return () => window.removeEventListener("resize", listener)
  }, [])

  return (
    <div
      className={pageStyle.card}
      style={{
        display: "flex",
        flexDirection: mobile ? "column" : inverted ? "row-reverse" : "row",
        alignItems: "center",
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
          flex: 4,
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
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
          width={100}
          height={360}
          style={{
            flex: 3,
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
