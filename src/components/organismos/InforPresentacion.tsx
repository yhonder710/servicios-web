import "./css/inforPresentacion.css"

import logo from '../../../public/logo.png'
import { BtnContacto } from "../atomo/BtnContacto"

import { FaWhatsapp } from "react-icons/fa";

export function InforPresentacion() {
  return (
    <div className="presentacion">
      <section>
        <div className="flex flex-col items-start gap-3">
          <span>Al trabajo se le da duro</span>
          <h1>ACM Solutions</h1>
          <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione cupiditate, rem obcaecati repellat temporibus sint accusamus officia culpa odit sequi amet quis possimus itaque ut pariatur iure ea sunt voluptate. Lorem ipsum dolor, sit amet consectetur adipisicing elit. A modi voluptatibus veniam, dolorem sint labore, eaque quos explicabo molestiae obcaecati inventore vero nesciunt tempore suscipit ab eos nisi praesentium unde.</p>
          <BtnContacto text="Contactanos por WhatsApp" icon={<FaWhatsapp size={38} />} />
        </div>
      </section>
      <picture className="logo">
        <img src={logo} alt="Logo" />
      </picture>
    </div>

  )
}
