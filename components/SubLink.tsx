import Link from "next/link";
import { useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import { SubLink } from "../types/types";
import { RiArrowRightSLine, RiArrowUpSLine } from "./Icons";

const SubLink = ({ text, link, secondSubLinks }: SubLink) => {
  const { width } = useWindowSize();
  const [secondSubLink, setSecondSubLink] = useState(false);

  const handleSecondSubLink = () => setSecondSubLink(!secondSubLink);

  return (
    <div className="md:relative bg-inherit">
      <div className="flex justify-between items-center gap-2 md:hover:bg-inherit hover:bg-[#d1d1d1]/40">
        <Link href={link!}>
          <a className="navBar__link p-2">{text}</a>
        </Link>
        {secondSubLinks && (
          <button onClick={handleSecondSubLink}>
            {width! >= 768 && <RiArrowRightSLine />}
            {width! < 768 && secondSubLink && <RiArrowUpSLine />}
            {width! < 768 && !secondSubLink && <RiArrowUpSLine />}
          </button>
        )}
      </div>
      {secondSubLinks && (
        <>
          {secondSubLink && (
            <div className="md:absolute bg-inherit flex flex-col w-max top-[100%] z-[10000] left-[100%]">
              {width! > 768 && (
                <div className="absolute top-0 right-0 left-0 h-[2px] bg-primary"></div>
              )}
              {secondSubLinks.map(({ link, text }, index) => (
                <Link href={link!} key={index}>
                  <a className="navBar__link p-2 md:hover:bg-inherit hover:bg-[#d1d1d1]/40">
                    {text}
                  </a>
                </Link>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SubLink;
