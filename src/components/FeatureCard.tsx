import Image from "next/image"
import { FC } from "react"
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
  return (
    <div
      className={pageStyle.card}
      style={{
        display: "flex",
        flexDirection: inverted ? "row-reverse" : "row",
        alignItems: "center",
        justifyContent: "stretch",
        width: "100%",
        margin: "16px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          flex: 2,
          flexDirection: "column",
          alignItems: inverted ? "flex-end" : "flex-start",
          textAlign: inverted ? "right" : "left",
          width: "100%",
          maxWidth: 400,
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
            borderRadius: 16,
            objectFit: "cover",
            objectPosition: "center",
            margin: 16,
          }}
        />
      )}
    </div>
  )
}
