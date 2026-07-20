import { useState } from "react";
import SearchBar from "../components/common/SearchBar";
import ReviewCard from "../components/reviews/ReviewCard";
import { reviews } from "../data/reviews";

export default function Reviews() {
  const [search, setSearch] = useState("");

  const filteredReviews = reviews.filter((review) =>
    review.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Reviews
        </h1>

        <p className="text-slate-400 mt-2">
          What our listeners say • {filteredReviews.length} reviews
        </p>
      </div>

      <SearchBar
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search reviews..."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {filteredReviews.map((review) => (
          <ReviewCard
            key={review.id}
            review={review}
          />
        ))}

      </div>

    </div>
  );
}