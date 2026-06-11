import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <ul className="flex justify-between gap-2 items-center">
      <NavLink to="/">
        <li>Home</li>
      </NavLink>
      <NavLink to="/product">
        <li>Products</li>
      </NavLink>
      <NavLink to="aboutme">
        <li>About</li>
      </NavLink>
      <NavLink to="contactus">
        <li>Contact</li>
      </NavLink>
    </ul>
  );
}

export default Menu;
