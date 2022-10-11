import React from "react";

function SearchResultsAlbums({ albums }: { albums: any }) {
  return (
    <div className="text-xs dark:text-white">
      {albums?.items?.map((album: any) => (
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
    </div>
  );
}

export default SearchResultsAlbums;
