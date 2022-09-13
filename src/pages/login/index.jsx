import { GrSpotify } from "react-icons/gr";

const CLIENT_ID = "b27850c09d1a4ebf9e6fe3ebde9e4278";
const RESPONSE_TYPE = "code";
const REDIRECT_URI = "http://localhost:3000/home";
const SCOPE =
  "streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

const AUTH_URL = `https://accounts.spotify.com/authorize?
client_id=${CLIENT_ID}
&response_type=${RESPONSE_TYPE}
&redirect_uri=${REDIRECT_URI}
&scope=${SCOPE}`;

function Login() {
  return (
    <div className="flex flex-col p-6 ">
      <h1 className="mt-2 text-3xl font-bold mb-80">Log In</h1>

      <a
        href={AUTH_URL}
        className="flex items-center gap-4 px-8 py-3 mx-auto text-white bg-green-500 rounded-lg w-fit"
      >
        <GrSpotify className="text-4xl " />
        Log in with Spotify
      </a>
    </div>
  );
}

export default Login;
