import { Star } from "lucide-react";

function StarRating({ rating, onChange, readOnly = false, size = 32 }) {
  return (
    <div className="flex items-center gap-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={readOnly}
          onClick={() => !readOnly && onChange(star)}
          className={`transition ${
            readOnly ? "cursor-default" : "cursor-pointer hover:scale-110"
          }`}
        >
          <Star
            size={size}
            className={
              star <= rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-slate-300"
            }
          />
        </button>
      ))}
    </div>
  );
}

export default StarRating;
