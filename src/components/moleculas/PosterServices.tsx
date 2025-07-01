import { InforPoster } from '../atomo/InforPoster'
import './css/posterServices.css'


import { IoTime } from "react-icons/io5";
import { MdError } from "react-icons/md";
import { AiFillDollarCircle } from "react-icons/ai";




export function PosterServices() {
  return (
    <section className="bg-[#1FEACC] w-full h-40 flex items-center px-8 justify-between poster">
      <InforPoster title='Necesitas una web los mas rapido posible' icon={<IoTime size={80} />} />
      <InforPoster title='Necesitas una web los mas rapido posible' icon={<MdError size={80} />} />
      <InforPoster title='Necesitas una web los mas rapido posible' icon={<AiFillDollarCircle size={80} />} />
    </section>
  )
}
