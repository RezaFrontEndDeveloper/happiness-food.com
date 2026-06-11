import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { useContext } from "react";
import { DataContext } from "../App";

function MenuToggleMobile() {
  const { handleToggleMenu } = useContext(DataContext);
  return (
    <div className="fixed z-999 top-0 right-0 h-screen inset-0bg-pink-400/25 backdrop-blur-lg border border-pink-200/30  w-full ">
      <div>
        <FaTimes onClick={handleToggleMenu} />
      </div>
      <div>
        <ul className="flex flex-col w-full h-full justify-center items-center gap-8 px-4 ">
          <NavLink to="/" className="text-xl hover:text-red-600">
            <li>Home</li>
          </NavLink>
          <NavLink to="/product" className="text-xl hover:text-red-600">
            <li>Products</li>
          </NavLink>
          <NavLink to="aboutme" className="text-xl hover:text-red-600">
            <li>About</li>
          </NavLink>
          <NavLink to="contactus" className="text-xl hover:text-red-600">
            <li>Contact</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default MenuToggleMobile;
