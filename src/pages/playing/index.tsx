import { usePlayer } from "../../contexts/PlayerContext";
import AudioPlayer from "react-h5-audio-player";
// import "react-h5-audio-player/lib/styles.css";

function Playing() {
  const { player } = usePlayer();
  console.log(player.href);

  return (
    <div>
      <p>{player.name}</p>
      <p>{player.artists}</p>
      <AudioPlayer
        autoPlay
        src={player.href ?? ""}
        onPlay={(e) => console.log("onPlay")}
      />
    </div>
  );
}

export default Playing;
