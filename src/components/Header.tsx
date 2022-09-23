import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { IoSearchOutline, IoLogOutOutline } from "react-icons/io5";

function Header({ title }: { title: string }) {
  const navigate = useNavigate();

  return (
    <div className="grid items-center grid-cols-3 p-4 text-xl text-zinc-700 dark:bg-secondary dark:text-white">
      {title !== "featured" && <IoIosArrowBack className="mr-auto" />}
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
      <IoSearchOutline className="ml-auto" />
    </div>
  );
}

export default Header;
