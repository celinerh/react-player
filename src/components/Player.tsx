import AudioPlayer from "react-h5-audio-player";
import { IoCloseOutline, IoPauseOutline, IoPlay } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { usePlayer } from "../contexts/PlayerContext";
import "../player.css";

function Player() {
  const { player, setPlayer } = usePlayer();
  const navigate = useNavigate();

  const setCurrentTime = (meta: any) => {
    if (!setPlayer) {
      return;
    }

    const { currentTime } = meta.target;

    setPlayer((prev) => ({
      ...prev,
      currentTime: currentTime,
    }));
  };

  return (
    <div
      className={`p-3 bg-red-50 ${
        !player.href && "absolute opacity-0 pointer-events-none"
      }`}
    >
      <div
        className="w-8 h-1 mx-auto bg-zinc-400"
        onClick={() => {
          navigate("/playing");
        }}
      ></div>

      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold">{player.name}</p>
          <p className="text-xs">{player.artists}</p>
        </div>

        <div className="flex justify-end gap-2 mt-3 text-3xl">
          <AudioPlayer
            className="player"
            autoPlay={true}
            src={player.href ?? ""}
            onPlay={(e) => console.log("onPlay")}
            showJumpControls={false}
            customVolumeControls={[]} // remove volume controls
            customAdditionalControls={[]} // remove additional controls: loop button
            customIcons={{
              play: <IoPlay />,
              pause: <IoPauseOutline />,
            }}
            onListen={setCurrentTime}
          />

          <IoCloseOutline
            onClick={() => {
              if (!setPlayer) {
                return;
              }

              setPlayer({
                name: null,
                href: null,
                artists: null,
                currentTime: null,
              });
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Player;
