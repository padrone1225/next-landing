import { useEffect, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import Container from "./Container";
import { HiMenu } from "./Icons";
import Logo from "./Logo";
import NavBar from "./NavBar";

const Header = () => {
  const { width } = useWindowSize();
  const [navBar, setNavBar] = useState(false);

  useEffect(() => {
    setNavBar(width! >= 768 ? true : navBar);
  }, [width]);

  const handleNavBar = () => setNavBar(!navBar);

  return (
    <header className="border-b fixed top-0 right-0 left-0 bg-white z-[10000]">
      <Container>
        <div className="flex items-center justify-between">
          <Logo />
          {width! < 768 && (
            <button className="text-2xl" onClick={handleNavBar}>
              <HiMenu />
            </button>
          )}
          {navBar && <NavBar handleNavBar={handleNavBar} />}
        </div>
      </Container>
    </header>
  );
};

export default Header;
