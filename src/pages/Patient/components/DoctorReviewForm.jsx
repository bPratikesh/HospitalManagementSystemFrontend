import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import StarRating from "./StarRating";

function DoctorReviewForm({ onSubmit, loading }) {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (rating === 0) {
      return;
    }

    onSubmit({
      rating,
      review,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="mb-3 block text-lg font-semibold">
          Rate your Doctor
        </label>

        <StarRating rating={rating} onChange={setRating} />
      </div>

      <div>
        <label className="mb-2 block font-medium">Review (Optional)</label>

        <Textarea
          rows={5}
          maxLength={200}
          placeholder="Share your experience..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />

        <p className="mt-2 text-right text-sm text-slate-500">
          {review.length}/200
        </p>
      </div>

      <Button
        type="submit"
        disabled={loading || rating === 0}
        className="w-full"
      >
        {loading ? "Submitting..." : "Submit Review"}
      </Button>
    </form>
  );
}

export default DoctorReviewForm;
