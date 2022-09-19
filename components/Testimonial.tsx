import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { CardProps } from "../types/types";

const Testimonials = ({ person }: { person: Omit<CardProps, "job"> }) => {
  const { name, img, desc } = person;
  return (
    <div className="flex justify-center mb-8">
      <Fade>
        <div className="flex flex-col items-center gap-4 max-w-[800px]">
          <div className="rounded-full overflow-hidden border border-primary w-[100px] h-[100px]">
            <Image src={img} alt={name} />
          </div>
          <q className="text-slate-500 font-light text-center text-xl leading-8">
            {desc}
          </q>
          <h3 className="text-black capitalize font-semibold">{name}</h3>
        </div>
      </Fade>
    </div>
  );
};

export default Testimonials;
