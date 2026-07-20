import { useState } from "react";
import SearchBar from "../components/common/SearchBar";
import AlbumCard from "../components/albums/AlbumCard";
import { albums } from "../data/albums";

export default function Albums() {

  const [search, setSearch] = useState("");

  const filteredAlbums = albums.filter((album) =>
    album.title.toLowerCase().includes(search.toLowerCase()) ||
    album.artist.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Albums
        </h1>
        <p className="text-slate-400 mt-2">
          Manage Albums • {filteredAlbums.length} albums
        </p>
      </div>
      <SearchBar
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        placeholder="Search albums..."/>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

        {filteredAlbums.map((album)=>(
          <AlbumCard
            key={album.id}
            album={album}
          />
        ))}

      </div>

    </div>
  );
}