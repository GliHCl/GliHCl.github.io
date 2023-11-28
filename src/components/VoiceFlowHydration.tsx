"use client"
import Script from "next/script"
import { FC } from "react"

export const VoiceFlowHydration: FC = () => {
  return (
    <Script
      src="https://cdn.voiceflow.com/widget/bundle.mjs"
      type="text/javascript"
      onLoad={() => {
        if (typeof window === "undefined") return
        const w = window as any
        w.voiceflow.chat.load({
          verify: { projectID: "65567153b1cadb00077141ba" },
          url: "https://general-runtime.voiceflow.com",
          versionID: "production",
        })
      }}
    />
  )
}
