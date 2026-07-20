import { useState, useEffect } from "react";
import SearchBar from "../components/common/SearchBar";
import SongsTable from "../components/songs/SongsTable";
import Select from "../components/common/Select";
import { songs } from "../data/songs";

export default function Songs() {
  // State
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");
  const [status, setStatus] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const songsPerPage = 5;

  // Filter Songs
  const filteredSongs = songs.filter((song) => {
    const matchesSearch =
      song.title.toLowerCase().includes(search.toLowerCase()) ||
      song.artist.toLowerCase().includes(search.toLowerCase());

    const matchesGenre =
      genre === "All" || song.genre === genre;

    const matchesStatus =
      status === "All" || song.status === status;

    return matchesSearch && matchesGenre && matchesStatus;
  });

  // Reset page whenever filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [search, genre, status]);

  // Pagination
  const indexOfLastSong = currentPage * songsPerPage;
  const indexOfFirstSong = indexOfLastSong - songsPerPage;

  const currentSongs = filteredSongs.slice(
    indexOfFirstSong,
    indexOfLastSong
  );

  const totalPages = Math.ceil(
    filteredSongs.length / songsPerPage
  );

  // Dynamic Genres
  const genres = [
    "All",
    ...new Set(songs.map((song) => song.genre)),
  ];

  // Statuses
  const statuses = [
    "All",
    "Trending",
    "Popular",
    "New",
  ];

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">

        <div>
          <h1 className="text-3xl font-bold">
            Songs
          </h1>

          <p className="text-slate-400">
            Manage your music library • {filteredSongs.length} songs
          </p>
        </div>

        <button
          className="
            bg-green-500
            hover:bg-green-600
            transition
            px-6
            py-3
            rounded-xl
            font-semibold
            shadow-lg
            hover:shadow-green-500/40
          "
        >
          + Add Song
        </button>

      </div>

      {/* Search + Filters */}
      <div className="flex flex-col lg:flex-row justify-between gap-4">

        <SearchBar
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search songs or artists..."
        />

        <div className="flex flex-wrap items-end gap-4">

          <div className="flex flex-col">
            <label className="text-sm text-slate-400 mb-1">
              Genre
            </label>

            <Select
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              options={genres}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-slate-400 mb-1">
              Status
            </label>

            <Select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              options={statuses}
            />
          </div>

        </div>

      </div>

      {/* Song Count */}
      <div className="flex
flex-col
md:flex-row
justify-between
md:items-center
gap-5 items-center text-sm text-slate-400">

        <p>
          Showing{" "}
          {filteredSongs.length === 0
            ? 0
            : indexOfFirstSong + 1}
          {" - "}
          {Math.min(
            indexOfLastSong,
            filteredSongs.length
          )}{" "}
          of {filteredSongs.length} songs
        </p>

      </div>

      {/* Table */}
      <SongsTable songs={currentSongs} />

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">

          <button
            onClick={() =>
              setCurrentPage((prev) =>
                Math.max(prev - 1, 1)
              )
            }
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40"
          >
            Previous
          </button>

          {Array.from(
            { length: totalPages },
            (_, index) => (
              <button
                key={index}
                onClick={() =>
                  setCurrentPage(index + 1)
                }
                className={`px-4 py-2 rounded-lg transition ${
                  currentPage === index + 1
                    ? "bg-green-500 text-black font-semibold"
                    : "bg-slate-800 hover:bg-slate-700"
                }`}
              >
                {index + 1}
              </button>
            )
          )}

          <button
            onClick={() =>
              setCurrentPage((prev) =>
                Math.min(prev + 1, totalPages)
              )
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40"
          >
            Next
          </button>

        </div>
      )}

    </div>
  );
}