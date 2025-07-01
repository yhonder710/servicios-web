import './css/conocenos.css'

import { CardPerfil } from "../components/moleculas/CardPerfil";
import { Circulo } from '../components/atomo/Circulo';

export function Conocenos() {
  return (
    <section className="mt-20 flex flex-col justify-center items-center gap-10 relative">
      <div className="flex gap-20 conocenos">
        <CardPerfil />
        <CardPerfil />
      </div>

      <p className="w-300 bg-[#1FEACC] p-3 rounded-2xl shadow">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ad quo, aliquam alias saepe corrupti laboriosam eaque. Magni asperiores culpa assumenda illo, non quo animi alias error, vitae nesciunt dolorum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ad quo, aliquam alias saepe corrupti laboriosam eaque. Magni asperiores culpa assumenda illo, non quo animi alias error, vitae nesciunt dolorum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ad quo, aliquam alias saepe corrupti laboriosam eaque. Magni asperiores culpa assumenda illo, non quo animi alias error, vitae nesciunt dolorum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ad quo, aliquam alias saepe corrupti laboriosam eaque. Magni asperiores culpa assumenda illo, non quo animi alias error, vitae nesciunt dolorum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ad quo, aliquam alias saepe corrupti laboriosam eaque. Magni asperiores culpa assumenda illo, non quo animi alias error, vitae nesciunt dolorum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ad quo, aliquam alias saepe corrupti laboriosam eaque. Magni asperiores culpa assumenda illo, non quo animi alias error, vitae nesciunt dolorum!</p>

      <Circulo bottom='' left='' top='0px' right='170px' forma='O' />
      <Circulo bottom='' left='' top='60px' right='40px' forma='O' />
      <Circulo bottom='' left='' top='160px' right='100px' forma='X' />
      <Circulo bottom='' left='' top='290px' right='100px' forma='+' />
      <Circulo bottom='0px' left='' top='' right='250px' forma='O' />

      <Circulo bottom='' left='20px' top='140px' right='' forma='O' />
      <Circulo bottom='' left='170px' top='0px' right='' forma='O' />
      <Circulo bottom='20px' left='120px' top='' right='' forma='+' />
      <Circulo bottom='250px' left='60px' top='' right='' forma='O' />
      <Circulo bottom='400px' left='150px' top='' right='' forma='X' />
    </section>
  )
}
