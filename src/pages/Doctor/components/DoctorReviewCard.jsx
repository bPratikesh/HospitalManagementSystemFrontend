import { Card, CardContent } from "@/components/ui/card";

import StarRating from "@/pages/Patient/components/StarRating";

import { formatDate } from "@/utils/dateUtils";

function DoctorReviewCard({ review }) {
  return (
    <Card>
      <CardContent className="space-y-4 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-semibold text-lg">{review.patientName}</h2>

            <p className="text-sm text-slate-500">
              {formatDate(review.reviewDate)}
            </p>
          </div>

          <StarRating rating={review.rating} readOnly size={20} />
        </div>

        {review.review && <p className="text-slate-700">{review.review}</p>}
      </CardContent>
    </Card>
  );
}

export default DoctorReviewCard;
