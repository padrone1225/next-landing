import { navLinks } from "../config/NavLinks";
import useWindowSize from "../hooks/useWindowSize";
import { GrClose } from "./Icons";
import NavLink from "./NavLink";

const NavBar = ({ handleNavBar }: { handleNavBar: () => void }) => {
  const { width } = useWindowSize();
  return (
    <nav className="fixed top-0 bottom-0 right-0 md:w-fit md:static flex flex-col md:flex-row gap-4 md:gap-8 md:items-center bg-white p-8 md:p-0 text-xl md:text-base z-[1000] w-[70%] ">
      {width! < 768 && (
        <div className="flex justify-end">
          <button
            className="p-2"
            onClick={() => handleNavBar()}
            title="Close Navbar"
          >
            <GrClose />
          </button>
        </div>
      )}
      {navLinks.map(({ link, text, subLinks }, index) => (
        <NavLink link={link} subLinks={subLinks} text={text} key={index} />
      ))}
    </nav>
  );
};

export default NavBar;
