function SearchResultsArtists({ artists }: { artists: any }) {
  console.log("artists", artists);
  return (
    <div className="mt-4 text-xs dark:text-white ">
      {artists?.items?.map((artist: any) => (
        <div
          key={artist.id}
          className="flex items-center gap-3 py-2 border-b-[1px] border-white"
        >
          <img
            src={artist.images[2].url}
            alt={artist.name}
            className="w-10 h-10"
          />
          <div>
            <p className="font-semibold">{artist.name}</p>
            <p className="font-light">{artist.followers.total} followers</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchResultsArtists;
