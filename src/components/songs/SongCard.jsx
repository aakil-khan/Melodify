export default function SongCard({ song }) {
  return (
    <div className="bg-slate-800 rounded-2xl p-4 border border-slate-700">

      <div className="flex gap-4">

        <img
          src={song.image}
          alt={song.title}
          className="w-20 h-20 rounded-xl object-cover"
        />

        <div className="flex-1">

          <h2 className="text-xl font-bold text-white">
            {song.title}
          </h2>

          <p className="text-slate-400 mt-1">
            👤 {song.artist}
          </p>

          <p className="text-slate-400">
            💿 {song.album}
          </p>

          <p className="text-slate-400">
            🎼 {song.genre}
          </p>

          <p className="text-green-400 font-semibold mt-2">
            ▶ {song.streams} Streams
          </p>

        </div>

      </div>

    </div>
  );
}