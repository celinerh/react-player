import AlbumCard from "../../components/AlbumCard";
import Heading from "../../components/Heading";
import Title from "../../components/Title";
import useAlbumNewReleases from "../../hooks/useAlbumNewReleases";
import useFeaturedPlaylists from "../../hooks/useFeaturedPlaylists";

function Featured() {
  const { newReleases } = useAlbumNewReleases();
  const { featuredPlaylists } = useFeaturedPlaylists();

  return (
    <div>
      <Heading title="Featured" />
      <Title title="New Releases" />
      <div className="grid grid-cols-2 gap-6">
        {newReleases &&
          newReleases.albums.items.map((album: any) => (
            <AlbumCard
              key={album.id}
              title={album.name}
              imageSource={album.images[0].url}
              artists={album.artists.map((artist: any) => artist.name)}
            />
          ))}
      </div>
      <Title title="Featured Playlists" />
      <div className="grid grid-cols-2 gap-6">
        {featuredPlaylists &&
          featuredPlaylists.playlists.items.map((playlist: any) => (
            <AlbumCard
              key={playlist.id}
              title={playlist.name}
              imageSource={playlist.images[0].url}
              artists={[playlist.owner.display_name]}
            />
          ))}
      </div>
    </div>
  );
}

export default Featured;
