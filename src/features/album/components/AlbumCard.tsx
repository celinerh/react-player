import { Link } from "react-router-dom";
import RoundedImage from "../../../components/RoundedImage";

function AlbumCard({
  type,
  href,
  id,
  title,
  imageSource,
  artists,
}: {
  type: string;
  href: string;
  id: string;
  title: string;
  imageSource: string;
  artists: Array<any>;
}) {
  return (
    <Link
      to={`/albums/${id}`}
      className="grid grid-cols-1 grid-rows-1 drop-shadow-md"
    >
      <RoundedImage
        className="col-span-full row-span-full"
        imageSource={imageSource}
        alt={title}
      />
      <div className="flex flex-col justify-end p-2 text-white col-span-full row-span-full w-fit">
        <h1 className="font-bold ">{title}</h1>
        <p className="text-[0.7rem] font-light">{artists.join(", ")}</p>
      </div>
    </Link>
  );
}

export default AlbumCard;
