import { useParams } from "react-router-dom";
import Title from "../../components/Title";
import Track from "../../components/Track";
import useGetTracks from "../../hooks/useGetTracks";

function Album() {
  const { id } = useParams();
  const { tracks } = useGetTracks(
    `https://api.spotify.com/v1/albums/${id}/tracks`
  );

  return (
    <div className="page-wrapper">
      <Title title="All Songs" />

      <div className="flex flex-col gap-3">
        {tracks &&
          tracks.items.map((track: any) => (
            <Track
              key={track.id}
              name={track.name}
              trackURL={track.preview_url}
              artists={track.artists.map((artist: any) => artist.name)}
              duration={track.duration_ms}
            />
          ))}
      </div>
    </div>
  );
}

export default Album;
