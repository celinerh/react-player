import { createContext, useContext, useState } from "react";

interface Track {
  name: string | null;
  href: string | null;
  artists: string | null;
  currentTime: number | null;
}

const PlayerContext = createContext<{
  player: Track;
  setPlayer: React.Dispatch<React.SetStateAction<Track>> | null;
}>({
  player: {
    name: null,
    href: null,
    artists: null,
    currentTime: null,
  },
  setPlayer: null,
});

export const usePlayer = () => {
  return useContext(PlayerContext);
};

export const PlayerProvider = ({ children }: { children: React.ReactNode }) => {
  const [player, setPlayer] = useState<Track>({
    name: null,
    href: null,
    artists: null,
    currentTime: null,
  });

  return (
    <PlayerContext.Provider
      value={{
        player,
        setPlayer,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
