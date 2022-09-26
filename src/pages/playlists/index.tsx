import AlbumCard from "../../components/AlbumCard";
import Heading from "../../components/Heading";
import usePlaylists from "../../hooks/usePlaylists";

function Playlists() {
  const { playlists } = usePlaylists();
  console.log(playlists);

  return (
    <div>
      <Heading title="Playlists" />
      <div className="grid grid-cols-2 gap-6">
        {playlists &&
          playlists.items.map((playlist: any) => (
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

export default Playlists;
