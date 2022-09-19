import Image from "next/image";
import { CardProps } from "../types/types";

const Card = ({ job, name, img, desc }: CardProps) => {
  return (
    <div className="bg-white shadow-2xl shadow-gray-300 p-4 md:p-6 relative rounded-md overflow-hidden w-full">
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-primary"></div>
      <div className="flex items-center gap-4">
        <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
          <Image src={img} alt={name} className="w-full h-full bg-cover" />
        </div>
        <div className="flex flex-col">
          <h3 className="text-black font-semibold text-xl md:text-xl capitalize">
            {name}
          </h3>
          <p className="text-slate-700 font-light text-lg">{job}</p>
        </div>
      </div>
      <p className="mt-4 text-slate-400">
        {'"'}
        {desc}
        {'"'}
      </p>
    </div>
  );
};

export default Card;
