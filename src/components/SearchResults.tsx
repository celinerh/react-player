import React from "react";

function SearchResults({ results }: { results: any }) {
  console.log("results:", results);

  return (
    <div className="text-xs dark:text-white">
      <h2 className="text-xl text-red-500 uppercase">Albums</h2>
      {results?.albums?.items?.map((album: any) => (
        <div
          key={album.id}
          className="flex items-center gap-3 py-4 border-b-[1px] border-white"
        >
          <img src={album.images[2].url} alt="" className="w-10 h-10" />
          <div>
            <p className="font-semibold">{album.name}</p>
            <p className="font-extralight">
              {album.artists.map((artist: any) => artist.name).join(", ")}
            </p>
          </div>
        </div>
      ))}
      <h2 className="text-xl text-red-500 uppercase">Artists</h2>
      {results?.artists?.items?.map((artist: any) => (
        <div key={artist.id} className="mb-4">
          <p>{artist.name}</p>
        </div>
      ))}

      <h2 className="text-xl text-red-500 uppercase">Tracks</h2>
      {results?.tracks?.items?.map((track: any) => (
        <div key={track.id} className="mb-4">
          <p className="font-semibold">{track.name}</p>
          <p className="font-extralight">
            {track.artists.map((artist: any) => artist.name).join(", ")}
          </p>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
