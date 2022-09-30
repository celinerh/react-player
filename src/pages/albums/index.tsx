import AlbumCard from "../../components/AlbumCard";
import Heading from "../../components/Heading";
import useSavedAlbums from "../../hooks/useSavedAlbums";

function Albums() {
  const { savedAlbums } = useSavedAlbums();
  console.log(savedAlbums);

  return (
    <div>
      <Heading title="Albums" />
      <div className="grid grid-cols-2 gap-6">
        {savedAlbums &&
          savedAlbums.items.map((album: any) => (
            <AlbumCard
              key={album.album.id}
              type="album"
              href={album.album.href}
              id={album.album.id}
              title={album.album.name}
              imageSource={album.album.images[0].url}
              artists={album.album.artists.map((artist: any) => artist.name)}
            />
          ))}
      </div>
    </div>
  );
}

export default Albums;
