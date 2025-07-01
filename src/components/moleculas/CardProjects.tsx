import { FaExternalLinkSquareAlt } from "react-icons/fa";


export function CardProjects() {
  return (
    <article className="flex w-250 bg-[#1FEACC] p-2 gap-5 rounded-2xl">
      <img src="https://imgs.search.brave.com/QVS3km12vfs1PFeXCRUS6-0lcDa8J-UOEfzyN4L8kCc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvdGhl/LXdlZWtuZC1oZWFk/c2hvdC1xdXdkOTRo/NTV1c2FnbnBnLmpw/Zw" alt="" className="w-100 rounded-2xl" />
      <div className="flex flex-col justify-between items-end ">
        <div>

          <h4 className="text-3xl font-bold">Ecomer basico</h4>
          <p className="text-[18px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus tenetur beatae dolorum doloribus mollitia repellat vitae, inventore ut molestias nulla in consequatur at expedita aperiam voluptatibus minus ea. Accusantium, adipisci.</p>
        </div>

        <a href="">{<FaExternalLinkSquareAlt size={25} />}</a>
      </div>
    </article>
  )
}
