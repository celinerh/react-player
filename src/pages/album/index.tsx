import AlbumCover from "../../components/AlbumCover";
import Header from "../../components/Header";
import Title from "../../components/Title";
import Track from "../../components/Track";
import useAlbum from "../../hooks/useAlbum";

function Album() {
  const { album } = useAlbum();

  return (
    <>
      <Header showArrow showSearch />

      <div className="p-0 page-wrapper">
        {album && (
          <AlbumCover
            imageSource={album?.images[0].url}
            albumName={album?.name}
            albumArtists={album?.artists.map((artist: any) => artist.name)}
            albumTotalTracks={album?.total_tracks}
          />
        )}

        <div className="p-6">
          <Title title="All Songs" />
          <div className="flex flex-col gap-3">
            {album &&
              album.tracks.items.map((track: any) => (
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
      </div>
    </>
  );
}

export default Album;
