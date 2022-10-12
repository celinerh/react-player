function AlbumCover({
  imageSource,
  albumName,
  albumArtists,
  albumTotalTracks,
}: {
  imageSource: string;
  albumName: string;
  albumArtists: Array<any>;
  albumTotalTracks: number;
}) {
  return (
    <div className="grid grid-cols-1 grid-rows-1">
      <img
        src={imageSource}
        alt={albumName}
        className="col-span-full row-span-full"
      />
      <div className="flex flex-col justify-between h-[370px] text-white col-span-full row-span-full p-6">
        <div>
          <h1 className="text-2xl font-bold ">{albumName}</h1>
          <h2 className="font-medium">{albumArtists.join(", ")}</h2>
        </div>

        <p className="">
          {albumTotalTracks}
          {albumTotalTracks > 1 ? " songs" : " song"}
        </p>
      </div>
    </div>
  );
}

export default AlbumCover;
