import "./css/home.css"


import { CardServices } from "../components/moleculas/CardServices"
import { PosterServices } from "../components/moleculas/PosterServices"
import { InforPresentacion } from "../components/organismos/InforPresentacion"

import img from '../assets/w.jpg'
import img2 from '../assets/ecomer.png'

export function Home() {
  return (
    <main className="py-10 flex flex-col gap-20">
      <InforPresentacion />

      <PosterServices />


      <h2 className="text-4xl text-center font-bold text-[#1FEACC]">Tipos de Servicios</h2>
      <div className="w-full flex flex-wrap justify-center gap-10 box-border ">
        <CardServices img={img} title="Wordpress" />
        <CardServices img={img2} title="Ecommerce" />
        <CardServices img={img2} title="ecommerce" />
      </div>



      <h2 className="text-4xl text-center font-bold text-[#1FEACC]">Ventajas</h2>
      <div className="flex justify-center gap-15">
        <picture>
          <img src={img2} className="w-180 h-120 rounded-2xl" alt="" />
        </picture>
        <div className="w-120 gap-5 flex flex-col">
          <h2 className="text-3xl text-center font-bold text-[#1FEACC]">Ecommerce</h2>
          <p className="text-white parrafos">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas corporis ab adipisci eligendi cumque assumenda error nesciunt a minima maxime dolor, illo voluptas amet perspiciatis eaque magni quod laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas corporis ab adipisci eligendi cumque assumenda error nesciunt a minima maxime dolor, illo voluptas amet perspiciatis eaque magni quod laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas corporis ab adipisci eligendi cumque assumenda error nesciunt a minima maxime dolor, illo voluptas amet perspiciatis eaque magni quod laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas corporis ab adipisci eligendi cumque assumenda error nesciunt a minima maxime dolor, illo voluptas amet perspiciatis eaque magni quod laboriosam.</p>
        </div>
      </div>

      <div className="flex flex-row-reverse justify-center gap-15">
        <picture>
          <img src={img2} className="w-180 h-120 rounded-2xl" alt="" />
        </picture>
        <div className="w-120 gap-5 flex flex-col">
          <h2 className="text-3xl text-center font-bold text-[#1FEACC]">Ecommerce</h2>
          <p className="text-white parrafos">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas corporis ab adipisci eligendi cumque assumenda error nesciunt a minima maxime dolor, illo voluptas amet perspiciatis eaque magni quod laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas corporis ab adipisci eligendi cumque assumenda error nesciunt a minima maxime dolor, illo voluptas amet perspiciatis eaque magni quod laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas corporis ab adipisci eligendi cumque assumenda error nesciunt a minima maxime dolor, illo voluptas amet perspiciatis eaque magni quod laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas corporis ab adipisci eligendi cumque assumenda error nesciunt a minima maxime dolor, illo voluptas amet perspiciatis eaque magni quod laboriosam.</p>
        </div>
      </div>

      <div className="flex justify-center gap-15">
        <picture>
          <img src={img2} className="w-180 h-120 rounded-2xl" alt="" />
        </picture>
        <div className="w-120 gap-5 flex flex-col">
          <h2 className="text-3xl text-center font-bold text-[#1FEACC]">Ecommerce</h2>
          <p className="text-white parrafos">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas corporis ab adipisci eligendi cumque assumenda error nesciunt a minima maxime dolor, illo voluptas amet perspiciatis eaque magni quod laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas corporis ab adipisci eligendi cumque assumenda error nesciunt a minima maxime dolor, illo voluptas amet perspiciatis eaque magni quod laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas corporis ab adipisci eligendi cumque assumenda error nesciunt a minima maxime dolor, illo voluptas amet perspiciatis eaque magni quod laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas corporis ab adipisci eligendi cumque assumenda error nesciunt a minima maxime dolor, illo voluptas amet perspiciatis eaque magni quod laboriosam.</p>
        </div>
      </div>

    </main>
  )
}
