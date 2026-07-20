import { recentSongs } from "../../data/recentSongs";

export default function RecentSongs() {
  return (
    <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6">
      <h2 className="text-xl font-semibold mb-5">
        🎵 Recent Songs
      </h2>

      <table className="w-full">
        <thead className="text-slate-400">
          <tr>
            <th className="text-left pb-4">Song</th>
            <th className="text-left">Artist</th>
            <th className="text-left">Streams</th>
            <th className="text-left">Status</th>
          </tr>
        </thead>

        <tbody>
          {recentSongs.map((song) => (
            <tr
              key={song.id}
              className="border-t border-slate-700"
            >
              <td className="py-4">{song.title}</td>
              <td>{song.artist}</td>
              <td>{song.streams}</td>

              <td>
                <span className="bg-green-600 px-3 py-1 rounded-full text-sm">
                  {song.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}