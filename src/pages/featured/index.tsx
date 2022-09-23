import AlbumCard from "../../components/AlbumCard";
import Heading from "../../components/Heading";
import Title from "../../components/Title";
import useAlbumNewReleases from "../../hooks/useAlbumNewReleases";

function Featured() {
  const { newReleases } = useAlbumNewReleases();

  return (
    <div>
      <Heading title="Featured" />
      <Title title="New Releases" />
      <div className="grid grid-cols-2 gap-6">
        {newReleases &&
          newReleases.albums.items.map((album: any) => (
            // <div key={item.id}>
            //   <h1>{item.name}</h1>
            //   <div>
            //     {item.artists.map((artist: any) => (
            //       <p key={artist.id}>{artist.name}</p>
            //     ))}
            //   </div>
            // </div>
            <AlbumCard
              key={album.id}
              title={album.name}
              imageSource={album.images[0].url}
              artists={album.artists.map((artist: any) => artist.name)}
            />
          ))}
      </div>
    </div>
  );
}

export default Featured;
