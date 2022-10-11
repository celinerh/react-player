function SearchResultsTracks({ tracks }: { tracks: any }) {
  return (
    <div className="mt-4 text-xs dark:text-white">
      {tracks?.items?.map((track: any) => (
        <div
          key={track.id}
          className="flex items-center gap-3 py-2 border-b-[1px] border-white"
        >
          <img
            src={track.album.images[2].url}
            alt={track.name}
            className="w-10 h-10"
          />
          <div>
            <p className="font-semibold">{track.name}</p>
            <p className="font-extralight">
              {track.artists.map((artist: any) => artist.name).join(", ")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchResultsTracks;
