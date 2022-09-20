import useNewReleases from "../../hooks/useNewReleases";

function Home() {
  const { newReleases } = useNewReleases();

  return (
    <div>
      {newReleases &&
        newReleases.albums.items.map((item: any) => (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <div>
              {item.artists.map((artist: any) => (
                <p key={artist.id}>{artist.name}</p>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}

export default Home;
