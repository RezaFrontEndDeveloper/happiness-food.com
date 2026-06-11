import { useContext } from "react";
import Menu from "../Menu";
import Logo from "./Logo";
import MenuToggleMobile from "./MenuToggleMobile";
import SearchDesktop from "./SearchDesktop";
import { TiThMenu } from "react-icons/ti";
import { DataContext } from "../App";

function Navbar() {
  const { handleToggleMenu, toggleMenu } = useContext(DataContext);
  return (
    <div className="flex justify-start items-center bg-amber-300 px-10 py-4">
      <div className="flex-1  justify-start items-center hidden sm:block ">
        <Menu />
      </div>
      <div className="flex-1 relative flex sm:justify-end items-center transition-all duration-300 sm:hidden">
        <TiThMenu onClick={handleToggleMenu} />
        {toggleMenu && <MenuToggleMobile />}
      </div>

      <div className="flex-1 flex justify-center items-center ">
        <Logo />
      </div>
      <div className="flex-1 flex justify-end items-center ">
        <SearchDesktop />
      </div>
    </div>
  );
}

export default Navbar;
