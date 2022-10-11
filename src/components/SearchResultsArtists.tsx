import React from "react";

function SearchResultsArtists({ artists }: { artists: any }) {
  return (
    <div className="text-xs dark:text-white">
      {artists?.items?.map((artist: any) => (
        <div key={artist.id} className="mb-4">
          <p>{artist.name}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchResultsArtists;
