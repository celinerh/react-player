import PlaylistCover from "../../components/PlaylistCover";
import Title from "../../components/Title";
import Track from "../../components/Track";
import usePlaylist from "../../hooks/usePlaylist";

function Playlist() {
  const { playlist } = usePlaylist();

  return (
    <div className="p-0 page-wrapper">
      {playlist && (
        <PlaylistCover
          imageSource={playlist?.images[0].url}
          playlistName={playlist?.name}
        />
      )}

      <div className="p-6">
        <Title title="All Songs" />

        <div className="flex flex-col gap-3">
          {playlist &&
            playlist.tracks.items.map((track: any) => (
              <Track
                key={track.id}
                name={track.track.name}
                trackURL={track.track.preview_url}
                artists={track.track.artists.map((artist: any) => artist.name)}
                duration={track.track.duration_ms}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Playlist;
