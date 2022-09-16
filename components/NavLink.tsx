import Link from "next/link";
import { useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import { NavLink } from "../types/types";
import { RiArrowDownSLine, RiArrowUpSLine } from "./Icons";
import SubLink from "./SubLink";

const NavLink = ({ text, link, subLinks }: NavLink) => {
  const [subLink, setSubLink] = useState(false);

  const handleSubLinks = () => setSubLink(!subLink);
  const { width } = useWindowSize();

  return (
    <div className="md:relative bg-inherit">
      <div className="flex gap-2 items-center justify-between">
        <Link href={link!} passHref>
          <a className="navBar__link capitalize">{text}</a>
        </Link>
        {subLinks && (
          <button onClick={handleSubLinks}>
            {width! >= 768 && <RiArrowDownSLine />}
            {width! < 768 && subLink && <RiArrowUpSLine />}
            {width! < 768 && !subLink && <RiArrowDownSLine />}
          </button>
        )}
      </div>
      {subLinks && (
        <>
          {subLink && (
            <div className="md:absolute bg-inherit top-[140%] z-[1000] left-0 flex flex-col w-max">
              {width! > 768 && (
                <div className="absolute top-0 right-0 left-9 h-[2px] bg-primary"></div>
              )}
              {subLinks.map(({ text, link, secondSubLinks }, index) => (
                <SubLink
                  text={text}
                  link={link}
                  secondSubLinks={secondSubLinks}
                  key={index}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default NavLink;
