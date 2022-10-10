function PlaylistCover({
  imageSource,
  playlistName,
}: {
  imageSource: string;
  playlistName: string;
}) {
  return (
    <div className="grid grid-cols-1 grid-rows-1">
      <img
        src={imageSource}
        alt={playlistName}
        className="col-span-full row-span-full"
      />
      <div className="flex flex-col justify-between h-[370px] text-white col-span-full row-span-full p-6">
        <div>
          <h1 className="text-2xl font-bold ">{playlistName}</h1>
        </div>
      </div>
    </div>
  );
}

export default PlaylistCover;
