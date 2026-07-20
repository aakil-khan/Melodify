import { useState } from "react";
import SearchBar from "../components/common/SearchBar";
import ArtistCard from "../components/artists/ArtistCard";
import { artists } from "../data/artists";

export default function Artists() {
  const [search, setSearch] = useState("");

  const filteredArtists = artists.filter((artist) =>
    artist.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">Artists</h1>

        <p className="text-slate-400 mt-2">
          Discover and manage artists • {filteredArtists.length} artists
        </p>
      </div>

      <SearchBar
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search artists..."/>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 gap-6">

        {filteredArtists.map((artist) => (
          <ArtistCard
            key={artist.id}
            artist={artist}
          />
        ))}

      </div>

    </div>
  );
}