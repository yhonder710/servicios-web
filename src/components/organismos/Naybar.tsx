import "./css/naybar.css"

import logoMini from '../../../public/logo-2.png'
import { Link } from "react-router-dom"

export function Naybar() {
  return (
    <div className="containerNaybar">
      <nav className="naybar">
        <a href="/">
          <img src={logoMini} alt="logo mini" className="logoMini" />
        </a>
        <ul>
          {link.map(link => (
            <Link key={link.name} to={link.to}>{link.name}</Link>
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
