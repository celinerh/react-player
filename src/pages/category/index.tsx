import Heading from "../../components/Heading";
import PlaylistCard from "../../components/PlaylistCard";
import useGetCategorysPlaylists from "../../hooks/useGetCategorysPlaylists";

function Category() {
  const { playlists } = useGetCategorysPlaylists();

  return (
    <div>
      <Heading title="Playlists" />
      <div className="grid grid-cols-2 gap-6">
        {playlists &&
          playlists.playlists.items.map((playlist: any) => (
            <PlaylistCard
              key={playlist.id}
              id={playlist.id}
              title={playlist.name}
              imageSource={playlist.images[0].url}
              artists={[playlist.owner.display_name]}
            />
          ))}
      </div>
    </div>
  );
}

export default Category;
