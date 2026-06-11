import { NavLink } from "react-router-dom";

function MenuToggleMobile() {
  return (
    <div className="absolute top-10 right-0">
      <ul className="flex flex-col bg-white px-4 py-2 gap-4 justify-between  items-center">
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
    </div>
  );
}

export default MenuToggleMobile;
