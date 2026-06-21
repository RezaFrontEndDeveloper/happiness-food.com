import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <ul className="flex justify-start gap-6  items-center">
      <NavLink to="/" className="text-white text-xl hover:text-red-700">
        <li>Home</li>
      </NavLink>
      <NavLink to="/product" className="text-white text-xl hover:text-red-700">
        <li>Products</li>
      </NavLink>
      <NavLink to="/aboutme" className="text-white text-xl hover:text-red-700">
        <li>About</li>
      </NavLink>
      <NavLink
        to="/contactus"
        className="text-white text-xl hover:text-red-700">
        <li>Contact</li>
      </NavLink>
      <NavLink
        to="/Employment"
        className="text-white text-xl hover:text-red-700">
        <li>Employment</li>
      </NavLink>
    </ul>
  );
}

export default Menu;
