import { IconRedes } from "../atomo/IconRedes";

import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";


export function Footer() {
  return (
    <footer className="flex justify-between">
      <div className="flex items-center gap-5">
        <IconRedes icon={<FaFacebook size={30} />} name="Facebook" />
        <IconRedes icon={<FaInstagramSquare size={30} />} name="Instagram" />
        <IconRedes icon={<FaSquareWhatsapp size={30} />} name="WhatsApp" />
      </div>
      <p>©2025 ACM - Todos los derechos reservados.</p>
    </footer>
  )
}
