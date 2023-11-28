import { FC } from "react"
import { Member, MemberProps } from "./Member"

/**
 * Display each member in a grid.
 */
export const MemberGrid: FC<{ members: MemberProps[] }> = ({ members }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        width: "100%",
        margin: "16px 0",
      }}
    >
      {members.map(member => (
        <Member key={`member_grid_${member.tgHandle}`} {...member} />
      ))}
    </div>
  )
}
