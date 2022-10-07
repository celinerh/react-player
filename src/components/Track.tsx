import { IoPlay } from "react-icons/io5";
import { usePlayer } from "../contexts/PlayerContext";
import { formatToISODuration } from "../utils/formatToISODuration ";

function Track({
  name,
  trackURL,
  artists,
  duration,
}: {
  name: string;
  trackURL: string;
  artists: string[];
  duration: number;
}) {
  const { setPlayer } = usePlayer();

  return (
    <div className="flex gap-4 text-sm dark:text-white">
      <div
        className="flex items-center justify-center w-full h-8 max-w-[2rem] rounded-full place-self-center bg-gradient-to-r from-gradientL to-gradientR"
        onClick={() => {
          if (!setPlayer) {
            return;
          }

          setPlayer({
            name: name,
            href: trackURL,
            artists: artists.join(", "),
            currentTime: 0,
          });
        }}
      >
        <IoPlay className="text-white" />
      </div>
      <div className="w-full">
        <p className="font-semibold">{name}</p>
        <p>{artists.join(", ")}</p>
      </div>
      <p className="ml-auto">{formatToISODuration(duration)}</p>
    </div>
  );
}

export default Track;
