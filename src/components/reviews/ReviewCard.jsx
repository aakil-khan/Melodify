import { Star } from "lucide-react";

export default function ReviewCard({ review }) {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-green-500 hover:-translate-y-1 transition-all">

      <div className="flex items-center gap-4">

        <img
          src={review.avatar}
          alt={review.name}
          className="w-16 h-16 rounded-full object-cover"
        />

        <div>
          <h2 className="text-xl font-bold">
            {review.name}
          </h2>

          <div className="flex mt-1">
            {[...Array(review.rating)].map((_, index) => (
              <Star
                key={index}
                size={18}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
        </div>

      </div>

      <p className="text-slate-300 mt-5 leading-7">
        "{review.review}"
      </p>

      <div className="mt-5 text-green-400 font-medium">
        🎵 Favorite Song: {review.favorite}
      </div>

    </div>
  );
}