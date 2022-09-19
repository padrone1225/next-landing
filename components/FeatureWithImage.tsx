import { CardProps } from "../types/types";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import Bookmark from "../public/assets/Bookmark.svg";
import Card from "./Card";

const FeatureWithImage = ({
  index,
  person,
}: {
  index: number;
  person: CardProps;
}) => {
  const className = index % 2 ? "md:flex-row" : "md:flex-row-reverse";
  return (
    <div
      className={`my-14 md:my-18 flex flex-col md:items-cener gap-10 min-h-[80vh] ${className}`}
    >
      <div className="md:flex-gow">
        <Fade triggerOnce direction={index % 2 ? "left" : "right"}>
          <Image src={Bookmark} alt="Bookmark" />
        </Fade>
      </div>
      <div className="flex flex-col gap-4 md:basis-[45%]">
        <Fade triggerOnce cascade direction={!(index % 2) ? "left" : "right"}>
          <h2 className="text-3xl md:text-4xl md:max-w-[400px] !leading-[3rem]">
            Communicate and gather feedback
          </h2>
          <p className="text-lg text-slate-500 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            neque nisi architecto autem molestias corrupti officia veniam.
          </p>
          <Card {...person} />
        </Fade>
      </div>
    </div>
  );
};

export default FeatureWithImage;
