import { useState } from "react";
import Menu from "../Menu";
import Logo from "./Logo";
import MenuToggleMobile from "./MenuToggleMobile";
import SearchDesktop from "./SearchDesktop";
import { TiThMenu } from "react-icons/ti";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleToggleMenu() {
    setToggleMenu((prev) => !prev);
  }

  return (
    <div className="flex justify-between items-center bg-amber-300 px-10 py-4">
      <div className="flex-1 flex justify-start items-center ">
        <SearchDesktop />
      </div>

      <div className="flex-1 flex justify-center items-center ">
        <Logo />
      </div>

      <div className="flex-1 flex justify-end items-center hidden sm:block ">
        <Menu />
      </div>
      <div className="flex-1 relative flex justify-end items-center sm:hidden">
        <TiThMenu onClick={handleToggleMenu} />
        {toggleMenu && <MenuToggleMobile />}
      </div>
    </div>
  );
}

export default Navbar;
