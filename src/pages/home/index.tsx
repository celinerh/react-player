import AlbumCard from "../../components/AlbumCard";
import Heading from "../../components/Heading";
import Title from "../../components/Title";
import useNewReleases from "../../hooks/useNewReleases";

function Home() {
  const { newReleases } = useNewReleases();
  console.log(newReleases);

  return (
    <div>
      <Heading title="All Albums" />
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
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
