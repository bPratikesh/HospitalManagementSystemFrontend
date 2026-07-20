import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Card, CardContent } from "@/components/ui/card";


import doctorReviewService from "@/services/doctorReviewService";

import { showSuccess, showError } from "@/lib/toast";
import DoctorReviewForm from "./components/DoctorReviewForm";

function RateDoctor() {
  const { appointmentId } = useParams();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data) => {
    try {
      setLoading(true);

      await doctorReviewService.createReview(appointmentId, data);

      showSuccess("Thank you for your review!");

      navigate("/patient/appointments");
    } catch (error) {
      console.error(error);

      showError(error.response?.data?.message || "Failed to submit review.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container max-w-2xl py-10">
      <Card>
        <CardContent className="space-y-6 p-8">
          <div>
            <h1 className="text-3xl font-bold">Rate Your Doctor</h1>

            <p className="mt-2 text-slate-500">
              Your feedback helps other patients.
            </p>
          </div>

          <DoctorReviewForm onSubmit={handleSubmit} loading={loading} />
        </CardContent>
      </Card>
    </div>
  );
}

export default RateDoctor;
