import { Heart, Music2, Star } from "lucide-react";

export default function ArtistCard({ artist }) {
  return (
    <div
className="
group
bg-slate-800
rounded-3xl
p-6
border
border-slate-700
hover:border-green-500
hover:-translate-y-2
hover:shadow-2xl
hover:shadow-green-500/20
transition-all
duration-300
">

      {/* Artist Image */}
      <div className="flex justify-center">
        <img
          src={artist.image}
          alt={artist.name}
          className="w-40 h-40 rounded-full object-cover border-4 border-green-500 shadow-lg mx-auto hover:scale-105 transition duration-300"
        />
      </div>
      {/* Artist Info */}
      <div className="mt-5 text-center">
        <div className="flex items-center justify-center gap-2">
  <h2 className="text-2xl font-bold">
    {artist.name}
  </h2>

  <span className="bg-blue-500 text-xs px-2 py-1 rounded-full">
    ✔
  </span>
</div>
        <p className="text-green-400 mt-1">
          {artist.genre}
        </p>
      </div>

      {/* Stats */}
      <div className="mt-6 space-y-3">

        <div className="flex
flex-col
md:flex-row
justify-between
md:items-center
gap-5">
          <span className="flex items-center gap-2 text-slate-400">
            <Heart size={18} />
            Followers
          </span>

          <span className="font-semibold">
            {artist.followers}
          </span>
        </div>

        <div className="flex
flex-col
md:flex-row
justify-between
md:items-center
gap-5">
          <span className="flex items-center gap-2 text-slate-400">
            <Music2 size={18} />
            Songs
          </span>

          <span className="font-semibold">
            {artist.songs}
          </span>
        </div>

        <div className="flex
flex-col
md:flex-row
justify-between
md:items-center
gap-5">
          <span className="flex items-center gap-2 text-slate-400">
            <Star size={18} />
            Popularity
          </span>

          <span className="font-semibold">
            {artist.popularity}%
          </span>
        </div>

      </div>

      {/* Button */}
           <button
className="
w-full
mt-6
bg-green-500
hover:bg-green-600
rounded-xl
py-3
font-semibold
transition
">
View Profile
</button>

    </div>
  );
}