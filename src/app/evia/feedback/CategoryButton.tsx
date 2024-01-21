"use client"

import { FC, useState } from "react"

export interface CategoryButtonProps {
  label: string
  onClick?: (selected: boolean) => void
}

export const CategoryButton: FC<CategoryButtonProps> = props => {
  const [selected, setSelected] = useState(false)

  return (
    <button
      style={{
        backgroundColor: selected
          ? "var(--color-accent)"
          : "var(--color-primary)",
        border: "none",
        borderRadius: 12,
        fontSize: "1em",
        padding: 12,
        display: "flex",
        gap: 12,
        alignItems: "stretch",
        color: selected ? "black" : "white",
        textDecoration: "none",
        cursor: "pointer",
      }}
      onClick={() => {
        setSelected(!selected)
        props.onClick?.(!selected)
      }}
    >
      {props.label}
    </button>
  )
}
