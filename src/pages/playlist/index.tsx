import { useParams } from "react-router-dom";
import Title from "../../components/Title";
import Track from "../../components/Track";
import useGetTracks from "../../hooks/useGetTracks";

function Playlist() {
  const { id } = useParams();
  const { tracks } = useGetTracks(
    `https://api.spotify.com/v1/playlists/${id}/tracks`
  );

  return (
    <div>
      <Title title="All Songs" />

      <div className="flex flex-col gap-3">
        {tracks &&
          tracks.items.map((track: any) => (
            <Track
              key={track.id}
              name={track.track.name}
              artists={track.track.artists.map((artist: any) => artist.name)}
              duration={track.track.duration_ms}
            />
          ))}
      </div>
    </div>
  );
}

export default Playlist;
