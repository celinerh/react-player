import { NavLink } from "react-router-dom";
import { MdHomeFilled } from "react-icons/md";
import { IoPulseOutline, IoGrid, IoContrastOutline } from "react-icons/io5";
import { IoMdList, IoMdWifi } from "react-icons/io";

function Navigation() {
  return (
    <nav className="shadow-top">
      <ul className="grid items-center grid-cols-5 p-3 text-2xl dark:bg-additional justify-items-center">
        <li>
          <NavLink to="/albums">
            <IoPulseOutline className="text-gradientL" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/playlists">
            <IoMdList className="text-gradientL" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/featured">
            <div className="flex items-center justify-center rounded-full w-14 h-14 bg-gradient-to-r from-gradientL to-gradientR">
              <IoMdWifi className="text-5xl text-white dark:text-additional" />
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/categories">
            <IoGrid className="text-gradientR" />
          </NavLink>
        </li>
        <li>
          <IoContrastOutline className="text-gradientR" />
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
