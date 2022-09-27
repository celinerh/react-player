import RoundedImage from "./RoundedImage";

function AlbumCard({
  title,
  imageSource,
  artists,
}: {
  title: string;
  imageSource: string;
  artists: Array<any>;
}) {
  return (
    <div className="grid grid-cols-1 grid-rows-1 drop-shadow-md">
      <RoundedImage
        className="col-span-full row-span-full"
        imageSource={imageSource}
        alt={title}
      />
      <div className="flex flex-col justify-end p-2 text-white col-span-full row-span-full w-fit">
        <h1 className="font-bold ">{title}</h1>
        <p className="text-[0.7rem] font-light">{artists.join(", ")}</p>
      </div>
    </div>
  );
}

export default AlbumCard;
