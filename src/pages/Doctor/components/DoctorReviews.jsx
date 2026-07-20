import { useEffect, useState } from "react";

import DoctorReviewCard from "./DoctorReviewCard";

import doctorReviewService from "@/services/doctorReviewService";

import { getUser } from "@/utils/storage";

function DoctorReviews() {
  const [summary, setSummary] = useState(null);

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    const user = getUser();

    const [summaryData, reviewData] = await Promise.all([
      doctorReviewService.getDoctorSummary(user.doctorId),
      doctorReviewService.getDoctorReviews(user.doctorId),
    ]);

    setSummary(summaryData);

    setReviews(reviewData);
  };

  return (
    <div className="container space-y-8 py-10">
      <div>
        <h1 className="text-3xl font-bold">Patient Reviews</h1>

        {summary && (
          <div className="mt-3 text-xl">
            ⭐ {summary.averageRating} ({summary.totalReviews} Reviews)
          </div>
        )}
      </div>

      <div className="space-y-6">
        {reviews.map((review) => (
          <DoctorReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}

export default DoctorReviews;
