import './css/formas.css'

interface Props {
  top: string
  left: string
  right: string
  bottom: string

  forma: string
}

export function Circulo({ top, left, right, bottom, forma }: Props) {
  return (
    <span style={{ top: `${top}`, left: `${left}`, right: `${right}`, bottom: `${bottom}` }} className="absolute formas">
      {forma}
    </span>
  )
}
