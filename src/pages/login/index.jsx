import { GrSpotify } from "react-icons/gr";

function Login() {
  return (
    <div className="flex flex-col p-6 ">
      <h1 className="mt-2 text-3xl font-bold mb-80">Log In</h1>

      <button className="flex items-center gap-4 px-8 py-3 mx-auto text-white bg-green-500 rounded-lg w-fit">
        <GrSpotify className="text-4xl " />
        Log in with Spotify
      </button>
    </div>
  );
}

export default Login;
