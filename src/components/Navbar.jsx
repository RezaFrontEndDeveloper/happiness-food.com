import { useContext } from "react";
import Menu from "../Menu";
import Logo from "./Logo";
import MenuToggleMobile from "./MenuToggleMobile";
import SearchDesktop from "./SearchDesktop";
import { TiThMenu } from "react-icons/ti";
import { DataContext } from "../App";

import basketLogo from "../assets/basket.svg";
import BasketLogo from "./Header/BasketLogo";
import BasketSectionPopop from "./Header/BasketSectionPopop";
import BasketNumber from "./Header/BasketNumber";

function Navbar() {
  const { handleToggleMenu, toggleMenu, toggleBasket, setToggleBasket, handleToggleBasket } = useContext(DataContext);

  return (
    <div className="flex  z-999 justify-start items-center bg-none px-10 py-4">
      <div className="flex-1  justify-start items-center hidden sm:block ">
        <Menu />
      </div>
      <div className="flex-1 relative flex sm:justify-end items-center transition-all duration-300 sm:hidden">
        <TiThMenu color="white" onClick={handleToggleMenu} size={30} className="cursor-pointer " />
        {toggleMenu && <MenuToggleMobile />}
      </div>

      <div className="flex-1 flex justify-center items-center ">
        <Logo />
      </div>
      <div className="flex-1 transition-all duration-300 relative flex justify-end gap-4 items-center  ">
        <SearchDesktop />
        <div className="relative">
          <BasketLogo onClick={handleToggleBasket} />
          <BasketNumber />
        </div>
        {toggleBasket && <BasketSectionPopop />}
      </div>
    </div>
  );
}

export default Navbar;
