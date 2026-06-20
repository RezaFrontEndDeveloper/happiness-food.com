import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

function MenuToggleMobile({ handleToggleMenu }) {
  return (
    <div className="fixed p-8 z-999 top-0 right-0 h-screen inset-0bg-pink-400/25 backdrop-blur-lg border border-pink-200/30  w-full ">
      <div>
        <FaTimes onClick={handleToggleMenu} className="cursor-pointer" />
      </div>
      <div className="flex justify-center items-center h-full">
        <ul className="flex flex-col w-full h-full justify-center items-center gap-8 px-4 ">
          <li className="text-xl hover:text-red-600">
            <NavLink to="/" onClick={handleToggleMenu}>
              Home{" "}
            </NavLink>
          </li>

          <li className="text-xl hover:text-red-600">
            <NavLink onClick={handleToggleMenu} to="/product">
              Products
            </NavLink>
          </li>

          <li className="text-xl hover:text-red-600">
            <NavLink onClick={handleToggleMenu} to="aboutme">
              About
            </NavLink>
          </li>

          <li className="text-xl hover:text-red-600">
            <NavLink onClick={handleToggleMenu} to="contactus">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MenuToggleMobile;
