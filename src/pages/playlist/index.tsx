import Header from "../../components/Header";
import Title from "../../components/Title";
import Track from "../../components/Track";
import usePlaylist from "../../hooks/usePlaylist";

function Playlist() {
  const { playlist } = usePlaylist();

  return (
    <>
      <Header title={playlist?.name} showArrow showSearch />

      <div className="p-0 page-wrapper">
        <img
          src={playlist?.images[0].url}
          alt={playlist?.name}
          className="col-span-full row-span-full"
        />

        <div className="p-6">
          <Title title="All Songs" />

          <div className="flex flex-col gap-3">
            {playlist &&
              playlist.tracks.items.map((track: any, i: number) => (
                <Track
                  key={i}
                  name={track.track.name}
                  trackURL={track.track.preview_url}
                  artists={track.track.artists.map(
                    (artist: any) => artist.name
                  )}
                  duration={track.track.duration_ms}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Playlist;
