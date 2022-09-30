import { IoPlay } from "react-icons/io5";
import { formatToISODuration } from "../utils/formatToISODuration ";

function Track({
  name,
  artists,
  duration,
}: {
  name: string;
  artists: string[];
  duration: number;
}) {
  return (
    <div className="flex gap-4 text-sm">
      <div className="flex items-center justify-center w-full h-8 max-w-[2rem] rounded-full place-self-center bg-gradient-to-r from-gradientL to-gradientR">
        <IoPlay className="text-white dark:text-additional" />
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
