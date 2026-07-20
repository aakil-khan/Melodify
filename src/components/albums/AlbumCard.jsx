import { Music2, Calendar } from "lucide-react";

export default function AlbumCard({ album }) {
  return (
    <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-green-500 hover:shadow-xl hover:shadow-green-500/20 hover:-translate-y-2 transition-all duration-300">

      <img
        src={album.cover}
        alt={album.title}
        className="w-full h-60 object-cover"
      />

      <div className="p-5">

        <h2 className="text-xl font-bold">
          {album.title}
        </h2>

        <p className="text-green-400">
          {album.artist}
        </p>

        <div className="flex
flex-col
md:flex-row
justify-between
md:items-center
gap-5 mt-4 text-slate-400 text-sm">

          <span>{album.genre}</span>

          <span className="flex items-center gap-1">
            <Calendar size={16}/>
            {album.year}
          </span>

        </div>

        <div className="flex items-center gap-2 mt-4 text-slate-300">

          <Music2 size={18}/>

          {album.tracks} Tracks

        </div>

        <button className="mt-5 w-full bg-green-500 hover:bg-green-600 py-3 rounded-xl font-semibold transition">
          View Album
        </button>

      </div>

    </div>
  );
}