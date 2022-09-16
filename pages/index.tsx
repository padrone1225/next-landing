import type { NextPage } from "next";
import Container from "../components/Container";
import Header from "../components/Header";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import Image from "next/image";
import Investing from "../public/assets/Investing.svg";
import Section from "../components/Section";
import FEATURES from "../config/Features";
import Feature from "../components/Feature";

const Home: NextPage = () => {
  return (
    <div className="relative">
      <Header />
      <Container>
        <div
          className="flex flex-col-reverse md:flex-row md:justify-between gap-4 items-center p-4 md:p-6 my-14 md:my-18"
          id="home"
        >
          <div className="flex flex-col gap-4 text-center md:text-left items-center md:items-start max-w-[80%] md:max-w-[full]">
            <Fade triggerOnce cascade direction="left">
              <h1 className="text-blact text-3xl md:text-5xl leading-10">
                Make Your Business <br /> More Profitable
              </h1>
              <p className="text-slate-400 font-light max-w-[650px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam assumenda ea quo cupiditate facere deleniti fuga
                officia.
              </p>
              <Link href="#">
                <a className="link mt-4">Get Started</a>
              </Link>
            </Fade>
          </div>
          <div className="bg-wrapper overflow-hidden flex-grow z-0">
            <Fade triggerOnce direction="right">
              <Image src={Investing} alt="Investing" className="z-0" />
            </Fade>
          </div>
        </div>
        <div id="features" className="my-14 md:my-18">
          <Fade triggerOnce cascade>
            <Section
              title="Imagin Features"
              desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quos quaerat sapiente nam, id vero."
            />
          </Fade>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 my-14">
            {FEATURES.map(({ feature, link, desc, icon }, index) => (
              <Fade key={index} direction="up">
                <Feature
                  feature={feature}
                  link={link}
                  desc={desc}
                  icon={icon}
                />
              </Fade>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
