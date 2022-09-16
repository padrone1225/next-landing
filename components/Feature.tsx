import Link from "next/link";
import React from "react";
import { FeatureProps } from "../types/types";

const Feature = ({ feature, desc, link, icon }: FeatureProps) => {
  return (
    <div className="p-4 md:p-6 !pt-14 relative bg-gray-100 feature text-center group text-black leading-7">
      <h3 className="text-inherit capitalize">{feature}</h3>
      <p className="desc text-slate-300">{desc}</p>
      <Link href={link}>
        <a className="text-primary group-hover:text-inherit duration-200 ease-out mt-4 block">
          Learn More
        </a>
      </Link>
      <div className="absolute h-[90px] w-[90px] bg-primary text-white group-hover:text-primary group-hover:bg-white duration-200 ease-out shadow-primary shadow-2xl grid place-items-center top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full text-3xl">
        {icon}
      </div>
    </div>
  );
};

export default Feature;
