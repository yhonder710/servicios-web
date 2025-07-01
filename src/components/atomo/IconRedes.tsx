import type { ReactNode } from "react"

interface Props {
  icon: ReactNode
  name: string
}

export function IconRedes({ icon, name }: Props) {
  return (
    <a href="#" className="flex items-center justify-center gap-2">
      {icon}
      <strong>{name}</strong>
    </a>
  )
}
