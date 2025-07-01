import logo from '../../public/logo.png'
import { BtnContacto } from '../components/atomo/BtnContacto'

import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Circulo } from '../components/atomo/Circulo';

export function Contacto() {
  return (
    <section className="mt-35 h-full flex flex-col justify-center items-center relative">
      <img src={logo} alt="Logo" className='100 h-auto object-cover' />

      <div className='flex gap-10'>
        <BtnContacto text='WhatsApp' icon={<FaWhatsapp size={38} />} />
        <BtnContacto text='Facebook' icon={<FaFacebook size={38} />} />
        <BtnContacto text='Instagram' icon={<FaInstagram size={38} />} />
      </div>

      <Circulo bottom='' left='' top='0px' right='270px' forma='O' />
      <Circulo bottom='' left='' top='60px' right='40px' forma='O' />
      <Circulo bottom='' left='' top='160px' right='300px' forma='X' />
      <Circulo bottom='' left='' top='290px' right='100px' forma='+' />
      <Circulo bottom='0px' left='' top='' right='250px' forma='O' />

      <Circulo bottom='' left='20px' top='0px' right='' forma='O' />
      <Circulo bottom='' left='400px' top='0px' right='' forma='O' />
      <Circulo bottom='20px' left='120px' top='' right='' forma='+' />
      <Circulo bottom='200px' left='320px' top='' right='' forma='O' />
      <Circulo bottom='300px' left='150px' top='' right='' forma='X' />
    </section>
  )
}
