import AlbumCard from "../../components/AlbumCard";
import Heading from "../../components/Heading";
import useGetCategorysPlaylists from "../../hooks/useGetCategorysPlaylists";

function Category() {
  const { playlists } = useGetCategorysPlaylists();

  return (
    <div>
      <Heading title="Playlists" />
      <div className="grid grid-cols-2 gap-6">
        {playlists &&
          playlists.playlists.items.map((playlist: any) => (
            <AlbumCard
              key={playlist.id}
              type="playlist"
              href={playlist.href}
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
