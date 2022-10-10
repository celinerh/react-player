import { IoIosArrowBack } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
import { IoSearchOutline, IoLogOutOutline } from "react-icons/io5";

function Header({ title }: { title: string }) {
  const navigate = useNavigate();

  return (
    <div className="z-50 grid items-center grid-cols-3 p-4 text-xl text-zinc-700 dark:bg-secondary dark:text-white">
      {!["featured", "albums", "playlists", "categories"].includes(title) && (
        <IoIosArrowBack
          className="mr-auto"
          onClick={() => {
            navigate(-1);
          }}
        />
      )}
      {title === "featured" && (
        <IoLogOutOutline
          className="mr-auto"
          onClick={() => {
            navigate("/login");
          }}
        />
      )}
      <h1 className="col-start-2 tracking-widest uppercase font-extralight place-self-center">
        {title}
      </h1>

      <NavLink to="/search">
        <IoSearchOutline className="ml-auto" />
      </NavLink>
    </div>
  );
}

export default Header;
