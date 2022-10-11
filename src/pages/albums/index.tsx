import AlbumCard from "../../components/AlbumCard";
import Header from "../../components/Header";
import Heading from "../../components/Heading";
import useSavedAlbums from "../../hooks/useSavedAlbums";

function Albums() {
  const { savedAlbums } = useSavedAlbums();

  return (
    <>
      <Header showSearch />

      <div className="page-wrapper">
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
    </>
  );
}

export default Albums;
