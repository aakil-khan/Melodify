
import { Eye, Pencil, Trash2 } from "lucide-react";
const statusStyles = {
  Trending: "bg-green-500/20 text-green-400",
  Popular: "bg-blue-500/20 text-blue-400",
  New: "bg-yellow-500/20 text-yellow-400",
};

export default function SongsTable({songs}) {
  return (
    <div className="bg-slate-800 rounded-3xl border border-slate-700 p-6">

      <div className="overflow-x-auto">
        <table className="min-w-full">
        <thead>
          <tr className="text-slate-400 border-b border-slate-700">
            <th className="text-left py-4">Song</th>
            <th className="text-left">Artist</th>
            <th className="text-left">Album</th>
            <th className="text-left">Genre</th>
            <th className="text-left">Streams</th>
            <th className="text-left">Status</th>
            <th className="text-left">Actions</th>
          </tr>
        </thead>
    
        <tbody>
          {songs.map((song) => (
            <tr
              key={song.id}
              className="border-b border-slate-700 hover:bg-slate-700 transition">
             <td className="py-5">
    <div className="flex items-center gap-4">
        <img
            src={song.cover}
            alt={song.title}
            className="w-12 h-12 rounded-lg object-cover"
        />
        <div>
            <h3 className="font-semibold">
                {song.title}
            </h3>
        </div>

    </div>

        </td>
             <td>{song.artist}</td>
              <td>{song.album}</td>
              <td>{song.genre}</td>
              <td>{song.streams}</td>
              <td>
                <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${statusStyles[song.status]}`}>{song.status}
            </span>
              </td>

              <td>
  <div className="flex gap-3">
    <Eye
      size={18}
      className="cursor-pointer hover:text-green-400"
    />

    <Pencil
      size={18}
      className="cursor-pointer hover:text-blue-400"/>

    <Trash2
      size={18}
      className="cursor-pointer hover:text-red-400"/>
  </div></td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}