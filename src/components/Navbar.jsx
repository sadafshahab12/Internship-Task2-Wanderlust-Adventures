import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./ui/Button";
import { HiMenuAlt2 } from "react-icons/hi";
const Navbar = () => {
  const [left, setLeft] = useState(false);
  const handleMenu = () => {
    setLeft(!left);
  };
  const closeMenu = () => {
    setLeft(!left);
  };
  return (
    <div
      className={`bg-darkblue font-opensans py-5  lg:px-10 md:px-8 px-4 flex justify-between w-full fixed top-0 left-0 z-50`}
    >
      <div className="logo flex items-center xs:gap-5 gap-2 ">
        <HiMenuAlt2
          className="text-mint-500 cursor-pointer w-6 h-6 md:hidden block"
          onClick={handleMenu}
        />
        <h1 className="text-mint-500 lg:text-2xl xs:text-xl xxs:text-[16px] text-[15px] font-black">
          Wanderlust Adventures
        </h1>
      </div>
      <nav className="flex items-center gap-8">
        <ul
          className={`text-mint-500 text-sm flex md:flex-row flex-col items-center lg:gap-10 sm:gap-6 md:static absolute top-16 ${
            left ? "left-0" : "-left-full"
          } md:w-auto w-full bg-darkblue md:p-0 p-5 md:h-auto h-screen md:space-y-0 space-y-6 transition-all ease-in duration-200`}
        >
          <li className="navLink-hover" onClick={closeMenu}>
            <Link to="/">Home</Link>
          </li>
          <li className="navLink-hover"  onClick={closeMenu}>
            <Link to="/destinations">Destinations</Link>
          </li>
          <li className="navLink-hover"  onClick={closeMenu}>
            <Link to="/packages">Packages</Link>
          </li>
          <li className="navLink-hover"  onClick={closeMenu}>
            <Link to="/contactus">Contact US</Link>
          </li>
          <li>
            <Button btnText="Book Now" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
