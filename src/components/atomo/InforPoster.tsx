import type { ReactNode } from "react"

interface Props {
  title: string
  icon: ReactNode
}

export function InforPoster({ icon, title }: Props) {
  return (
    <div className='flex items-center'>
      {icon}
      <span className='w-80'>
        <strong className='text-[20px] text-center'>{title}</strong>
      </span>
    </div>
  )
}
