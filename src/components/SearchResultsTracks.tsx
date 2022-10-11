import React from "react";

function SearchResultsTracks({ tracks }: { tracks: any }) {
  return (
    <div className="text-xs dark:text-white">
      {tracks?.items?.map((track: any) => (
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

export default SearchResultsTracks;
