import "./css/naybar.css"

import logoMini from '../../../public/logo-2.png'

export function Naybar() {
  return (
    <div className="containerNaybar">
      <nav className="naybar">
        <a href="/">
          <img src={logoMini} alt="logo mini" className="logoMini" />
        </a>
        <ul>
          {link.map(link => (
            <li key={link.name}><a href={link.to}>{link.name}</a></li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

const link = [
  { name: "Conocenos", to: "conocenos" },
  { name: "Trabajos", to: "trabajos" },
  { name: "contacto", to: "contacto" },
]
