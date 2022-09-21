import { BsChevronLeft } from "react-icons/bs";
import { VscColorMode } from "react-icons/vsc";
import { CgLogOut } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

function Header({ title }: { title: string }) {
  const navigate = useNavigate();

  return (
    <div className="grid items-center grid-cols-3 p-4 text-xl bg-red-300 text-zinc-700 dark:bg-secondary dark:text-white">
      {title !== "home" && <BsChevronLeft className="mr-auto" />}
      {title === "home" && (
        <CgLogOut
          className="mr-auto"
          onClick={() => {
            navigate("/login");
          }}
        />
      )}
      <h1 className="col-start-2 tracking-widest uppercase font-extralight place-self-center">
        {title}
      </h1>
      {title === "home" && <VscColorMode className="ml-auto" />}
    </div>
  );
}

export default Header;
