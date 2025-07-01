
interface Props {
  img: string
  title: string
}

export function CardServices({ img, title }: Props) {
  return (
    <article className="flex flex-col justify-center items-center">
      <picture className="w-150 h-75 border-4 border-[#1FEACC] rounded-2xl card overflow-hidden">
        <img src={img} className='w-full h-full object-cover' alt="" />
      </picture>
      <div className="bg-[#1FEACC] pb-1 px-3 rounded-b-2xl">
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
    </article>
  )
}
