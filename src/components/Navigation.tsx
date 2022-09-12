import { NavLink } from "react-router-dom";
import { MdHomeFilled } from "react-icons/md";

function Navigation() {
  return (
    <nav>
      <ul className="grid items-center grid-cols-3 p-4 text-2xl bg-red-300 justify-items-center">
        <li></li>
        <li>
          <NavLink to="/home">
            <MdHomeFilled />
          </NavLink>
        </li>
        <li></li>
      </ul>
    </nav>
  );
}

export default Navigation;
