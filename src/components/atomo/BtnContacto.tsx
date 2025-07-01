import type { ReactNode } from 'react';
import './css/btn.css'



interface Props {
  text: string
  icon: ReactNode
}

export function BtnContacto({ text, icon }: Props) {
  return (
    <button className='btnContacto'>
      <a href="#" className='flex items-center gap-2'>
        {icon}
        {text}
      </a>
    </button>
  )
}
