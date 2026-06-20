import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { TfiSearch } from "react-icons/tfi";

import Menu from "./Menu";
import Logo from "./Logo";
import MenuToggleMobile from "./MenuToggleMobile";
import SearchDesktop from "./SearchDesktop";

import BasketLogo from "./BasketLogo";
import BasketSectionPopop from "./BasketSectionPopop";
import BasketNumber from "./BasketNumber";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [toggleBasket, setToggleBasket] = useState(false);

  function handleToggleMenu() {
    setToggleMenu((prev) => !prev);
  }

  function handleToggleSearch() {
    setToggleSearch((prev) => !prev);
  }

  function HandleToggleBasket() {
    setToggleBasket((prev) => !prev);
  }

  return (
    <div className="flex  z-999 justify-start items-center bg-none px-10 py-4">
      <div className="flex-1  justify-start items-center hidden sm:block ">
        <Menu />
      </div>
      <div className="flex-1 relative flex sm:justify-end items-center transition-all duration-300 sm:hidden">
        <TiThMenu
          color="white"
          onClick={handleToggleMenu}
          size={30}
          className="cursor-pointer "
        />
        {toggleMenu && <MenuToggleMobile handleToggleMenu={handleToggleMenu} />}
      </div>

      <div className="flex-1 flex justify-center items-center ">
        <Logo />
      </div>
      <div className="flex-1 transition-all duration-300 relative flex justify-end gap-4 items-center  ">
        <div>
          <TfiSearch
            color="white"
            size={25}
            className="cursor-pointer"
            onClick={handleToggleSearch}
          />
        </div>
        {toggleSearch && (
          <SearchDesktop handleToggleSearch={handleToggleSearch} />
        )}

        <div className="relative">
          <BasketLogo onClick={HandleToggleBasket} />
          <BasketNumber />
        </div>
        {toggleBasket && (
          <BasketSectionPopop setToggleBasket={setToggleBasket} />
        )}
      </div>
    </div>
  );
}

export default Navbar;
